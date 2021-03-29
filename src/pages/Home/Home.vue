<template>
  <div class="box">
    <common-layout :breadcrumb="breadcrumb">
        <a-col :span="12" v-for="item in arealist" :key="item.title">
            <a-card hoverable class="card" >
                 <img
                    class="avatar"
                    slot="cover"
                    alt="example"
                    :src="item['avatar']"
                />
                <template slot="actions" class="ant-card-actions">
                    <a-icon key="setting" type="setting" />
                    <a-icon key="edit" type="edit" />
                    <a-icon key="ellipsis" type="ellipsis" />
                </template>
                <a-card-meta title="Card title" description="This is the description">
                    <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                </a-card-meta>
            </a-card>
        </a-col>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'

export default {
    data () {
        return {
            breadcrumb:['监控管理','查看监控点'],
            arealist:[{
                avatar:require('@/assets/video-avatar.jpeg'),
                title:'五山街道381号视频监控点1',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            },{
                avatar:require('@/assets/video-avatar.jpeg'),
                title:'五山街道381号视频监控点2',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            },{
                avatar:require('@/assets/video-avatar.jpeg'),
                title:'五山街道381号视频监控点3',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            },{
                avatar:require('@/assets/video-avatar.jpeg'),
                title:'五山街道381号视频监控点4',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            }]
        }
    },
    name: 'Home',
    components:{
        CommonLayout
    },
    computed: {
        
    },
    methods: {

    }
}
</script>

<style scoped>
  .box{
      height: 100%;
  }

  .box .avatar{
      width: 40%;
  }

  .box .card{
      margin:0 30px 30px 30px;
  }
</style>
