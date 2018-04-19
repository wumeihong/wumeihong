<template>
  <div>
      this is home page
      <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple">111</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple">222</div></el-col>
      </el-row>
      <div class="middle">
          <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple one">111</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple one">222</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple one">111</div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple one">222</div></el-col>
        </el-row>
      </div>
      <div class="bottom">
          <el-row :gutter="20">
            <el-col :span="8"><div class="grid-content bg-purple two">整体情况</div></el-col>
             <el-col :span=18 style='text-align:right'>
                        <div>
                        <!-- <span>近7天</span>
                        <span>近30天</span> -->
                        <el-date-picker
                        v-model="start"
                        format='yyyy/MM'
                        type="month">
                        </el-date-picker>

                        <el-date-picker
                        v-model="end"
                        disabledDate=""
                         format='yyyy/MM'
                        type="month">
                        </el-date-picker>
                        </div>
                    </el-col>
          </el-row>
         <el-row style="heigth:300px">
              <div ref="canvans" style="height:300px;width:1000px;"></div>
        </el-row>
      </div>
  </div>
</template>
<script>
import echarts,{init} from 'echarts'
import axios from 'axios'
console.log(axios)

export default {
   name:"home",
   data(){
     return{
        days:null,
        options:{
          xAxis:{
                type:'category',
                data:[]
          },
          yAxis:{
            type:"value"
          },
          series:[{
            data:[],
            type:"line"
          }]
        },
        myChart:null,
        start:"",
        end:""
     }
   },
   mounted(){
     
   },
   methods:{
        getAxisData(start,end){
          let res=[]//定义一个空数组
          // start = start.getFullYear()+"/"+start.getMonth()*1//在这里算出的是所有的月份,并且少一个月,要加上
          // end = end.getFullYear()+"/"+end.getMonth()*1
          // let startarr = start.split('/')
          // let endarr = end.split('/')
          // let startnum = startarr[0]*12+1*endarr[1]
          // let endnum = endarr[0]*12+1*endarr[1]
          let startnum=start.getFullYear()*12+start.getMonth()*1+1
          let endnum = end.getFullYear()*12+end.getMonth()*1+1

          for(var i=startnum+1;i<=endnum+1;i++){
            res.push(Math.floor(i/12)+"/"+i%12==0?12:i%12)//在这里是将自己选中的月份存放到数组里面
          }
          // for(var i=0;i<res.length;i++){
          //   if(res[i]%12==0){
          //     res[i]=Math.floor(res[i]/12)+"/"+12//在这里判断如果月份是12月的话,就写上12
          //   }else{
          //     res[i]=Math.floor(res[i]/12)+"/"+res[i]%12//在这里res[i]/12是代表得到年份
          //   }
          // }
           axios.post('/getAxisData',{len:res.length}).then(response=>{
             console.log(response)
            this.myChart.setOption({
              xAxis:{
                data:response.data
              },
              series:[{
                //根据名字对应到相应的系列
                type:"line",
                data:response.data
              }]
            })
        })
        },
        
         setdefinDate(){
          this.end=new Date()
          //console.log(this.end)
          this.start=new Date()
          this.start.setMonth(this.start.getMonth()-6)
          this.getAxisData(this.start,this.end)
        }
   },
   watch:{
     start:function(){
       this.getAxisData(this.start,this.end)
     }
   },
   created(){
     this.setdefinDate()
   },
   mounted(){
     this.myChart = echarts.init(this.$refs.canvans)
     this.myChart.setOption(this.options)
   }
}
</script>
<style scoped>
   .el-row {
    margin-top: 20px;
  }
  .el-col {
    border-radius: 4px;
   
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #fff;
     height:100px;
     line-height: 100px;
     text-align: center;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .one{
      height: 60px;
      line-height: 60px;
      text-align: center;
  }
  .two{
      height: 30px;
      line-height: 30px;
  }
  .bottom{
      background: #fff;
  }
  #myChart{
    width: 1000px;
    height: 300px;
  }
 
</style>


