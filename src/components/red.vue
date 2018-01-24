<template>
	<div class="red">
		{{red}}
	</div>
</template>

<script>
	export default {
		data() {
			return {
				red:'this is red region'
			}
		}
	}
</script>

<style lang="less">
	.red{
		background: red;
		height: 100%;
	}
</style>