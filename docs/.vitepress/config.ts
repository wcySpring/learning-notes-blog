// import AutoSidebar from './config/autoSidebar'
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'
import { titlePlugin } from './config/markdownPlugin'
import personalInfo from './config/personalInfo'
import { pageList } from './config/pageList'

async function config() {
	return {
		vite: {
			plugins: [
				AutoSidebar({
					deletePrefix: /\d+\./,
					collapsed: false,
					ignoreList: ['font'],
					// 按照文件名排序
					beforeCreateSideBarItems(data) {
						const regex = /^\d+/
						return data.sort((a, b) => {
							const aOrder = a.match(regex)?.[0]
							const bOrder = b.match(regex)?.[0]
							if (!aOrder || !bOrder) {
								return 0
							}
							return Number(aOrder) - Number(bOrder)
						})
					},
				}),
			],
			// ...
			ssr: {
				noExternal: ['oh-vue-icons'],
			},
		},
		ignoreDeadLinks: true,
		base: '/learning-notes-blog/',
		title: '下划线的学习频道', // 浏览器tab 标题
		description: 'wcySpring的博客，关于前端 js css typescript ts vue node 等',
		markdown: {
			lineNumbers: true,

			// https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
			theme: 'one-dark-pro',

			config: (md) => {
				md.block.ruler.before('paragraph', 'myplugin', titlePlugin)
			},
		},
		lastUpdated: true, //显示最近更新时间

		themeConfig: {
			outline: 'deep', // 显示文章右侧标题大纲
			siteTitle: '下划线学习频道', // 设置文档展示页标题
			logo: '/my-logo.svg', // 图标
			docFooter: { prev: '上一篇', next: '下一篇' },
			// lastUpdatedText: '最近更新时间',

			// siteTitle: false // 如果有图标没标题设置 为false
			nav: [
				{
					text: '前端知识整理',
					link: '/A.前端知识整理/JS基础/数据类型/2.数据类型检测.html',
				},
				{ text: 'NodeJS学习', link: '/B.NodeJS学习/1.什么是NodeJS.html' },
				{
					text: '前端工程化',
					link: '/C.前端工程化/包管理工具/1.出识包管理工具.html',
				},
				{ text: 'Changelog', link: 'https://github.com/...' },
			],
			outlineTitle: '快速预览',

			footer: {
				message: 'Released under the MIT License.',
				copyright: 'Copyright © 2023-present wcy',
			},

			// 个人信息
			personalInfo,

			// 首页home 背景图片
			homeHeaderImages: [
				{
					path: '/img/home-bg/1.jpg',
					mask: 'rgba(40, 57, 101, .4)',
				},
				// {
				// 	path: '/img/home-bg/2.jpg',
				// 	mask: 'rgb(251, 170, 152, .2)',
				// },
				// {
				// 	path: '/img/home-bg/3.jpg',
				// 	mask: 'rgba(68, 74, 83, .1)',
				// },
				// {
				// 	path: '/img/home-bg/4.jpg',
				// 	mask: 'rgba(19, 75, 50, .2)',
				// },
			],
			// 文章列表
			pageList: await pageList(
				[
					'docs/A.前端知识整理/**/*.md',
					'docs/B.NodeJS学习/**/*.md',
					'docs/C.前端工程化/**/*.md',
					'docs/E.数据库/**/*.md',
					'docs/F.开发中杂七杂八/**/*.md',
				],
				{
					titleConfig(title) {
						return title.replace(/\d+\./, '')
					},
				}
			),
		},
	}
}

export default config()
