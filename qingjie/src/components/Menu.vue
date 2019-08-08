<template>
    <el-row class="tac">
        <el-col>
            <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            :default-openeds = "[ '1' ]"
            :collapse="isCollapse"
            :collapse-transition = false
            active-text-color="#ffd04b">
                <router-link to = "/">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                </router-link>
                <router-link to = "/pro">
                    <el-menu-item index="2">
                        <i class="el-icon-document"></i>
                        <span slot="title">产品中心</span>
                    </el-menu-item>
                </router-link>
                <router-link to = "/user">
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                </router-link>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
  import Vue from 'vue'
  import { Row, Col, Menu, MenuItem, Submenu, MenuItemGroup } from 'element-ui'
  Vue.use(Row).use(Col).use(Menu).use(MenuItem).use(Submenu).use(MenuItemGroup)
  export default {
    props: [ 'isCollapse' ],
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
