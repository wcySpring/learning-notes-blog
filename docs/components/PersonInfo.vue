<template>
	<div class="wrapper-card-hover">
		<div>
			<div class="avatar">
				<img :src="withBase(theme.personalInfo.avatar)" alt="hero" />
			</div>

			<h1 class="description-name">{{ theme.personalInfo.name }}</h1>
			<div class="description-num">
				<div>
					<div class="num">{{ total }}</div>
					<div class="title">博客文章</div>
				</div>
				<div>
					<div class="num">{{ getMonthlyUpdates }}</div>
					<div class="title">本月更新</div>
				</div>
				<div>
					<div class="num">{{ getWeeklyUpdates }}</div>
					<div class="title">本周更新</div>
				</div>
			</div>
		</div>
		<div class="sns">
			<!-- <SNS class="hide-on-mobile" large /> -->
		</div>
	</div>
</template>

<script setup lang="ts">
	import dayjs from 'dayjs'
	import { useData, withBase } from 'vitepress'
	import { computed } from 'vue'

	const { theme, page } = useData()

	// 总数
	const total = computed(() => {
		return theme.value.pageList.length
	})

	// 本月更新
	const getMonthlyUpdates = computed(() => {
		const now = dayjs() // Get current date
		let count = 0
		for (let post of theme.value.pageList) {
			const postDate = dayjs(post.date)
			if (postDate.isSame(now, 'month')) {
				// Check if post was updated this month
				count++
			}
		}
		return count
	})

	// 本周更新
	const getWeeklyUpdates = computed(() => {
		const now = dayjs() // Get current date
		let count = 0
		for (let post of theme.value.pageList) {
			const postDate = dayjs(post.date)
			if (postDate.isSame(now, 'week')) {
				// Check if post was updated this month
				count++
			}
		}
		return count
	})
</script>

<style lang="scss" scoped>
	@import '@theme/styles/_mixins';
	.sns {
		margin-top: 20px;
		text-align: center;
	}
	.avatar {
		width: 100%;
		justify-content: center; /* 水平居中 */
		align-items: center; /* 垂直居中 */
		display: flex; /* 设置为 Flex 布局 */
		img {
			width: 120px;
			height: 120px;
			cursor: pointer;
			border-radius: 5px;
			object-fit: contain; /* 图片缩放方式 */
			display: block; /* 解决图片底部留空问题 */
			@include transition(all 0.6s);
			// &:hover {
			// 	@include transform(scale(1.2));
			// }
		}
	}
	.description-name {
		text-align: center;
		font-weight: 700;
		font-size: 22px;
		color: var(--card--info-color);
		line-height: 22px;
		margin-top: 10px;
	}
	.description-num {
		display: flex;
		padding-top: 20px;
		justify-content: center;
		> div {
			flex: 1;
			text-align: center;
			.title {
				color: var(--page--num-color);
				font-weight: 700;
				font-size: 14px;
			}
			.num {
				color: var(--card--info-color);
				// font-weight: 700;
				font-size: 18px;
			}
		}
	}
</style>
