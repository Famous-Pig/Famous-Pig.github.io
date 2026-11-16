<script lang="ts">
    let { message }: { message: string } = $props();
</script>

<aside
    aria-label="学习来源声明"
    data-category-notice
    class="mb-6 rounded-xl border-l-4 border-(--primary) bg-(--btn-plain-bg) px-4 py-3 text-sm leading-7 text-75"
>
    <p class="mb-1 font-semibold text-90">学习来源声明</p>
    <p>{message}</p>
</aside>
