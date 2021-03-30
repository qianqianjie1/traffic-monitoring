<template>
    <div class="box">
        <common-layout @select="(e)=>(handleSelect(e))" :breadcrumb="breadcrumb">
            <div>
                <div class="set-info">
                     <a-descriptions title="五山街道监控点1智能检测交通事故信息概览">
                        <a-descriptions-item label="监控点名称">
                            五山街道监控点1
                        </a-descriptions-item>
                        <a-descriptions-item label="工作状态">
                            <span style="color:#52c41a">在线</span>
                        </a-descriptions-item>
                        <a-descriptions-item label="工作时长">
                            10小时
                        </a-descriptions-item>
                        <a-descriptions-item label="报警次数">
                            20次
                        </a-descriptions-item>
                        <a-descriptions-item label="已反馈次数">
                            15次
                        </a-descriptions-item>
                        <a-descriptions-item label="监控点地址">
                            广州市天河区五山街道381号东路口
                        </a-descriptions-item>
                     </a-descriptions>
                </div>
                <div class="set-form">
                    <h3 style="paddingLeft:16px">配置监控点</h3>
                    <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
                        <a-form-item label="选择监控点">
                            <a-select
                                v-decorator="[
                                'principal',   {rules: [{ required: true, message: '请选择监控点负责人' }] }]"
                                placeholder="请选择监控点负责人"
                                @change="handleSelectChange"
                            >
                                <a-select-option value="1">
                                    五山街道监控点1
                                </a-select-option>
                                <a-select-option value="2">
                                    五山街道监控点2
                                </a-select-option>
                                <a-select-option value="3">
                                    五山街道监控点3
                                </a-select-option>
                                <a-select-option value="4">
                                    五山街道监控点4
                                </a-select-option>
                            </a-select>
                        </a-form-item>
                         <a-form-item label="选择智能检测视频">
                            <a-select
                                v-decorator="[
                                'principal',   {rules: [{ required: true, message: '请选择监控点负责人' }] }]"
                                placeholder="请选择监控点负责人"
                                @change="handleSelectChange"
                            >
                                <a-select-option value="1">
                                    五山街道监控点1
                                </a-select-option>
                                <a-select-option value="2">
                                    五山街道监控点2
                                </a-select-option>
                                <a-select-option value="3">
                                    五山街道监控点3
                                </a-select-option>
                                <a-select-option value="4">
                                    五山街道监控点4
                                </a-select-option>
                            </a-select>
                        </a-form-item>                      
                            <a-form-item :wrapper-col="{ span: 12, offset: 8 }">
                                <a-button type="primary" html-type="submit">
                                    提交表单
                            </a-button>
                        </a-form-item>

                    </a-form>
                </div>
            </div>
         </common-layout>
    </div>
</template>

<script>
import CommonLayout from '@/components/CommonLayout.vue'

export default {
    data(){
        return {
            breadcrumb:['监控管理','新建监控点'],
            form: this.$form.createForm(this, { name: 'coordinated' })
        }
    },
    name: 'Video',
    components:{
        CommonLayout
    },
    methods: {
        handleSubmit(){

        },
        handleSelectChange(){

        },
        handleSelect(key){
            console.log('key',key)
            if(key != 'set')
                this.$router.push({path: key})
        }
    },
}
</script>

<style scoped>
.box{
    height: 100%;
}

.set-info,.set-form{
    background:#fff;
}

.set-form{
    margin-top: 20px;
    height: 100%;
    padding: 20px;
}

.set-info{
    padding-left: 30px;
    padding-top: 20px;
}
</style>