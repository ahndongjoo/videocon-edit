<template>
    <div class="video_box">
        <div class="box_top">
            <video controls id="video" :src="$store.state.fileSrc" type="video/mp4"></video>
        </div>
        <div class="box_bottom">
            <div class="timeline_box">
                <ul>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                    <li>
                        <div class="timeline_img">
                            <img src="javascript:;" alt="이미지">
                        </div>
                        <p>00:00:01</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style>
.video_box {width: calc(100% - 480px); box-sizing: border-box; padding: 90px 50px 0 100px; }
.video_box video {width: 100%; height: auto; background-color: #000;}

.timeline_box {margin: 20px 0; width: 100%;}
.timeline_box ul {}
.timeline_box ul li {float: left; width: 150px; height: 100px; background-color: #feee; border-left: 1px solid #eee;}
.timeline_box ul li img {}

</style>