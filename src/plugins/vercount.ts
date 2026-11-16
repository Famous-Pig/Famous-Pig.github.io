// Uses the public Vercount v2 protocol and host-scoped UV cookie from
// https://events.vercount.one/js. Do not also load that auto-counting script.
const metrics = ["site_pv", "site_uv", "page_pv"] as const;
type Counts = Record<(typeof metrics)[number], number>;

let initialized = false;
let currentPage = "";
let requestId = 0;
let counts: Counts | undefined;
let swupAttached = false;

function render(value?: Counts) {
    document.querySelectorAll<HTMLElement>("[data-vercount-metric]").forEach((element) => {
        const metric = element.dataset.vercountMetric as keyof Counts;
        element.textContent = value ? String(value[metric]) : "—";
    });
    document.querySelectorAll<HTMLElement>("[data-vercount-stats]").forEach((element) => {
        if (value) element.removeAttribute("title");
    });
}

async function recordPage() {
    const endpoint = document.getElementById("vercount-config")?.dataset.apiUrl;
    if (!endpoint) return;
    const page = new URL(location.href);
    page.hash = "";
    // Astro and Swup may both signal one navigation. Hash changes don't count.
    if (currentPage === page.href) {
        render(counts);
        return;
    }
    currentPage = page.href;
    counts = undefined;
    render();
    const id = ++requestId;
    const cookieName = `vercount_uv_${location.host.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
    const isNewUv = !document.cookie.split("; ").includes(`${cookieName}=1`);
    if (isNewUv) document.cookie = `${cookieName}=1; path=/; max-age=31536000; samesite=lax`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: page.href, isNewUv }),
            signal: controller.signal,
        });
        if (!response.ok) throw new Error(`Vercount HTTP ${response.status}`);
        const payload = await response.json();
        if (payload.status === "error") throw new Error("Vercount rejected the request");
        const data = payload.data ?? payload;
        const next = {} as Counts;
        for (const metric of metrics) {
            const value = data[metric];
            if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
                throw new Error(`Invalid Vercount metric: ${metric}`);
            }
            next[metric] = value;
        }
        // A response from the previous page must not overwrite the current page.
        if (id !== requestId) return;
        counts = next;
        render(counts);
    } catch (error) {
        if (id !== requestId) return;
        document.querySelectorAll<HTMLElement>("[data-vercount-stats]").forEach((element) => {
            element.title = element.dataset.i18nError || "Statistics unavailable";
        });
        console.warn("Vercount statistics unavailable:", error);
    } finally {
        clearTimeout(timeout);
    }
}

export function initVercount() {
    if (initialized || !document.getElementById("vercount-config")) return;
    initialized = true;
    const attachSwup = () => {
        if (swupAttached || !window.swup?.hooks) return;
        window.swup.hooks.on("page:view", recordPage);
        swupAttached = true;
    };
    attachSwup();
    document.addEventListener("swup:enable", attachSwup);
    document.addEventListener("astro:page-load", recordPage);
    void recordPage();
}
