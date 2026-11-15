<script lang="ts">
    import { onMount } from "svelte";
    import data from "@/data/missing-children.json";
    import { isCurrentBatch, isOfficialUrl, visibleCards } from "@utils/missing-children";

    let ready = $state(false);
    let now = $state(0);
    let failedPhotos = $state<Record<string, boolean>>({});
    const cards = $derived(visibleCards(data, now));
    const current = $derived(isCurrentBatch(data, now));

    onMount(() => {
        const update = () => { now = Date.now(); ready = true; };
        update();
        const timer = window.setInterval(update, 60000);
        window.addEventListener("focus", update);
        document.addEventListener("visibilitychange", update);
        return () => {
            window.clearInterval(timer);
            window.removeEventListener("focus", update);
            document.removeEventListener("visibilitychange", update);
        };
    });
</script>

<section aria-labelledby="seeking-title" class="my-8" data-pagefind-ignore>
    <div class="rounded-xl border border-amber-300/60 bg-amber-50 p-5 text-amber-950 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100">
        <p class="text-xs font-semibold tracking-wider mb-2">公益寻亲 · 每月人工复核</p>
        <h2 id="seeking-title" class="text-2xl font-bold mb-3">让一份寻找，多一次被看见</h2>
        <p class="leading-relaxed">本博客约每月更新一次，不是实时寻人平台。以下是官方公开资料的阶段性摘录，不代表当前寻亲状态；请打开官方原帖确认最新进展。</p>
        <dl class="grid sm:grid-cols-2 gap-3 mt-4 text-sm">
            <div><dt class="font-medium">本批资料核对日期</dt><dd><time datetime={data.reviewedAt}>{data.reviewedAt}</time></dd></div>
            <div><dt class="font-medium">下次计划复核 / 展示截止日期（北京时间）</dt><dd><time datetime={data.nextReviewAt}>{data.nextReviewAt} 00:00</time></dd></div>
        </dl>
    </div>

    <div class="flex flex-wrap gap-3 my-5">
        <a href="https://baobeihuijia.com/" target="_blank" rel="noopener noreferrer" class="rounded-lg px-4 py-2 bg-(--primary) text-white font-medium">前往宝贝回家官网 ↗</a>
        <p class="text-sm self-center text-neutral-600 dark:text-neutral-300">线索请通过官方原帖及其指定渠道提交，本博客不收集线索。</p>
    </div>

    {#if !ready}
        <p role="status" class="rounded-lg bg-neutral-100 p-4 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">正在检查资料有效期。若卡片未显示，请通过上方官方入口查看最新寻亲信息。</p>
    {:else if !current || cards.length === 0}
        <div role="status" class="rounded-xl border border-dashed border-neutral-300 p-6 text-neutral-700 dark:border-neutral-600 dark:text-neutral-200">
            <h3 class="font-semibold text-lg mb-2">本批资料已暂停展示，等待人工复核</h3>
            <p>资料超过展示截止日期、尚未生效或已被撤下时，页面会自动隐藏卡片。你仍可通过上方官网入口查看最新信息。</p>
        </div>
    {:else}
        <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-4">展示 {cards.length} 条“家寻宝贝”资料。失散时为儿童的寻亲对象，如今可能已经成年；类别按原帖保留。</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {#each cards as card (card.id)}
                <article class="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
                    <div class="relative flex h-52 items-center justify-center bg-neutral-100 dark:bg-neutral-800">
                        {#if isOfficialUrl(card.photoUrl) && !failedPhotos[card.id]}
                            <img src={card.photoUrl} alt={`${card.name}的官方寻亲资料图片`} loading="lazy" decoding="async" referrerpolicy="no-referrer" class="h-full w-full object-contain" onerror={() => { failedPhotos[card.id] = true; }} />
                        {:else}
                            <p class="px-5 text-center text-sm text-neutral-500 dark:text-neutral-300">图片暂不可用<br />请到官方原帖查看照片</p>
                        {/if}
                    </div>
                    <div class="flex flex-1 flex-col p-4 text-neutral-800 dark:text-neutral-100">
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-2">{card.category} · 原帖类别：{card.type}</p>
                        <h3 class="text-xl font-bold mb-3">{card.name}</h3>
                        <dl class="space-y-2 text-sm mb-4">
                            <div><dt class="inline text-neutral-500 dark:text-neutral-400">寻亲编号：</dt><dd class="inline">{card.id}</dd></div>
                            <div><dt class="inline text-neutral-500 dark:text-neutral-400">原帖失散日期：</dt><dd class="inline"><time datetime={card.lostDate}>{card.lostDate}</time></dd></div>
                            <div><dt class="inline text-neutral-500 dark:text-neutral-400">原帖地区：</dt><dd class="inline">{card.region}</dd></div>
                        </dl>
                        <p class="text-xs text-neutral-500 dark:text-neutral-400 mb-4">资料核对：{data.reviewedAt} · 状态以官方原帖为准</p>
                        <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`查看${card.name}的官方寻亲详情`} class="mt-auto block rounded-lg border border-neutral-300 px-3 py-2 text-center text-sm font-semibold hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800">查看官方详情 / 提供线索 ↗</a>
                    </div>
                </article>
            {/each}
        </div>
    {/if}
    <noscript><p>浏览器未启用 JavaScript，无法检查资料有效期，因此不展示卡片。请访问上方官方网站。</p></noscript>
</section>
