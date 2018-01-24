<template>
	<div class="yellow">
		{{yellow}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				yellow:'this is yellow region'
			}
		}
	}
</script>

<style lang="less">
	.yellow{
		background: yellow;
		height: 100%;
	}
</style>