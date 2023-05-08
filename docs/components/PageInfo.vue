<template>
	<div>
		<a class="wrapper-card docs" :href="info.path.replace('.md', '.html')">
			<div class="docs-title">{{ info.title }}</div>
			<div class="docs-footer">
				<span class="docs-info">✍️{{ info.authorDate }}</span>
				<span class="docs-info">🕐{{ info.date }}</span>
				<span class="docs-info docs-tag">
					🔗 {{ info.tags.join(' ') }}
					<!-- <a v-for="tag in item.tags" class="docs-info docs-tag" :style="{color:tag===props.filter?'var(--vp-home-hero-name-color)':'#7f7f7f'}" :key="tag"
              :href="`/categories?tag=${tag}&type=tag`" target="_blank">
              <span >{{ tag }}</span>
            </a> -->
				</span>
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
		margin-bottom: 20px;
		box-sizing: border-box;
		cursor: pointer;
	}

	// .docs:hover {
	// 	box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.2);
	// }

	.docs-footer > span {
		margin-right: 10px;
		font-size: 12px;
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

	.docs-info {
		color: #7f7f7f;
		margin-right: 10px;
	}

	.docs-tag:hover {
		color: var(--vp-home-hero-name-color) !important;
	}
</style>
