<template>
  <div class="guanggao">
        <h1>广告创意</h1>
        <div class="top">
            <h3>落地页</h3>
            <label for="">着陆页地址:<input type="text" placeholder="请设置广告名称"/><span>预览</span></label>
        </div>
        <div class="middle">
            <h3>上传创意</h3>
            <a href="javascript:;" v-on:click="tocreatives" @click="open">+添加创意</a>
        </div>
        <div class="bottom">
            <button>提交</button>
        </div>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name:"guanggao",
  computed:{
    ...mapState(['creativeTplType'])
  },
  methods:{
      tocreatives(){
          this.$router.push("/creatives")
      },
       open() {
        this.$alert(<tpl-selector></tpl-selector>, '', {
         cancelButtonText:"单图",
         confirmButtonText:"多图",
          center:true,
          callback(action){
              console.log(action)
              this.$store.commit('updateCreativeTplType',action=="cancel"?"single":"multiple")
          }

        }).then((action)=>{

        }).catch(()=>{

        })
      },
      close(){

      }
  },
  components:{
      tplSelector:{
          template:`<div class="dialog">
                <h5>选择模板</h5>
                <div class="template">
                    <div class="singlePic" @click="close('single')">单图</div>
                    <div class="manyPic" @click="close('multiple')">多图</div>
                </div>
          </div>`,
          methods:{
              ...mapMutations(["updateCreativeTplType"]),
              close(type){
                  this.$store.commit('updateCreativeTplType')
              }
          }
      }
  }
}
</script>
<style lang=less scoped>
    .guanggao{
        width:100%;
        height: 100%;
        padding: -10px -10px;
       h1{
           width: 100%;
           height: 50px;
           line-height: 50px;
           font-size: 28px;
           font-weight: normal;
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
       .middle{
            margin-top: 80px;
            h3{
                width:100%;
                height: 50px;
                line-height: 50px;
                font-size: 20px;
            }
            a{
                text-decoration: none;
            }
       }
       .bottom{
           margin-top: 50px;
           button{
               width: 150px;
               height: 50px;
               border: none;
               background: #ccc;
               color: #eee;
               border-radius: 10px;
           }
       }
    }
</style>

