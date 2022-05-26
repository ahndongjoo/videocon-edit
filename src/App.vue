<template>
	<div class="wrap">
		<Navigation msg="Welcome to Your Vue.js App"/>
		<SettingMenu/>
		<VideoContent/>
	</div>
</template>

<script>
import Navigation from './components/layout/nav-comp'
import SettingMenu from './components/layout/setting-comp'
import VideoContent from './components/video-comp'

export default {
	name: 'App',
	components: {
		Navigation :Navigation ,
		SettingMenu :SettingMenu ,
		VideoContent : VideoContent,
	}
}
</script>

<style>
 @import './static/css/reset.css';

.wrap {display: flex; width: 100%;}
</style>
