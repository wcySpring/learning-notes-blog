<template>
	<div class="postlist-wrapper">
		<div class="wrapper-left">
			<div class="wrapper-card-hover wrapper-info">
				<div>
					<span class="emoji">👋</span
					>{{ theme.personalInfo.introduction }}
				</div>
				<div>
					<span class="emoji">👀</span>
					{{ theme.personalInfo.interested }}
				</div>
				<div>
					<span class="emoji">🌱</span>
					{{ theme.personalInfo.learning }}
				</div>
				<div>
					<span class="emoji">📫</span>
					{{ theme.personalInfo.reachMe }}
				</div>
				<div>
					<span class="emoji">💞️</span>
					{{ theme.personalInfo.description }}
				</div>
			</div>
			<!-- page ls -->

			<PageList />
		</div>
		<div class="wrapper-right hide-on-mobile">
			<!-- 个人详情 -->
			<PersonInfo />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useData, withBase } from 'vitepress'
	import PersonInfo from './PersonInfo.vue'
	import PageList from './PageList.vue'

	const { theme } = useData()
</script>
<style lang="scss" scoped>
	@import '@theme/styles/layout/homeContainer';

	.wrapper-info {
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 10px;
		padding: 20px;
	}

	.wrapper-info div {
		margin-top: 10px;
		font-size: 14px;
		color: #000;
	}

	.emoji {
		margin-right: 10px;
	}
</style>
