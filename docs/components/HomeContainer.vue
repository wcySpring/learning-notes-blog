<template>
	<div class="postlist-wrapper">
		<div class="wrapper-left">
			<div
				v-show="isInfo"
				class="wrapper-card-hover wrapper-info"
				:class="{ enter: showEnter, leave: showLeave }"
			>
				<div>
					<span class="emoji">👋</span>{{ theme.personalInfo.introduction }}
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
			<PersonInfo @click="showInfo" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useData } from 'vitepress'
	import PersonInfo from './PersonInfo.vue'
	import PageList from './PageList.vue'
	import { ref, onMounted } from 'vue'

	const { theme } = useData()

	const isInfo = ref(false)

	const showEnter = ref(false)
	const showLeave = ref(false)

	onMounted(() => {
		showInfo()
	})

	function showInfo() {
		if (showEnter.value) {
			setTimeout(() => {
				isInfo.value = !isInfo.value
			}, 1000)
			showEnter.value = false
			showLeave.value = true
		} else {
			showEnter.value = true
			showLeave.value = false
			isInfo.value = !isInfo.value
		}
	}
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

	.enter {
		animation: enterenter 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@keyframes enterenter {
		0% {
			letter-spacing: 0.5em;
			filter: blur(12px);
			opacity: 0;
		}

		100% {
			filter: blur(0);
			display: inline-block;

			opacity: 1;
		}
	}

	.leave {
		animation: leave 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	@keyframes leave {
		0% {
			opacity: 1;
			filter: blur(0);
		}

		100% {
			letter-spacing: 0.5em;
			filter: blur(12px);
			opacity: 0;
			display: none;
		}
	}
</style>
