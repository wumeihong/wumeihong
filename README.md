# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### 1该项目主要是vue结合element-ui做的一个项目。
    脚手架使用的是vue官网搭建的脚手架,之所以选择Vue模板,是因为vue使用模板系统而不是JSX,使其对现有的应用升级更加容易。这是因为模板使用的就是普通的HTML,通过vue来整合现有的系统是比较容易的,不需要整体重构,并且Vue是由一位开发者进行维护的,而React是由Facebook这类大公司维护的。
    使用的是es6的语法,之所以不使用es5,是因为es5会出现没有块级作用域,全局变量会被污染,累的写法比较怪异,没有模块管理,异步调用写法容易产生“回调地域”等一系列诡异的现象!现在有很多的转换器,比如babel就可以将es6的语法转换成es5的,es6的一些新的特性,可以大大的提高项目的健壮性,同时让代码更易读,同时也可以避免很多es5之前的很多诡异的东西
    在写样式的时候,使用的是less:
    (1).less结构清晰,便于扩展,对于模块的应用特别是单页app,经常需要用selector来划分不同的模块的css的scope
    (2).可以方便地屏蔽浏览器私有语法差异,封装对浏览器语法差异的重复处理,减少无意义的机械劳动
    (3).可以轻松实现多重继承
    (4).完全兼容css代码,可以方便地应用到老项目中,less只是在css语法上做了扩展,所以老的css代码也可以与less代码一同编译

### 2该项目的路由搭建,是通过在main.js挂载router!并且在router文件夹得index.js中vue.use(router).
    然后在index.js引用每个组件!在写文件路由的时候,用@代表src,并且在这里还设置了一个权限,我们通过判断有没有token字段,在这里使用vuex管理数据.如果没有的话,直接跳到登录页,登录成功之后,将token字段存储在本地存储在

### 3该项目主要分为 新建广告 首页概览  广告管理,数据管理,工具箱.
    广告管理下面又分成三个子路由,分别是广告计划,广告单元,广告创意
    在广告计划里面又有账号管理,客户管理,广告管理,
    广告管理分为计划层,单元层,计划列表
    在新建广告那里,有两个选择,分别是已有计划,和新建计划,如果选择的是已有计划,那么出现一个弹框,选择一个计划,并确定,然后下一步提交.如果选择的是新建计划,那么就要进行一个选择模板,选择的单板还是双板,选择不同的对应到不同的页面!在上传图片的时候,使用的是element-ui里面的upload组件!上传成功之后将图片发送到后台!同时在设置广告名称的是时候,对数字进行了一个限制,如果数字超出设定的长度,提醒用户超出长度!在添加创意那里使用了一个tab切换的效果,上传图片的哪里,封装了一个单独的upload的组件,然后在需要引用的组件的添加components属性,在页面上写组件的标签就行,当一切都写完之后,通过点击按钮触发一个方法,在这里利用axios方法讲页面的数据以及图片获取到,发送给后台!然后写到一个json文件

### 4数据的请求是封装的axios 首先创建一个instance的实例,interceptor拦截器必须在请求前设置才有效,直接为axios     全局对象创建interceptor,会导致全局的axios发出的请求或接受的响应都会被拦截到,所以要使用axios.create()    来创建单独的axios实例,即在本项目中创建的instance.请求接口是http://localhost:9000

### 5项目中的核心功能是数据的获取,图片的上传,选择不同的时间短获取不同的数据以及登录的权限,该项目的接口居多,在首页点击任意一个按钮的时候,他们都有对应的接口,然后再通过接口去获取不同的数据,并且在展示数据的时候选用的是echarts,之所以选择echarts,
    (1)它是国内出的,语言上就占有优势,同时比较实用我们的思维,尤其是在用它做地图的时候，对于城市的地理坐标,城市代码等都已经配置好了，需要的时候直接调用,很方便
    (2)免费，各类图，各种形式,K线图完全免费开源,减少制作成本,当客户选择的时候,我们可以有多种方案
    难点解决:在选择不同的日期的时候,在是用element-ui组件没有实现,之后是通过自己封装方法,解决了此问题
6在首页上面,主要功能有点击header上面的两个icon图标时候,会对应提醒一些消息,利用element-ui里面的Tooltip组     件!在选择日期的时候,利用的是element-ui里面的日期组件,在开始的时候,v-model绑定start,在结束的时候,        v-model绑定end 接着定义两个时间,分别为开始时间和结束时间,然后设置一个默认的，开始的时间比结束的时间早   六个月,然后将开始的时间全部转换为月份,以及结束的时间都转换成月份！然后再通过用月份/12得到年份,再通过    %12得到月份,并且同事要判断一下,月份为12月的时候,再通过后台接口请求数据,这些数据是自己mock出来的一个数据!在绘制图表的时候使用的是echarts

### 7数据管理使用的是store
    建立一个store文件夹,在里面创建四个文件,分别是action.js,mutations.js,state.js,store.js
    mutation改变state,mutation类似事件,每一个mutation都有一个类型和一个处理函数k
    并且处理函数也会自动获得一个默认参数state
    action去commit mutations,action和mutations的定义方法是类似的,我们要dispatch一个action,dispatch action之后就要commit mutation ,指定函数,函数活自动获得一个context.state
    dispatch action 去添加事件







For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
