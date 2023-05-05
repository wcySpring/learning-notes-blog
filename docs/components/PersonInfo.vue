<template>
	<div class="wrapper-card-hover">
		<div>
			<div class="avatar">
				<img :src="withBase(theme.personalInfo.avatar)" alt="hero" />
			</div>

			<h1 class="description-name">{{ theme.personalInfo.name }}</h1>
			<div class="description-num">
				<div>
					<div class="num">126</div>
					<div class="title">博客文章</div>
				</div>
				<div>
					<div class="num">126</div>
					<div class="title">本月更新</div>
				</div>
				<div>
					<div class="num">126</div>
					<div class="title">本周更新</div>
				</div>
			</div>
		</div>
		<div class="sns">
			<SNS class="hide-on-mobile" large />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useData, withBase } from 'vitepress'

	// 社交
	import SNS from './SNS.vue'

	const { theme } = useData()
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
			&:hover {
				@include transform(scale(1.2));
			}
		}
	}
	.description-name {
		text-align: center;
		font-weight: 700;
		font-size: 22px;
		color: #000;
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
				color: #444458;
				font-weight: 700;
				font-size: 14px;
			}
			.num {
				color: #000;
				// font-weight: 700;
				font-size: 18px;
			}
		}
	}
</style>
