<template>
	<div class="blue">
		{{blue}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				blue:'this is blue region'
			}
		}
	}
</script>

<style lang="less">
	.blue{
		background: blue;
		height: 100%;
	}
</style>