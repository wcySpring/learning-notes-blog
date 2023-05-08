<template>
	<Layout>
		<!-- 文档的头部部分样式  -->
		<template #doc-before>
			<h1 class="title">{{ title }}</h1>
			<div class="date">🕒 更新日期: {{ lastUpdated }}({{ publishDate }})</div>
		</template>
	</Layout>
</template>
<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
	import DefaultTheme from 'vitepress/theme'
	import { useData } from 'vitepress'

	import dayjs from 'dayjs'
	import relativeTime from 'dayjs/plugin/relativeTime'

	dayjs.extend(relativeTime)

	const { Layout } = DefaultTheme

	const { page, theme } = useData()

	// 文章更新日期
	const lastUpdated =
		dayjs(page.value.lastUpdated).format('YYYY-MM-DD HH:mm:ss') || ''

	console.log(page.value.filePath, theme.value.pageList)

	// 提交距离上次时间
	const publishDate = dayjs().to(dayjs(lastUpdated || Date.now()))
	// 获取标题
	const title = (page as any).value?.filePath?.split('/').pop().split('.')[0]
	console.log(page)
</script>
<style>
	.title {
		color: var(--vp-c-text-1);
		font-weight: 600;
		font-size: 2.25em;
		margin-top: 0.3em;
		margin-bottom: 0.3em;
		line-height: 1.3;
		font-family: Dosis, ui-sans-serif, system-ui, -apple-system,
			BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
			'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}
	.date {
		font-size: 0.875rem;
		line-height: 1.25rem;
		margin-bottom: 1em;
		padding-bottom: 1em;
		border-bottom: 1px dashed #c7c7c7;
	}
</style>
