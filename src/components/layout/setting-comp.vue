<template>
	<div class="setting_menu">
		<div class="menu_container menu_container1" v-if="MenuStateVal == 1">
			<h3>{{ message }}</h3>
			<div class="menu_box">
				<div class="box_top">
					<label for="file_input">
						<p class="img_icon">
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
						</p>
					<p>파일을 업로드해 주세요.<br><em><b>클릭</b> 또는 <b>드래그</b>하여 업로드 해 주세요.</em><br><em class="file_name">FileName : {{fileName}}</em></p>
					</label>
					<input id="file_input" type="file" accept=".mp4" @change="onFileChange">
				</div>
				<div class="box_middle"></div>
				<div class="box_bottom"></div>
			</div>
		</div>
		<div class="menu_container menu_container2" v-if="MenuStateVal == 2">
			<h3>Menu-container2</h3>
		</div>
		<div class="menu_container menu_container3" v-if="MenuStateVal == 3">
			<h3>Menu-container3</h3>
		</div>
	</div>
</template>

<script>
// import { CloudUpload } from '@heroicons/vue/solid'
// import axios from 'axios'
import { createFFmpeg , fetchFile } from '@ffmpeg/ffmpeg' // eslint-disable-line no-unused-vars

export default {
	setup(){
		const ffmpeg = createFFmpeg({
			log : true,
		});
		return {ffmpeg};
		
	},
	components :{
		
	},
	computed:{
		MenuState(){
            return this.$store.state.MenuState;
        }
	},
	data(){
		return{
			MenuStateVal : this.$store.state.MenuState,
			fileName : "",
			message : "파일 업로드"
		} 
	},
	methods: {
		async onFileChange(e){			

			this.message = "업로드 중입니다"
			await this.ffmpeg.load();
			alert("dss");
			const files = e.target.files
			files[0].type != "video/mp4" ? alert("확장자명을 확인해 주세요.") : this.fileName = files[0].name;
			const ffmpegFile = this.ffmpeg.FS(`${files}` , `${files[0].name}`); // eslint-disable-line no-unused-vars
			console.log(ffmpegFile)
			let reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.addEventListener('load' , function(){

			});
			var videoSrc = URL.createObjectURL(files[0])
			this.$store.commit("fileSrcChange" , videoSrc);
		}
	}
}
</script>

<style>
#file_input {display: none;}
.file_name {font-size: 10px; color: #999; padding-top: 5px;}

.setting_menu {width: 350px; box-sizing: border-box; padding: 40px 30px 0 30px; border-right: 1px solid #eed;}
.setting_menu h3 {font-weight: bold; font-size: 18px;}
.menu_container1 {}
.menu_container1 .menu_box {margin-top: 20px}
.menu_container1 .menu_box .box_top {width: 100%; box-sizing: border-box; border: 1px dashed #ddd; border-radius: 15px; padding: 45px 20px; text-align: center;}
.menu_container1 .menu_box .box_top:hover {background-color:  #d5eef8; border-color:#6dcef5;}
.menu_container1 .menu_box .box_top .img_icon {width: 35px; display: inline-block;}
.menu_container1 .menu_box .box_top p {padding-top: 5px; font-size: 12px; line-height: 1.4;}
.menu_container1 .menu_box .box_top p b {font-weight: bold;}

.menu_container1 .menu_box .box_middle {}
.menu_container1 .menu_box .box_bottom {}

</style>