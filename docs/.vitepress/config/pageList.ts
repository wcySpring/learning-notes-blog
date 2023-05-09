import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import fg from 'fast-glob'
import gitlog from 'gitlog'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export type PageInfoType = {
	title: string
	authorDate: string
	description: string
	date: string
	tags: string[]
	path: string // 文章地址
	updateTime: string // 距离上次更新时间
}

// 排序
function _compareDate(obj1: PageInfoType, obj2: PageInfoType) {
	return obj1.date < obj2.date ? 1 : -1
}

// 获取文件信息git
function getFileInfoByGit(file: string) {
	const [commits] = gitlog({
		branch: 'main', // 分支
		file, // 文件路径
		repo: __dirname, // git 仓库路径
		number: 1, // 最多检索的提交数
	})

	if (commits) {
		commits.authorDate =
			dayjs(commits?.authorDate).format('YYYY-MM-DD HH:mm:ss') || ''
		return commits
	} else {
		return {
			authorName: '',
			abbrevHash: '',
			hash: '',
			subject: '',
			authorDate: '',
		}
	}
}

// 获取文件信息md
function getFileInfoByMD(file: string) {
	const fileContents = fs.readFileSync(file, 'utf-8')
	const { data } = matter(fileContents)

	return data
}

// 获取文件信息
function pageLsInfo(files: string[]) {
	return files.map(getFileInfo)
}

// 获取文件信息
export function getFileInfo(file: string) {
	// 通过md 获取文件信息
	const fileInfoByMD = getFileInfoByMD(file)
	const fileInfoByGit = getFileInfoByGit(file)

	// 文章标题
	const title = fileInfoByMD?.title || path.basename(file, '.md')

	// 文章更新日期
	let date = ''
	date =
		dayjs(fileInfoByMD.date || fileInfoByGit?.authorDate).format(
			'YYYY-MM-DD HH:mm:ss'
		) || ''

	const src = file.split('docs/')[1]
	const tag = src.split('/')[0]
	const tags = fileInfoByMD.tags ? [tag, ...fileInfoByMD.tags] : [tag]

	return {
		title,
		authorDate: fileInfoByMD.authorName || fileInfoByGit?.authorName,
		description: fileInfoByMD.description || fileInfoByGit?.subject,
		date,
		tags,
		path: src,
		updateTime: dayjs().to(dayjs(date)),
	}
}

// 获取文件列表
export async function pageList(pagesPath: string[]) {
	const root = process.cwd()
	// 获取文件根目录

	const all = pagesPath.map((p) => {
		const filePath = path.join(root, p).replace(/\\/g, '/')
		return fg(filePath)
	})

	let getMDfiles = await Promise.all(all)
	const files = getMDfiles.flat(Infinity) as string[]

	return pageLsInfo(files).sort(_compareDate)
}
