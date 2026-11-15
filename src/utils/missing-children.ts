export interface SeekingCard {
    id: string;
    name: string;
    category: string;
    type: string;
    lostDate: string;
    region: string;
    sourceUrl: string;
    photoUrl: string;
    enabled: boolean;
}

export interface SeekingBatch {
    reviewedAt: string;
    nextReviewAt: string;
    cards: SeekingCard[];
}

export function reviewTimestamp(date: string): number {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return NaN;
    const time = Date.parse(`${date}T00:00:00+08:00`);
    // Date.parse 会将部分不存在的日期归一化，这里须拒绝这些日期。
    if (!Number.isFinite(time) || new Date(time + 8 * 3600000).toISOString().slice(0, 10) !== date) return NaN;
    return time;
}

export function isCurrentBatch(batch: SeekingBatch, now: number): boolean {
    const start = reviewTimestamp(batch.reviewedAt);
    const end = reviewTimestamp(batch.nextReviewAt);
    // 日期错误、过长的有效期或未到核对日期时均停止展示。
    return Number.isFinite(now) && now >= start && now < end && end > start && end - start <= 32 * 86400000;
}

export function isOfficialUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === "https:" && !url.username && !url.password &&
            ["baobeihuijia.com", "www.baobeihuijia.com", "so.baobeihuijia.com"].includes(url.hostname);
    } catch { return false; }
}

export function visibleCards(batch: SeekingBatch, now: number): SeekingCard[] {
    if (!isCurrentBatch(batch, now)) return [];
    return batch.cards.filter(card => card.enabled && isOfficialUrl(card.sourceUrl));
}
