<template>
	<div class="docs-list-wrap">
		<div class="docs-list">
			<template v-for="(info, index) in filterList" :key="index">
				<PageInfo :info="info"></PageInfo>
			</template>
		</div>
	</div>
	<div class="page-nation wrapper-card">
		<span>共{{ totalPage }}页</span>
		<span>当前第{{ curPage }}页</span>
		<button @click="changePage('prev')" :disabled="curPage == 1">上一页</button>
		<button @click="changePage('next')" :disabled="curPage == totalPage">
			下一页
		</button>
		<span>跳转至</span>
		<input v-model="inputPage" class="input-page" />
		<button @click="changePage(inputPage)">前往</button>
	</div>
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue'
	import { useData } from 'vitepress'
	import PageInfo from './PageInfo.vue'
	import { PageInfoType } from '../.vitepress/config/pageList'

	// 获取所有list
	const { page, theme } = useData()
	const pageList = theme.value.pageList as PageInfoType[]

	const filterList = computed(() => {
		const start = (curPage.value - 1) * 10
		const end = curPage.value * 10
		return pageList.slice(start, end)
	})
	// 分页

	const curPage = ref(1)
	const inputPage = ref('')
	const totalPage = computed(() => Math.ceil(pageList.length / 10))

	function changePage(type: 'prev' | 'next' | string) {
		if (type === 'prev') {
			curPage.value--
		} else if (type === 'next') {
			curPage.value++
		} else {
			const currentPage = Number(type)
			if (currentPage > totalPage.value) {
				curPage.value = totalPage.value
			} else if (currentPage < 1) {
				curPage.value = 1
			} else {
				curPage.value = currentPage
			}
		}
		pageList
	}
</script>

<style lang="scss" scoped>
	.docs-list-wrap {
		margin-top: 20px;
		flex: auto;
		background-color: var(--docs-list-bg);
		border-radius: 4px;
		// height: 100%;
	}

	.page-nation {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		background-color: var(--docs-list-bg);
		margin-top: 20px;
	}

	.page-nation * {
		margin-right: 16px;
		font-size: 14px;
	}

	.page-nation button {
		box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		padding: 0 6px;
	}

	.input-page {
		width: 60px;
		border-radius: 4px;
		padding: 0 6px;
		border: 1px solid gainsboro;
	}
</style>
