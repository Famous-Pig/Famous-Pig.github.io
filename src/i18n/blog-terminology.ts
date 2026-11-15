import Key from "./i18nKey";
import { en } from "./languages/en";
import { zh } from "./languages/zh";

// 博客界面中的多义词优先采用人工译文，避免自动翻译选用招聘、政治等语境。
// 复用现有语言包，保持静态中文界面与动态翻译的用词一致。
const blogTerms: Key[] = [
    Key.home,
    Key.archive,
    Key.about,
    Key.search,
    Key.directory,
    Key.tags,
    Key.categories,
    Key.series,
    Key.posts,
    Key.recentPosts,
    Key.postList,
    Key.statistics,
    Key.tableOfContents,
    Key.pageViews,
    Key.visitors,
    Key.statsLoading,
    Key.statsError,
    Key.announcement,
    Key.comments,
    Key.untitled,
    Key.uncategorized,
    Key.noTags,
    Key.wordCount,
    Key.wordsCount,
    Key.minuteCount,
    Key.minutesCount,
    Key.postCount,
    Key.postsCount,
    Key.themeColor,
    Key.more,
    Key.backTo,
    Key.author,
    Key.publishedAt,
    Key.license,
];

interface TerminologyService {
    nomenclature: {
        append: (from: string, to: string, properties: string) => void;
    };
}

export function registerBlogTerminology(translate: TerminologyService): void {
    const terms = blogTerms.map((key) => `${en[key]}=${zh[key]}`).join("\n");
    translate.nomenclature.append("english", "chinese_simplified", terms);
}
