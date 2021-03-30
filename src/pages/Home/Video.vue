<template>
    <div class="box">
         <common-layout :breadcrumb="breadcrumb">
            <div class="video-box">
                <div>
                    <h3>监控点1监控视频</h3>
                    <video-player
                        :options="playerOptions">
                    </video-player>
                </div>
                <!-- <div>
                    <h3>检测视频</h3>
                    <video-player
                        :options="playerOptionsDetected">
                    </video-player>
                </div> -->
            </div>
         </common-layout>
    </div>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'

export default {
    data(){
        return {
            breadcrumb:['监控管理','查看监控点','视频播放'],
            playerOptions: {
                // videojs options
                muted: true,
                width:550,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "video/mp4",
                    src: require('@/assets/test3.mp4')
                }]
            },
            //  playerOptionsDetected: {
            //     // videojs options
            //     muted: true,
            //     width:550,
            //     language: 'en',
            //     playbackRates: [0.7, 1.0, 1.5, 2.0],
            //     sources: [{
            //         type: 'video/webm',
            //         src: require('@/assets/test3detected.mp4')
            //     }]
            // }
        }
    },
    name: 'Video',
    components:{
        CommonLayout
    }
}
</script>

<style scoped>
.box{
    height: 100%;
    background:#fff;
}

/* .video-box{
    display: flex;
    justify-content: space-around;
} */
</style>