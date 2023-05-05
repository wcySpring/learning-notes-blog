import { defineConfig } from 'vitepress'
import AutoSidebar from './config/autoSidebar'
import { titlePlugin } from './config/markdownPlugin'
import personalInfo from './config/personalInfo'

export default {
	vite: {
		plugins: [AutoSidebar({ prefix: '-', collapsed: false })],
		// ...
		ssr: {
			noExternal: ['oh-vue-icons'],
		},
	},
	title: '下划线的学习频道', // 浏览器tab 标题
	description: 'wcySpring的博客，关于前端 js css typescript ts vue node 等',
	markdown: {
		lineNumbers: true,
		// https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
		// theme: {
		// 	light: 'one-dark-pro',
		// 	dark: 'one-dark-pro',
		// },
		config: (md) => {
			md.block.ruler.before('paragraph', 'myplugin', titlePlugin)
		},
	},
	themeConfig: {
		siteTitle: '下划线学习频道', // 设置文档展示页标题
		logo: '/my-logo.svg', // 图标
		// siteTitle: false // 如果有图标没标题设置 为false
		nav: [
			{ text: '前端知识整理', link: '/page/frontendFundamentals/' },
			{ text: 'Configs', link: '/configs' },
			{ text: 'Changelog', link: 'https://github.com/...' },
		],

		// 个人信息
		personalInfo,

		// 首页home 背景图片
		homeHeaderImages: [
			{
				path: '/img/home-bg/1.jpg',
				mask: 'rgba(40, 57, 101, .4)',
			},
			{
				path: '/img/home-bg/2.jpg',
				mask: 'rgb(251, 170, 152, .2)',
			},
			{
				path: '/img/home-bg/3.jpg',
				mask: 'rgba(68, 74, 83, .1)',
			},
			{
				path: '/img/home-bg/4.jpg',
				mask: 'rgba(19, 75, 50, .2)',
			},
		],
	},
}
