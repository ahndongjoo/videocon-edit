<template>
    <div class="video_box">
        <div class="box_top">
            <video controls>
                <source src="#" type="video/mp4">
            </video>
        </div>
        <div class="box_bottom"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.video_box {width: calc(100% - 480px); box-sizing: border-box; padding: 100px 50px; }
.video_box video {width: 100%; height: 300px; background-color: #000;}
</style>