<template>
  <div class="box">
    <div class="top">
      <div class="header">
        <img alt="logo" class="logo" src="@/assets/logo.jpeg" />
        <span class="title">交通视频监控平台</span>
      </div>
      <div class="desc">华南理工大学502实验室叶思毕业设计 导师刘永桂</div>
    </div>
    <div class="login">
      <a-form @submit="onSubmit" :form="form">
        <a-tabs size="large" :tabBarStyle="{textAlign: 'center'}" style="padding: 0 2px;">
          <a-tab-pane tab="新用户注册" key="1">
            <a-alert type="error" :closable="true" v-show="error" :message="error" showIcon style="margin-bottom: 24px;" />
            <a-form-item>
              <a-input
                autocomplete="autocomplete"
                size="large"
                placeholder="请输入账户名"
                v-decorator="['name', {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}]"
              >
                <a-icon slot="prefix" type="user" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                size="large"
                placeholder="请输入密码"
                autocomplete="autocomplete"
                type="password"
                v-decorator="['password', {rules: [{ required: true, message: '请输入密码', whitespace: true}]}]"
              >
                <a-icon slot="prefix" type="lock" />
              </a-input>
            </a-form-item>
          </a-tab-pane>
        </a-tabs>
        <div>
          <a-checkbox :checked="true" >自动登录</a-checkbox>
          <router-link style="float: right" to="/" >返回登录</router-link>
        </div>
        <a-form-item>
          <a-button :loading="logging" style="width: 100%;margin-top: 24px" size="large" htmlType="submit" type="primary">注册账户</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Login',
  data () {
    return {
      logging: false,
      error: '',
      form: this.$form.createForm(this)
    }
  },
  computed: {
    
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      const name = this.form.getFieldValue('name')
      const password = this.form.getFieldValue('password')
      console.log(name,password)
      if(name !=undefined && password != undefined){
          this.$message.success('注册成功！')
          this.$router.push({ name: 'Login' })
      }else{
          this.$message.error('请填写用户名和密码')
      }
    }
  }
}
</script>

<style scoped>
  .box{
      width: 23%;
      margin: auto;
      padding-top: 90px;
      min-width: 328px;
  }
  .logo{
      height: 44px;
      vertical-align: top;
      margin-right: 16px;
  }
  .header{
      height: 44px;
      line-height: 44px;
  }
  .header .title{
      font-size: 33px;
        color: rgba(0, 0, 0, 0.65);
        font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
        font-weight: 600;
        position: relative;
        top: 2px;
        margin-bottom: 4px;
  }
  .top .desc{
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      margin-top: 12px;
      margin-bottom: 40px;
  }
</style>
