<template>
    <div class="build">
        <h2>建立广告计划</h2>
        <div>
            <dl>
                <dt></dt>
                <dd>
                    <p>已有计划</p>
                    <p>选择已有计划,直接创建广告</p>
                </dd>
            </dl>
        </div>
        <div>
            <dl>
                <dt></dt>
                <dd>
                    <p>新建计划</p>
                    <p>新建推广目标,计划设置</p>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
  name:"wrapguang"
}
</script>
<style lang=less scoped>
    .build{
        h2{
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-weight: normal;
        }
        div{
            width: 200px;
            padding: 10px 10px;
            float: left;
            font-size:14px;
            border: 1px solid #ddd;
            margin-left: 10px;
           
        }
    }
</style>


