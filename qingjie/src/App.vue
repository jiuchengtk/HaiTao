<template>
  <div id="app">
    <el-container>
      <el-aside style = "width: auto">
        <MyMenu :isCollapse = "isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <i class="el-icon-caret-left" @click = "isCollapse = !isCollapse"></i>
        </el-header>
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
  .el-header, .el-footer {
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
