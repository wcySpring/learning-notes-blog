import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import fg from 'fast-glob'
import gitlog from 'gitlog'
import dayjs from 'dayjs'

type PageInfoType = {
	title: string
	authorDate: string
	description: string
	date: string
	tags: string[]
	path: string // 文章地址
}

// 排序
function _compareDate(obj1: PageInfoType, obj2: PageInfoType) {
	return obj1.date < obj2.date ? 1 : -1
}

// 获取文件信息git
function getFileInfoByGit(file: string) {
	const [commits] = gitlog({
		file, // 文件路径
		repo: '.', // git 仓库路径
		number: 1, // 最多检索的提交数
	})
	commits.authorDate =
		dayjs(commits.authorDate).format('YYYY-MM-DD HH:mm:ss') || ''
	return commits
}

// 获取文件信息md
function getFileInfoByMD(file: string) {
	const content = fs.readFileSync(file, 'utf-8')
	const { data } = matter(content)
	return data
}

// 获取文件信息
function pageLsInfo(files: string[]) {
	return files.map(getFileInfo)
}

// 获取文件信息
export function getFileInfo(file: string) {
	const name = path.basename(file, '.md')
	// 通过md 获取文件信息
	const fileInfoByMD = getFileInfoByMD(file)
	const fileInfoByGit = getFileInfoByGit(file)
	// 文章更新日期
	const date =
		dayjs(fileInfoByMD.date || fileInfoByGit?.authorDate).format(
			'YYYY-MM-DD HH:mm:ss'
		) || ''
	return {
		title: fileInfoByMD?.title || name,
		authorDate: fileInfoByMD.authorName || fileInfoByGit?.authorName,
		description: fileInfoByMD.description || fileInfoByGit?.subject,
		date,
		tags: fileInfoByMD?.tags || [],
		path: file,
	}
}

// 获取文件列表
export async function pageList(pagesPath: string[]) {
	console.log(__dirname, 12)
	const root = process.cwd()
	// 获取文件根目录

	const all = pagesPath.map((p) => {
		const filePath = path.join(root, p).replace(/\\/g, '/')
		return fg(filePath)
	})

	let getMDfiles = await Promise.all(all)
	const files = getMDfiles.flat(Infinity) as string[]
	console.log(files, 111)

	return pageLsInfo(files).sort(_compareDate)
	// {
	// 	tableData: ls,
	// 	total: ls.length,
	// 	currentPage: 1,
	// 	pageSize: 10,
	// }
}
