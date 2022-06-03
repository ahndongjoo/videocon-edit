import { createApp } from 'vue'
import App from './App.vue'
import FFmpegService from "./ffmpeg.js";
// import router from './router.js'
import store from './store.js'


let app = createApp(App);
app.use(store , FFmpegService).mount('#app');


// 프레임 쪼개기;
// video.addEventListener('loadeddata', function() {
//     var duration = video.duration;
//     var i = 0;

//     var interval = setInterval(function() {
//         video.currentTime = i;
//         generateThumbnail(i);
//         i = i+5;
//         if (i > duration) clearInterval(interval);
//     }, 300);
// });

// function generateThumbnail(i) {     
//     //generate thumbnail URL data
//     var context = thecanvas.getContext('2d');
//     context.drawImage(video, 0, 0, 220, 150);
//     var dataURL = thecanvas.toDataURL();

//     //create img
//     var img = document.createElement('img');
//     img.setAttribute('src', dataURL);

//     //append img in container div
//     document.getElementById('thumbnailContainer').appendChild(img);
// }


// 동영상 프레임 쪼개기
// window.webCapture.capture(file, timeInput.value * 1000, (dataURL, imageInfo) => {

//     const { width, height, duration } = imageInfo;

//     resultContainer.innerHTML = `<img src="https://raw.githubusercontent.com/jordiwang/web-capture/master/${dataURL}" />`

//     infoContainer.innerHTML = `耗时：${Date.now() - startTime}ms<br>宽度：${width}<br>高度：${height}<br>时长：${duration / 1000000}s`;
// })


// ffmpeg -i 1080.mp4 -an -r 1 -y -s 320x240 output%d.jpg