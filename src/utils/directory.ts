import { getSortedPosts } from "./post";
import { sortedAlbums } from "./albums";
import { sortedMoments } from "./diary";
import { projectsData } from "./projects";
import { skillsData } from "./skills";
import { timelineData } from "./timeline";
import { i18n } from "../i18n/translation";
import I18nKey from "../i18n/i18nKey";
import { getPostUrl } from "./url";
import { getCategoryPathParts } from "./category";


export interface DirectoryNode {
    name: string;
    type: 'folder' | 'file';
    url?: string;
    children?: DirectoryNode[];
}

export async function getDirectoryTree(): Promise<DirectoryNode[]> {
    const rootMap = {
        posts: i18n(I18nKey.posts),
        albums: i18n(I18nKey.albums),
        diary: i18n(I18nKey.diary),
        projects: i18n(I18nKey.projects),
        skills: i18n(I18nKey.skills),
        timeline: i18n(I18nKey.timeline),
    };

    const tree: Record<string, any> = {};

    function addNode(paths: string[], name: string, url: string) {
        let current = tree;
        for (const part of paths) {
            const key = `folder:${part}`;
            if (!current[key]) {
                current[key] = { name: part, type: 'folder', children: {} };
            }
            current = current[key].children;
        }
        current[`file:${name}:${url}`] = { name, type: 'file', url };
    }

    const posts = await getSortedPosts();
    for (const post of posts) {
        if (post.data.draft) continue;
        const parts = post.id.split('/');
        const fileName = parts.pop()!;
        // 按文章分类分组；没有分类的文章仍直接显示在“文章”下。
        const paths = [rootMap.posts, ...(getCategoryPathParts(post.data.category) ?? [])];
        addNode(paths, post.data.title || fileName, getPostUrl(post));
    }

    for (const album of sortedAlbums) {
        if (!album.visible) continue;
        const basePathParts = album.basePath?.split('/') || [];
        if (basePathParts[0] === 'content') basePathParts.shift();
        if (basePathParts[0] === 'albums') basePathParts[0] = rootMap.albums;
        addNode(basePathParts, album.title || album.id, `/albums/${album.id}/`);
    }

    for (const moment of sortedMoments) {
        const basePathParts = moment.basePath?.split('/') || [];
        if (basePathParts[0] === 'content') basePathParts.shift();
        if (basePathParts[0] === 'diary') basePathParts[0] = rootMap.diary;
        addNode(basePathParts, moment.title || moment.id, `/diary/`);
    }

    for (const project of projectsData) {
        addNode([rootMap.projects], project.title || project.id,
            project.details ? `/projects/${project.id}/` : `/projects/`);
    }

    for (const skill of skillsData) {
        const basePathParts = skill.basePath?.split('/') || [];
        if (basePathParts[0] === 'content') basePathParts.shift();
        if (basePathParts[0] === 'skills') basePathParts[0] = rootMap.skills;
        addNode(basePathParts, skill.name || skill.id, `/skills/`);
    }

    for (const item of timelineData) {
        const basePathParts = item.basePath?.split('/') || [];
        if (basePathParts[0] === 'content') basePathParts.shift();
        if (basePathParts[0] === 'timeline') basePathParts[0] = rootMap.timeline;
        addNode(basePathParts, item.title || item.id, `/timeline/`);
    }

    addNode(["统计"], "文章概览", "/statistics/");
    addNode(["统计"], "发布活动", "/statistics/#activity-statistics-page");
    addNode(["统计"], "分类分布", "/statistics/#category-statistics-page");
    addNode(["统计"], "标签分布", "/statistics/#tag-statistics-page");

    function toArray(obj: Record<string, any>): DirectoryNode[] {
        const arr = Object.values(obj).map(node => {
            if (node.type === 'folder') {
                return {
                    name: node.name,
                    type: 'folder',
                    children: toArray(node.children)
                } as DirectoryNode;
            }
            return {
                name: node.name,
                type: 'file',
                url: node.url
            } as DirectoryNode;
        });
        
        // Sort: folders first, then files, both alphabetically
        arr.sort((a, b) => {
            if (a.type !== b.type) {
                return a.type === 'folder' ? -1 : 1;
            }
            return a.name.localeCompare(b.name);
        });
        
        return arr;
    }

    return toArray(tree);
}
