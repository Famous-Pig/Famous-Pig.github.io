type TwikooClient = {
    init: (config: Record<string, unknown>) => Promise<void>;
};

let initialized = false;
let swupAttached = false;
let clientPromise: Promise<TwikooClient> | undefined;
let mounting = Promise.resolve();
const mounted = new WeakSet<HTMLElement>();

function loadClient(src: string): Promise<TwikooClient> {
    if (clientPromise) return clientPromise;
    clientPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve((window as Window & { twikoo: TwikooClient }).twikoo);
        script.onerror = () => {
            script.remove();
            clientPromise = undefined;
            reject(new Error("Failed to load Twikoo client"));
        };
        document.head.appendChild(script);
    });
    return clientPromise;
}

function mountComments() {
    const element = document.getElementById("tcomment");
    if (!element || mounted.has(element)) return;
    mounted.add(element);
    // Serialize initialization: the vendor client owns a single Vue app.
    mounting = mounting.then(async () => {
        if (!element.isConnected) return;
        try {
            const config = JSON.parse(element.dataset.twikooConfig || "{}");
            const client = await loadClient(element.dataset.twikooScript!);
            if (!element.isConnected) return;
            const path = new URL(config.path, location.origin).pathname;
            await client.init({
                ...config,
                // Match the path format used by the previous integration.
                path: path.length > 1 ? path.replace(/\/$/, "") : path,
                el: element,
            });
        } catch (error) {
            mounted.delete(element);
            if (element.isConnected) element.textContent = "评论加载失败，请稍后刷新重试。";
            console.error("Twikoo initialization failed:", error);
        }
    });
}

export function initComments() {
    if (initialized) return;
    initialized = true;
    const attachSwup = () => {
        if (swupAttached || !window.swup?.hooks) return;
        window.swup.hooks.on("page:view", mountComments);
        swupAttached = true;
    };
    attachSwup();
    document.addEventListener("swup:enable", attachSwup);
    document.addEventListener("astro:page-load", mountComments);
    document.addEventListener("twilight:page:loaded", mountComments);
    mountComments();
}
