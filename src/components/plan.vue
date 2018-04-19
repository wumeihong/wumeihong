<template>
    <div class="plan">
        <div class="top">
             <h1>12345</h1>
             <p>所有广告计划>DD-广告测试团队-20171102-4>12345</p>
             <p><span>单元:20171102</span><span>投放周期:2017/5/1-2017/5/3</span> <span>定向:男,小学,10-16岁,北京上海武汉贵州宁夏</span></p>
        </div>
         <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
       
    </div>
</template>
<script>
import axios from '../utils/request'
 export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        tableData: null
      }
    },
    mounted(){
        axios.post("/user/list").then(res=>{
            this.tableData=JSON.parse(res).list
            console.log(this.tableData)
        })
    }
  }
</script>
<style lang=less scoped>
    .plan{
        width:100%;
        height: 100%;
        .top{
            width:100%;
        }
    }
</style>


