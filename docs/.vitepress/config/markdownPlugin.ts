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

/**
 * @name: markdownPlugin
 * @description: markdown插件 生成自定义标题头
 */
export function titlePlugin(state, startLine, endLine) {
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
		const b = state.tokens[state.tokens.length - 1].attrSet('class', type)
		token = state.push('my_title_open', `h${hashes.length}`, 1)
		token.markup = '['
		token.map = [startLine, state.line]

		token = state.push('inline', '', 0)
		token.content = title
		token.map = [startLine, state.line]
		token.children = []

		token = state.push('my_title_close', `h${hashes.length}`, -1)
		token.markup = ']'

		// state.push('blockquote_close', 'blockquote', -1)
		state.line = startLine + 1
		return true
	}
	return false
}
