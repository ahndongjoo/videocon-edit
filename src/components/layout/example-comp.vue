<template>
  <div> <video ref="player" :src="video" controls autoplay /> </div>
  <button @click="transcode">변환</button>
  <p>로그 : {{ message }}</p>
</template>
<script>
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
export default {
  setup() {
    const ffmpeg = createFFmpeg({
      log: true,
    });
	return { ffmpeg };
	},
	data() {
		return {
			message : "Click Start to Transcode"
		}
	},
	methods : {
     async transcode() {
        this.message = 'Loading ffmeg-core.js';
        await this.ffmpeg.load();
        this.message = 'Start transcoding';
        this.ffmpeg.FS('writeFile', 'test.avi', await fetchFile(this.file));
        await this.ffmpeg.run('-i', 'test.avi', 'test.mp4');
        this.message.value = 'Complete transcoding';
        const data = this.ffmpeg.FS('readFile', 'test.mp4');
				this.$refs.player.value = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
        }
	}
}
</script>