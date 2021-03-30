<template>
    <div class="box">
        <common-layout @select="(e)=>(handleSelect(e))" :breadcrumb="breadcrumb">
            <div class="add-box">
                <h3 style="paddingLeft:30px">新建监控点</h3>
                <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 10 }" @submit="handleSubmit">
                    <a-form-item label="监控点名称">
                        <a-input
                            v-decorator="['note', { rules: [{ required: true, message: '请输入监控点名称' }] }]"
                            placeholder="请输入监控点名称"
                        />
                    </a-form-item>
                    <a-form-item label="负责人">
                    <a-select
                        v-decorator="[
                        'principal',   {rules: [{ required: true, message: '请选择监控点负责人' }] }]"
                        placeholder="请选择监控点负责人"
                        @change="handleSelectChange"
                    >
                        <a-select-option value="male">
                            叶田心
                        </a-select-option>
                        <a-select-option value="female">
                            贾名
                        </a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item label="摄像头型号">
                        <a-input
                            v-decorator="['note', { rules: [{ required: true, message: '请输入摄像头型号' }] }]"
                            placeholder="请输入摄像头型号"
                        />
                    </a-form-item>
                    <a-form-item label="分辨率">
                        <a-input
                            v-decorator="['note', { rules: [{ required: true, message: '请输入摄像头分辨率' }] }]"
                            placeholder="请输入摄像头分辨率"
                        />
                    </a-form-item>
                    <a-form-item label="监控范围">
                        <a-input
                            v-decorator="['note', { rules: [{ required: true, message: '请输入监控范围' }] }]"
                            placeholder="请输入监控范围"
                        />
                    </a-form-item>
                    <a-form-item label="监控地址">
                        <a-input
                            v-decorator="['note', { rules: [{ required: true, message: '请输入监控地址' }] }]"
                            placeholder="请输入监控地址"
                        />
                    </a-form-item>
                    <a-form-item label="摄像头数量">
                        <a-input
                            v-decorator="['note', { rules: [{ required: true, message: '请输入摄像头数量' }] }]"
                            placeholder="请输入摄像头数量"
                        />
                    </a-form-item>
                        <a-form-item :wrapper-col="{ span: 12, offset: 8 }">
                            <a-button type="primary" html-type="submit">
                                提交表单
                        </a-button>
                    </a-form-item>

                </a-form>
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
            if(key != 'add')
                this.$router.push({path: key})
        }
    },
}
</script>

<style scoped>
.box{
    height: 100%;
}

.add-box{
    height: 100%;
    background:#fff;
    padding: 20px;
}
</style>