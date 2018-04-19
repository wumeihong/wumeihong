<template>
  <div id="app">
    <el-container class="container">
  <el-aside width="200px">
    <el-menu :default-openeds="['1', '3']" router>
     <el-submenu index="1" >
        <template slot="title"><i class="el-icon-menu" ></i>新建广告</template>
          <el-menu-item-group>
            <el-menu-item index="/wrapguang">建立广告计划</el-menu-item>
            <el-menu-item index="/guanggao">选择计划</el-menu-item>
        </el-menu-item-group>
        <el-menu-item index="/unitone">广告单元</el-menu-item>
        <el-menu-item index="/creatives">广告创意</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home"><i class="el-icon-menu"></i>首页概览</el-menu-item>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-menu"></i>广告计划</template>
        <el-menu-item index="/plan">广告计划</el-menu-item>
        <el-menu-item index="/manage">广告单元</el-menu-item>
        <el-menu-item index="/manage">广告创意</el-menu-item>
      </el-submenu>
      <el-menu-item index="/number"><i class="el-icon-menu"></i>数据中心</el-menu-item>
      <el-menu-item index="/creative"><i class="el-icon-menu"></i>工具箱</el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
        <el-tooltip class="item"  content="如有问题,请联系" placement="bottom">
          <el-button>下边</el-button>
        </el-tooltip>
         <el-tooltip class="item" effect="dark" content="如有问题,请联系" placement="bottom">
          <el-button>下边</el-button>
        </el-tooltip>
       <el-tooltip class="item" effect="dark" content="退出登录" placement="bottom">
        </el-tooltip>
       <span>{{username}}</span>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  computed:{
    ...mapState(["username"])
   
  },
   methods: {
       
    }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
body{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
#app{
  width: 100%;
  height: 100%;
}
.container{
  width: 100%;
  height: 100%;
}
 .el-header {
   background: #fff;
    line-height: 50px;
  }
.el-aside {
    background: rgb(15, 15, 34);
    color: #333;

}
.el-menu{
  background: rgb(15, 15, 34);
}
.el-menu-item{
  color: #fff;
}
.el-submenu__title{
  color: #fff;
}
.el-main{
  background:#eee;
}
.el-button{
  border: none;
}
.el-message-box__message p strong{
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-right: 15px;
  cursor: pointer;
  background: skyblue;
  color:#fff;
  margin-left: 20px;
 
}
</style>
