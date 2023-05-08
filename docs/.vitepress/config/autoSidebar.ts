// 引入必要的模块和类型定义
import { join } from 'path'
import { readdirSync, statSync } from 'fs'
import c from 'picocolors'
import { type DefaultTheme, type SiteConfig } from 'vitepress'
// import { SidebarPluginOptionType } from './types'
import { type ViteDevServer } from 'vite'

// 默认忽略的文件夹
const DEFAULT_IGNORE_FOLDER = [
	'scripts',
	'components',
	'assets',
	'.vitepress',
	'public',
]

// 全局变量配置项
let option: any

// 用户配置
interface UserConfig {
	vitepress: SiteConfig
}

// 日志输出函数
function log(...info: string[]) {
	console.log(c.bold(c.cyan('[auto-sidebar]')), ...info)
}

// 清楚前缀
function removePrefix(str, identifier) {
	const index = str.indexOf(identifier)
	if (index === -1) {
		// 如果字符串中不存在标识符，则返回原始字符串
		return str
	} else {
		// 否则返回标识符后面的所有字符
		return str.slice(index + identifier.length)
	}
}

// 生成侧栏子项函数
function createSideBarItems(
	targetPath: string,
	...reset: string[]
): DefaultTheme.SidebarItem[] {
	const { ignoreIndexItem } = option
	let node = readdirSync(join(targetPath, ...reset)) // 读取指定目录的文件夹和文件
	if (ignoreIndexItem && node.length === 1 && node[0] === 'index.md') {
		// 如果开启了 ignoreIndexItem 选项并且只有一个 index.md 文件
		return [] // 那么返回空数组
	}
	const result: DefaultTheme.SidebarItem[] = [] // 要返回的数组
	for (const fname of node) {
		if (statSync(join(targetPath, ...reset, fname)).isDirectory()) {
			// 是文件夹
			// 如果侧栏子项的长度为 0，则忽略当前节点
			const items = createSideBarItems(join(targetPath), ...reset, fname) // 递归生成子项
			if (items.length > 0) {
				// 判断是否做文件夹展开配置
				const sidebarItem: DefaultTheme.SidebarItem = {
					text: fname, // 文件夹的名字作为侧栏项的文本
					items, // 文件夹下的子项作为侧栏项的子项
				}
				if (Reflect.has(option, 'collapsed')) {
					sidebarItem.collapsed = Reflect.get(option, 'collapsed')
				}
				// 如果该文件夹下有非 index.md 文件
				result.push(sidebarItem)
			}
		} else {
			// 是文件
			if (
				(ignoreIndexItem && fname === 'index.md') || // 如果开启了 ignoreIndexItem 选项并且文件名为 index.md
				/^-.*\.(md|MD)$/.test(fname) // 或者文件名以 - 开头并以 .md 或 .MD 结尾
			) {
				continue // 则跳过该文件，不加入侧栏
			}

			let fileName = fname.replace(/\.md$/, '') // 去掉文件名中的 .md 后缀
			let text = fileName // 侧栏项的文本
			if (option.prefix) {
				text = removePrefix(text, option.prefix) // 去掉文件名中的前缀
			}

			const item: DefaultTheme.SidebarItem = {
				text, // 将文件名作为侧栏项的文本
				link: '/' + [...reset, `${fileName}.html`].join('/'), // 将文件名作为链接的一部分，生成侧栏项的链接
			}
			result.push(item)
		}
	}
	return result
}

// 生成侧栏组函数
function createSideBarGroups(
	targetPath: string,
	folder: string
): DefaultTheme.SidebarItem[] {
	return [
		{
			items: createSideBarItems(targetPath, folder),
		},
	]
}

// 生成多段式侧栏函数
function createSidebarMulti(path: string): DefaultTheme.SidebarMulti {
	const { ignoreList = [], ignoreIndexItem = false } = option
	const il = [...DEFAULT_IGNORE_FOLDER, ...ignoreList] // 将用户定义的忽略文件夹加入到默认忽略列表中
	const data: DefaultTheme.SidebarMulti = {} // 要返回的对象
	let node = readdirSync(path).filter(
		(n) => statSync(join(path, n)).isDirectory() && !il.includes(n) // 读取 path 文件夹下的子文件夹，同时排除忽略列表中的文件夹
	)

	for (const k of node) {
		data[`/${k}/`] = createSideBarGroups(path, k) // 以子文件夹名作为键，以对应的侧栏组作为值，生成多段式侧栏
	}

	// 如果 ignoreIndexItem 选项被开启
	if (ignoreIndexItem) {
		for (const i in data) {
			let obj = data[i]
			obj = obj.filter((i) => i.items && i.items.length > 0) // 筛选出有子项的侧栏项
			if (obj.length === 0) {
				Reflect.deleteProperty(data, i) // 删除无子项的侧栏项
			}
		}
	}

	return data
}

export default function VitePluginVitepressAutoSidebar(opt: any = {}) {
	return {
		name: 'vite-plugin-vitepress-auto-sidebar',
		configureServer({ watcher, restart }: ViteDevServer) {
			const fsWatcher = watcher.add('*.md')
			fsWatcher.on('all', (event, path) => {
				if (event !== 'change') {
					restart()
					log(`${event} ${path}`)
					log('update sidebar...')
				}
			})
		},
		config(config: UserConfig) {
			option = opt
			const { path = '/docs' } = option

			// increment ignore item
			const docsPath = join(process.cwd(), path)
			// create sidebar data and insert
			config.vitepress.site.themeConfig.sidebar = createSidebarMulti(docsPath)
			log('injected sidebar data successfully')

			return config
		},
	}
}
