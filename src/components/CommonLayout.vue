<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo-box">
        <img alt="logo" id='logo' src="@/assets/logo.jpeg" />
        <span class="title">交通视频监控平台</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['manage']" :default-open-keys="['view']" >
        <a-sub-menu key="manage">
          <span slot="title"><a-icon type="video-camera" />监控管理</span>
          <a-menu-item key="view">
              查看监控点
          </a-menu-item>
          <a-menu-item key="add">
              新建监控点
          </a-menu-item>
          <a-menu-item key="set">
              配置监控点
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="alarm">
          <a-icon type="bell" />
          <span>报警处理</span>
        </a-menu-item>
        <a-menu-item key="statistic">
          <a-icon type="area-chart" />
          <span>数据统计</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <span id="exit-title">退出登录</span>
        <a-icon
          class="exit"
          type="poweroff"
          @click="() => {}"
        />
        <span id="user-title">admin,欢迎回来！</span>
        <a-icon
          class="user"
          type="user"
          @click="() => {}"
        />
      </a-layout-header>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <template v-for="bread in breadcrumb">
            <a-breadcrumb-item :key="bread">{{bread}}</a-breadcrumb-item>
          </template>
        </a-breadcrumb>
        <a-layout-content
          :style="{ margin: 0, minHeight: '280px' }"
        >
          <slot></slot>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name:'CommonLayout',
  props:['breadcrumb'],
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger{
  height: 100%;
}

#components-layout-demo-custom-trigger .logo-box{
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  -webkit-transition: all .3s;
  transition: all .3s;
  overflow: hidden;
}

#logo{
  height: 30px;
  margin-right: 6px;
}

#components-layout-demo-custom-trigger .logo-box .title{
  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  font-size: 29;
  color: #fff;
}
#components-layout-demo-custom-trigger .trigger,.user,.exit,#exit-title,#user-title{
  color: #1890ff;
}
#components-layout-demo-custom-trigger .user,.exit,#exit-title,#user-title{
  float: right;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover,.user:hover,.exit:hover {
  color: #52c41a;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

#components-layout-demo-custom-trigger .user{
  font-size: 18px;
  line-height: 64px;
  padding: 0 5px 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .exit{
  font-size: 18px;
  line-height: 68px;
  padding: 0 5px 0 20px;
  cursor: pointer;
  transition: color 0.3s;
}

#exit-title{
  padding-right: 20px;
}

</style>
