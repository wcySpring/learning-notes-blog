// function customBlockquote(md) {
// 	const fence = md.renderer.rules.fence

// 	md.renderer.rules.blockquote_open = function (
// 		tokens,
// 		idx,
// 		options,
// 		env,
// 		self
// 	) {
// 		const token = tokens[idx]
// 		const rawCode = fence(tokens, idx, options, env, self)
// 		// 判断类型是否是blockquote_open
// 		if (token.type === 'blockquote_open' && token.markup === '>') {
// 			// 获取位置
// 			const start = token.map[1]
// 			const titleStr = env.content.substring(start + 1)
// 			const regex = /\[(\S+)\]\s+(#+)\s+(.*)\r\n/ // 匹配标题的正则表达式

// 			const matches = titleStr.match(regex) // 使用正则表达式获取标题
// 			if (matches) {
// 				const danger = matches[1].trim() // 获取danger内容
// 				const hashes = matches[2] // 获取#的数量
// 				const title = matches[3].trim() // 获取title内容
// 				token.attrSet('danger', danger)
// 				token.attrSet('hashes', hashes)
// 				token.attrSet('title', title)
// 				console.log('danger', danger)
// 				console.log('hashes', hashes)
// 				console.log('标题', title)
// 				return `<blockquote${danger ? ` class="${danger}"` : ''}><h1>`
// 			}
// 		}
// 	}

// 	md.renderer.rules.blockquote_close = function (
// 		tokens,
// 		idx,
// 		options,
// 		env,
// 		self
// 	) {
// 		const token = tokens[idx]
// 		// 判断类型是否是 blockquote_close
// 		if (token.nesting === -1 && token.markup === '>') {
// 			// 查找对应的 opening token
// 			let openIdx = idx
// 			while (openIdx >= 0) {
// 				const openToken = tokens[openIdx]
// 				if (openToken.nesting === 1 && openToken.markup === '>') {
// 					const danger = openToken.attrGet('danger')

// 					const hashes = openToken.attrGet('hashes')
// 					const title = openToken.attrGet('title')

// 					console.log('danger', danger)
// 					console.log('hashes', hashes)
// 					console.log('标题', title)

// 					return title + '</h1></blockquote>'
// 				}
// 				openIdx--
// 			}
// 		}

// 		return '</h1></blockquote>'
// 	}
// }

export default {
	title: 'wcySpring的博客', // 浏览器tab 标题
	description: 'wcySpring的博客，关于前端 js css typescript ts vue node 等',
	markdown: {
		config: (md) => {
			// md.use(customBlockquote)
			md.block.ruler.before(
				'paragraph',
				'myplugin',
				function (state, startLine, endLine) {
					var ch,
						level,
						tmp,
						token,
						pos = state.bMarks[startLine] + state.tShift[startLine],
						max = state.eMarks[startLine]
					ch = state.src.charCodeAt(pos)

					const starPrefix = state.src.charCodeAt(pos - 1, pos)

					if ((starPrefix !== '>' && ch !== 91) /*@*/ || pos >= max) {
						return false
					}

					let text = state.src.substring(pos, max)

					let rg = /\[(\S+)\]\s+(#+)\s+(.*)/
					let match = text.match(rg)

					if (match && match.length) {
						const type = match[1].trim() // 获取danger内容
						const hashes = match[2] // 获取#的数量
						const title = match[3].trim() // 获取title内容
						const b = state.tokens[state.tokens.length - 1].attrSet(
							'class',
							type
						)
						token = state.push(
							'my_title_open',
							`h${hashes.length}`,
							1
						)
						token.markup = '['
						token.map = [startLine, state.line]

						token = state.push('inline', '', 0)
						token.content = title
						token.map = [startLine, state.line]
						token.children = []

						token = state.push(
							'my_title_close',
							`h${hashes.length}`,
							-1
						)
						token.markup = ']'

						// state.push('blockquote_close', 'blockquote', -1)
						state.line = startLine + 1
						return true
					}
				}
			)
		},
	},
	themeConfig: {
		siteTitle: 'My Custom Title', // 设置文档展示页标题
		logo: '/my-logo.svg', // 图标
		// siteTitle: false // 如果有图标没标题设置 为false
		nav: [
			{ text: 'Guide', link: '/guide' },
			{ text: 'Configs', link: '/configs' },
			{ text: 'Changelog', link: 'https://github.com/...' },
		],
		sidebar: {
			// 当用户在 `指南` 目录页面下将会展示这个侧边栏
			'/page/frontendFundamentals/': [
				{
					text: 'Guide',
					items: [
						// This shows `/guide/index.md` page.
						{
							text: 'Index',
							link: '/page/frontendFundamentals/浮动--案例',
						}, // /guide/index.md
						{
							text: 'Index1',
							link: '/page/frontendFundamentals/浮动--案例',
						},
						{ text: 'Two', link: '/guide/two' }, // /guide/two.md
					],
				},
			],
		},

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

		// 个人信息
		personalInfo: {
			name: 'wcySpring', // 作者名字
			introduction:
				'Hi,欢迎来到我的blog频道,目前是一个在职前端开发，记录更新每天学到的知识，动一动你的小手给我的GitHub点个小星星', // 简短介绍
			interested:
				'我的兴趣不上班,在家里待着就是最大的兴趣，如果你有好的开源项目需要人手可以联系我，我很愿意尝试在社区里进行开源项目的参与',
			learning: '目前我正在学习nodejs/java。前端也在一直学习中',
			reachMe: '如果你的城市也在DL的,有好的岗位可以联系我',
			avatar: '/img/avatar.jpeg', // 头像
			description:
				'这个博客的主题参考了 VuePress-- Renovamen/vuepress-theme-gungnir 项目地址https://github.com/Renovamen/vuepress-theme-gungnir',
			sns: {
				github: 'Renovamen',
				linkedin: 'xiaohan-zou-55bba0160',
				facebook: 'renovamen.zou',
				twitter: 'renovamen_zxh',
				zhihu: 'chao-neng-gui-su',
				email: 'renovamenzxh@gmail.com',
				rss: '/rss.xml',
				// customized sns
				bilibili: {
					icon: 'ri-bilibili-line',
					link: 'https://www.bilibili.com/',
				},
			},
		},
	},
}
