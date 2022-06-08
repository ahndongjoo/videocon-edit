<template>
	<div class="wrap">
		<Navigation/>
		<SettingMenu/>
		<VideoContent/>
		<!-- <ExampleComp/> -->
	</div>
</template>

<script>
import Navigation from './components/layout/nav-comp'
import SettingMenu from './components/layout/setting-comp'
import VideoContent from './components/video-comp'
// import ExampleComp from './components/layout/example-comp.vue'

export default {
	name: 'App',
	components: {
		Navigation :Navigation ,
		SettingMenu :SettingMenu ,
		VideoContent : VideoContent,
		// ExampleComp : ExampleComp,
	}
}
</script>

<style>
 @import './static/css/reset.css';

.wrap {display: flex; width: 100%;}
</style>
