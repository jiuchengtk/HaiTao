<template>
    <div>
        <el-table
            :data="list"
            border
            style="width: 100%">
            <el-table-column
                prop="images.small"
                align="center"
                width = "150"
                label="图片">
                <template slot-scope="scope">
                    <el-image 
                        style="width: 100px; height: 100px"
                        :src="scope.row.images.small" >
                    </el-image>
                </template>
            </el-table-column>
            <el-table-column
                prop="title"
                label="电影名称"
                align="center"
                width="180">
            </el-table-column>
            <el-table-column
                prop="id"
                label="id"
                align="center"
                width="180">
            </el-table-column>
            <el-table-column
                prop="year"
                align="center"
                label="上映时间">
            </el-table-column>
        </el-table>
    </div>
</template>

<style>
.el-main {
    line-height: 30px;
}
</style>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        list: []
      }
    },
    mounted () {
        axios.get('https:www.daxunxun.com/douban').then(res => {
            this.list = res.data
        })
    }
  }
</script>
