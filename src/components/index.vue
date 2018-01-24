<template>
  <div class="box">
  	<ul>
  		<router-link to='/red' tag='li' style='background: red;'>红</router-link>
  		<router-link to='/yellow' tag='li' style='background: yellow;'>黄</router-link>
  		<router-link to='/blue' tag='li' style='background: blue;'>蓝</router-link>
  		<router-link to='/green' tag='li' style='background: green;'>绿</router-link>
  	</ul>
  	<div class="show">
  		<router-view/>
  	</div>
  </div>
</template>

<script>
import Red from './red'
import Blue from './blue'
import Yellow from './yellow'
export default {
  name: 'red',
  components:{
  	Red	,
  	Blue,
  	Yellow
  },
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.box{
	width: 600px;
	height: 240px;
	border: 1px solid #000000;
	display: flex;
	margin: 100px auto;
	ul{
		list-style: none;
		li{
			width: 200px;
			height: 60px;
			border: 1px solid #000;
			text-align: center;
			line-height: 60px;
		}
	}
	.show{
		width: 400px;
		height: 240px;
		text-align: center;
		line-height: 240px;
	}
}
</style>
