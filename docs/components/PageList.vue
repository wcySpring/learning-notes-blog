<template>
	<div class="docs-list-wrap">
		<div class="docs-list">
			<template v-for="(info, index) in pageList" :key="index">
				<PageInfo :info="info"></PageInfo>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useData } from 'vitepress'
	import PageInfo from './PageInfo.vue'
	import { PageInfoType } from '../.vitepress/config/pageList'

	// 获取所有list
	const { page, theme } = useData()
	const pageList = theme.value.pageList as PageInfoType[]
</script>

<style lang="scss" scoped>
	.docs-list-wrap {
		flex: auto;
		padding: 10px 0;
	}
</style>
