<template>
	<Layout>
		<!-- 文档的头部部分样式  -->
		<template #doc-before>
			<h1 class="title">{{ pageInfo?.title }}</h1>
			<div class="split">
				<span class="page-info" v-show="pageInfo?.authorDate"
					>✍️ {{ pageInfo?.authorDate }}</span
				>
				<span class="page-info" v-show="pageInfo?.date">
					🕒 {{ pageInfo?.date }}({{ pageInfo?.updateTime }})</span
				>
				<span class="page-info" v-show="pageInfo?.tags">
					🔗 {{ pageInfo?.tags?.join(' ') }}</span
				>
			</div>
		</template>
	</Layout>
</template>
<!--.vitepress/theme/MyLayout.vue-->
<script setup lang="ts">
	import { computed } from 'vue'
	import DefaultTheme from 'vitepress/theme'
	import { useData } from 'vitepress'

	const { Layout } = DefaultTheme

	const { page, theme } = useData()

	const pageInfo = computed(() => {
		return theme.value.pageList.find(
			(item) => item.path === page.value.relativePath
		)
	})
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
	.split {
		text-align: right;

		font-size: 0.875rem;
		line-height: 1.25rem;
		margin-bottom: 1em;
		padding-bottom: 1em;
		border-bottom: 1px dashed #c7c7c7;
	}
	.page-info {
		font-size: 13px;
		color: #7f7f7f;
		margin-right: 10px;
	}
</style>
