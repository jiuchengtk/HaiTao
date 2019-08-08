<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0;">
        <div class="icon" style="margin-left: 10px;" @click = "isCollapse = !isCollapse">
          <img src='./assets/123.png' class="img" />
          <img src='./assets/titl.png' class="img2" />
        </div>
        <div class="user">
            <el-row>
              <router-link to = "/sign" >
                <el-button type="success">登录</el-button>
              </router-link>
              <router-link to = "/res" >
                <el-button type="success">注册</el-button>
              </router-link>
            </el-row>
        </div>
      </el-header>
      <el-container>
        <el-aside style = "width: auto">
          <MyMenu :isCollapse = "isCollapse" />
        </el-aside>
        
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import { Container, Aside, Main, Header, Footer } from 'element-ui'
import MyMenu from '@/components/Menu'
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Footer)
export default {
  name: 'App',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    MyMenu
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0
  }
  html, body, #app, .el-container {
    width: 100%;
    height:100%
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
  }

  .el-header .icon {
    height: 60px;
    width: 20%;
    display: flex;
    text-align: center;
    cursor: pointer;
  }

  .el-header .icon .img {
    width: 50px;
    height: 50px;
    margin: 5px;
  }

  .el-header .user {
     margin-right: 20px;
  }

  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
