<template>
    <div class="unit">
       <h1>广告单元</h1>
       <div class="top">
           <h3>基本信息</h3>
           <label for="">单元名称:<input type="text" placeholder="请设置广告名称"/></label>
           <label for="">投放周期:<input type="text" placeholder="请选择订单日期"/> <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
            </el-date-picker></label>
       </div>
       <div class="middle">
           <h3>定向</h3>
           <div>
               性别:
               <el-radio-group v-model="radio3">
                <el-radio-button label="不限"></el-radio-button>
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
             </el-radio-group>
           </div>
           <div>
               年龄:
               <el-radio-group v-model="radio4">
                <el-radio-button label="不限"></el-radio-button>
                <el-radio-button label="指定年龄段"></el-radio-button>
             </el-radio-group>
           </div>
            <div>
               <el-radio-group v-model="radio5"  class="three">
                <el-radio-button label="<6"></el-radio-button>
                <el-radio-button label="6-12"></el-radio-button>
                 <el-radio-button label=">12"></el-radio-button>
             </el-radio-group>
           </div>
           <div>
               地域:
               <el-radio-group v-model="radio6">
                <el-radio-button label="不限"></el-radio-button>
                <el-radio-button label="指定城市"></el-radio-button>
             </el-radio-group>
                <el-transfer v-model="value1" :data="data"></el-transfer>
           </div>
             <div>
               年龄:
               <el-radio-group v-model="radio6">
                <el-radio-button label="不限"></el-radio-button>
                <el-radio-button label="指定年龄段"></el-radio-button>
             </el-radio-group>
                <el-transfer v-model="value1" :data="data"></el-transfer>
           </div>
            <div>
              时段:
               <el-radio-group v-model="radio6">
                <el-radio-button label="不限"></el-radio-button>
                <el-radio-button label="指定年龄段"></el-radio-button>
             </el-radio-group>
           </div>
           <div>广告位
               <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                </el-table>
           </div>
             
       </div>
    </div>
</template>
<script>
export default {
    name:"unitone",
    data() {
        const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
       const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        radio3:"不限",
        radio4:"不限",
        radio5:"6",
        radio6:"不限",
        data: generateData(),
        value1: [1, 4],
        tableData: Array(20).fill(item)
      };
    }
}
</script>
<style lang=less scoped>
    .unit{
        h1{
            width:100%;
            height: 50px;
            line-height: 50px;
            font-size: 28px;
            font-weight: normal;
        }
        .top{
            margin-top: 20px;
            h3{
                width: 100%;
                height: 30px;
                line-height: 30px;
            }
           label{
               display: block;
               color:#333;
               margin-top:10px;
               font-size: 14px;
               margin-top: 20px;
               position: relative;
               input{
                   margin-left: 5px;
                   border: 1px solid #ddd;
                   border-radius: 5px;
                   width:500px;
                   height: 30px;
                   padding-left: 10px;
               }
            }
            .el-date-editor{
                position: absolute;
                right: 400px;
                width: 50px;
                height: 31.99px;
                border: none;
                input{
                    border: none;
                    height: 31.99px;
                }

            }
        }
        .middle{
            width:100%;
            margin-top: 20px;
            h3{
                width: 100%;
                height: 30px;
                line-height: 30px;
            }
            .el-radio-group{
                margin-left: 10px;
            }
            div{
                margin-bottom: 15px;
            }
            .three{
                margin-left: 45px;
            }
        }
    }

</style>


