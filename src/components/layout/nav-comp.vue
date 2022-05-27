<template>
	<div class="nav">
		<h3><img src="@/assets/images/logo.png"></h3>
		<ul>
			<li @click="this.$store.commit('MenuStateChange' , 1)">
				<a href="javascript:;">
					<CogIcon class="h-5 w-5 text-blue-500"/>
					<span>Setting</span>
				</a>
			</li>
			<li  @click="$store.commit('MenuStateChange' ,2)">
				<a href="javascript:;">
					<DocumentAddIcon class="h-5 w-5 text-blue-500"/>
					<span>Media</span>
				</a>
			</li>
			<li @click="$store.commit('MenuStateChange' ,3)">
				<a href="javascript:;">
					<ChatAltIcon class="h-5 w-5 text-blue-500"/>
					<span>Text</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import {CogIcon , DocumentAddIcon , ChatAltIcon } from '@heroicons/vue/solid'

export default {
  components: {CogIcon , DocumentAddIcon  , ChatAltIcon}
}
</script> 

<style>
.nav {width: 130px; height: 100vh; box-sizing: border-box;  border-right: 1px solid #ddd ; text-align: center; background: rgb(255, 255, 255);}
.nav h3 {padding-top: 20px;}
.nav h3 img {width: 50px; height: 50px;}
.nav ul {text-align: left; padding-top: 20px; padding-left: 20px;}
.nav ul li {height: 50px; line-height: 50px;}
.nav ul li:hover span {color: #bbb;}
.nav ul li span {font-size: 14px; color: #999; display: inline-block; vertical-align: middle; padding-left: 5px;}
.h-5 {width: 25px; height: 20px; display: inline-block; vertical-align: middle;}

</style> 