<template>
	<div>
		<a class="wrapper-card docs" :href="info.path.replace('.md', '.html')">
			<div class="docs-header">
				<div class="data">✍️{{ info.authorDate }}</div>

				<div class="data">{{ info.updateTime }}</div>
				<div class="data">🔗 {{ info.tags.join(' ') }}</div>
			</div>
			<div class="docs-title">{{ info.title }}</div>
			<div class="docs-desc">
				{{ info.description }}
			</div>
			<div class="docs-footer">
				<span class="docs-info">🕐{{ info.date }}</span>
			</div>
		</a>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		info: {
			title: string
			authorDate: string
			description: string
			date: string
			tags: string[]
			path: string // 文章地址
			updateTime: string // 距离上次更新时间
		}
	}>()
</script>

<style lang="scss" scoped>
	.docs {
		display: block;
		padding: 16px 20px;
		// margin-bottom: 20px;
		box-sizing: border-box;
		cursor: pointer;
		border-left: none;
		border-right: none;
		border-top: none;
	}
	.docs:hover {
		box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
		background-color: #fafafa;
	}

	.docs-header {
		font-size: 12px;
		display: flex;
		align-items: center;
		.data {
			font-size: 12px;
			margin-right: 15px;
			&:hover {
				color: var(--vp-home-hero-name-color) !important;
			}
		}
	}
	.docs-desc {
		color: #909090;
		font-size: 13px;
		line-height: 22px;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}
	.docs-footer {
		text-align: end;
		& > span {
			margin-right: 10px;
			font-size: 12px;
		}
	}

	.docs-title {
		position: relative;
		width: fit-content;
		padding: 6px 0;
		margin-bottom: 6px;
		font-size: 20px;
		font-weight: 500;
	}

	.docs-title::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: -4px;
		left: 0;
		background-color: var(--vp-home-hero-name-color);
		visibility: hidden;
		transform: scaleX(0);
		transition: 0.3s ease-in-out;
	}

	.docs-title:hover::after {
		visibility: visible;
		transform: scaleX(1);
	}
</style>
