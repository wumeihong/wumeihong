<template>
    <div class="creatives">
        <h1>广告创意</h1>
        <div class="top">
            <h3>落地页</h3>
             <label for="">着陆页地址:<input type="text" placeholder="请设置广告名称" ref="title"/><span>预览</span></label>
        </div>
        <div class="middle">
            <h3>上传创意</h3>
            <div style="margin-bottom: 20px;">
                <el-button
                    size="small"
                    @click="addTab(editableTabsValue2)"
                >
                    添加创意
                </el-button>
                </div>
                <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
                <el-tab-pane
                    v-for="(item,index) in editableTabs2"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                >
                    <upload></upload>
                </el-tab-pane>
                </el-tabs>
             <p>JPG/JPEG,小于30KB</p>
        </div>
        <div class="bottom">
            <label for="">广告文案<input type="text" placeholder="请设置广告名称" v-on:keyup="inputChange" ref="inp1" size="18"><span ref="span1">0</span>/<span ref="span2">18</span></label>
             <label for="">监听广告<input type="text" placeholder="请设置广告名称" ref="inp2"></label>
        </div>
        <button style="width:100px;height:50px;linheight:50px;text-align='center';background:skyblue;color:#fff;margin-top:10px;" @click="submit">提交</button>
    </div>
</template>
<script>
import upload from './upload.vue'
import axios from '../utils/request.js'
console.log(axios)
const fs = require("fs")
let len =2;
console.log(len)
export default {
     data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: '创意1',
          name: '1'
        }, {
          title: '创意2',
          name: '2'
        }],
        tabIndex: 2
      }
      },
      components:{upload},
    methods: {
       addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: '创意'+(++len),
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
            let tabs = this.editableTabs2;
            let activeName = this.editableTabsValue2;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                if (tab.name === targetName) {
                    let nextTab = tabs[index + 1] || tabs[index - 1];
                    if (nextTab) {
                    activeName = nextTab.name;
                    }
                }
                });
            }
            this.editableTabsValue2 = activeName;
            this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },
    inputChange(){
        let worldlen = this.$refs.inp1.value.length;
        this.$refs.span1.innerHTML=worldlen;
        let maxlen = this.$refs.span2.innerHTML;
        if(worldlen>=18){
            this.$notify({
                title: '警告',
                message: '最多只能输入十八个字',
                type: 'warning'
            });
             worldlen=18
             this.$refs.span1.innerHTML=worldlen
             this.$refs.inp1.disabled=true
        }
        
    },
    submit(){
        axios.post("/listdata",{
            title:this.$refs.title.value,
            name:this.$refs.inp1.value,
            des:this.$refs.inp2.value

        }).then(res=>{
            console.log(res)
        })
    }
    }
}
</script>
<style lang=less scoped>
    .creatives{
        width: 100%;
        height: 100%;
        h1{
            width:100%;
            height: 50px;
            line-height: 50px;
        }
               .top{
           margin-top:10px;
           h3{
               font-size: 20px;
           }
           label{
               display: block;
               color:#333;
               margin-top:10px;
               font-size: 14px;
               input{
                   margin-left: 5px;
                   border: 1px solid #ddd;
                   border-radius: 5px;
                   width:500px;
                   height: 30px;
                   padding-left: 10px;
               }
               span{
                   margin-left: 5px;
                   color:#333;
               }
           }
       }
       .spans{
           width:100%;
           height: 100px;
           span{
               float: left;
               width: 100px;
               height: 50px;
               line-height: 50px;
               text-align: center;
               border-bottom: 1px solid #ccc;

           }
       }
        .middle p{
            color:#ccc;
            font-size: 14px;
        }
        .bottom{
            margin-top: 20px;
            label{
               display: block;
               color:#333;
               margin-top:10px;
               font-size: 14px;
               input{
                   margin-left: 5px;
                   border: 1px solid #ddd;
                   border-radius: 5px;
                   width:500px;
                   height: 30px;
                   padding-left: 10px;
               }
               span{
                   margin-left: 5px;
                   color:#333;
               }
           }
        }

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
      
    }
</style>


