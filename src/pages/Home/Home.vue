<template>
  <div class="box">
    <common-layout :breadcrumb="breadcrumb">
       <div>
            <div class="top">
                <h3 class="title">视频监控点</h3>
                <a-col :span="6" v-for="item in arealist" :key="item.title">
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
                        <a-card-meta :title="item.title" :description="`负责人：${item.principal}`">
                            <a-avatar
                                slot="avatar"
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            />
                        </a-card-meta>
                    </a-card>
                </a-col>
            </div>
            <div class="bottom">
                 <h3 class="title">详情展示</h3>
                 <a-table :columns="columns" :data-source="arealist">
                    <span slot="action">
                        <a> 查看监控 <a-icon type="eye" /> </a>
                    </span>
                 </a-table>
            </div>
       </div>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'

export default {
    data () {
        return {
            breadcrumb:['监控管理','查看监控点'],
            columns:[
            {
                title: '监控点名称',
                dataIndex: 'title',
                key: 'title',
                width: 180,
                ellipsis: true,
            },
            {
                title: '负责人',
                dataIndex: 'principal',
                key: 'principal',
            },
            {
                title: '摄像头型号',
                dataIndex: 'type',
                key: 'type',
                ellipsis: true,
            },
            {
                title: '分辨率',
                dataIndex: 'resolution',
                key: 'resolution',
                width: 150,
                ellipsis: true,
            },
            {
                title: '监控范围',
                dataIndex: 'range',
                key: 'range',
                ellipsis: true,
            },
            {
                title: '监控地址',
                dataIndex: 'address',
                key: 'address',
                width: 280,
                ellipsis: true,
            },
            {
                title: '摄像头数量',
                dataIndex: 'num',
                key: 'num',
            },
            {
                title: 'Action',
                key: 'action',
                scopedSlots: { customRender: 'action' },
            },
            ],
            arealist:[{
                avatar:require('@/assets/video-avatar.jpeg'),
                title:'五山街道监控点1',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            },{
                avatar:require('@/assets/video-avatar2.jpeg'),
                title:'五山街道监控点2',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            },{
                avatar:require('@/assets/video-avatar3.jpeg'),
                title:'五山街道监控点3',
                principal:'叶田心',
                address:'广州市天河区五山街道381号东路口',
                range:'四平方米',
                num:'2',
                type:'CD240-R',
                resolution:'1280x720(高清)'
            },{
                avatar:require('@/assets/video-avatar4.png'),
                title:'五山街道监控点4',
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
      width: 100%;
  }

  .box .card{
      margin:5px 10px 20px 10px;
  }

  /* .box .top-col:nth-child(1){
      padding-left: 20px;
  } */

  /* .box .top-col:nth-last-child(1){
      margin-right: 20px;
  } */

  .box .title{
      margin-left: 10px;
      margin-bottom: 0;
  }

  .box .top,.bottom{
      background:#fff;
  }

  .box .top{
      padding-top: 15px;
      overflow: hidden;
  }

  .box .bottom{
      margin-top: 15px;
      padding-top: 15px;
  }
</style>
