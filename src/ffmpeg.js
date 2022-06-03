// import { createFFmpeg, fetchFile, FFmpeg } from "@ffmpeg/ffmpeg";

// class FFmpegService {
//   ffmpeg: FFmpeg = createFFmpeg({ log: true });
//   get isSupported() {
//     return (window as any).SharedArrayBuffer !== undefined;
//   }
//   async init(cb?: () => void) {
//     await this.ffmpeg.load();
//     cb?.();
//   }
//   async writeFile(filename: string, file: File) {
//     this.ffmpeg.FS("writeFile", filename, await fetchFile(file));
//   }
// }

// export default new FFmpegService();

/* <template>
  <div> <video ref="player" :src="video" controls autoplay /> </div>
  <button @click="transcode">변환</button>
  <p>로그 : {{ message }}</p>
</template>
<script>
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
export default {
  setup() {
	const player = ref(false);
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
     async function transcode() {
        message.value = 'Loading ffmeg-core.js';
        await ffmpeg.load();
        message.value = 'Start transcoding';
        ffmpeg.FS('writeFile', 'test.avi', await fetchFile(file));
        await ffmpeg.run('-i', 'test.avi', 'test.mp4');
        message.value = 'Complete transcoding';
        const data = ffmpeg.FS('readFile', 'test.mp4');
				this.$refs.player.value = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
        }
	}
}
</script> */