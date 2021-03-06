# gumusice

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
```
See [Configuration Reference](https://cli.vuejs.org/config/).
```

## day01
```
创建项目：vue create 项目名
运行项目：npm run serve

1.vue.config.js:配置关闭eslint检查
2.jsconfig.json:配置别名@提示
```
### 1.git
    (1)创建本地仓库
    (2)创建远程仓库
    (3)让本地仓库和远程仓库进行关联
    (4)本地代码改变推向远程
    (5)远程代码改变拉向本地

    前5步：说的是先有本地代码，再有远程代码的操作
    第6步：先有远程代码，再有本地代码，只需要在本地clone就ok

    git分支扩展：
      分支创建和合并：
          1.本地创建分支  git checkout -b dev
          2.本地推送新分支自动在远程仓库建立新的分支  git push origin dev
          3.合并分支之前如果是多人协作先拉取一下远程master，以防止被人已经做了修改
          4.本地切换到master然后再合并分支  git merge dev
          5.合并之后再次推送到远程master
    分支删除
          1.项目开发完成可以删除分值
          2.git push origin --delete dev 删除远程分支
          3.git branch -d dev 删除本地分支
          
### 2.代码运行步骤：控制台输入
```
 1.git init:建立本地仓库
 2.git remote add origin git@github.com:cheng-xianghui/gumusic.git 
 3.git add .
 4.git commit -m "first commit"
 5.生成ssh密钥,配置密钥
    ssh-keygen -t rsa -C "你GitHub邮箱"
 6.git push origin master

 如果远程仓库改变了想让本地仓库跟着改变执行：git pull origin master
 ```

  ### 3.路由组件和非路由组件的区别？
```
     使用都是三大步：定义 注册 使用
     1.定义都是一样去定义，只是定义的文件2夹不同
     2.注册的时候不同：非路由组件注册在使用他的组件中；路由组件在路由配置中注册
     3.使用的时候区别：非路由组件使用注册的组件标签；路由组件使用声明式导航（router-link，router-view）和编程式导航（push，replace）
     4.非路由组件和路由组件生命周期不同：
       路由组件在切换时，会销毁重建（keep-alive）
       非路由组件不会

```
### 4. Home Search Login Register 路由组件的使用
```
  1.定义：第一在pages中
  2.注册：
        路由组件的相关配置
             安装路由 npm i vue-router -S
             引入并声明使用路有插件
             向外暴露一个路由器的对象
             在main当中把路由器注册到Vue的配置对象
3.使用：
       注册路由组件（配置路由）
       使用router-link  和 router-view
        push和replace
 4.meta:
    路由对象中的元配置项，可以配置我们所需要的任何数据
5.声明式导航：router-link (使用过度的他会造成卡顿，因为组件标签太多，导致内存当中组件对象很多，效率不高)
  编程式导航：this.$router.push()/replace()
     push:有记录的跳转
     replace：没有记忆
     当想要从search页直接返回home页时，将跳转路径push改为replace
  注意：编程式导航比声明时导航，更加灵活（内部可以加入自己的逻辑），某些情况下效率会更好
  创建组件：等于创建组件实例  使用组件：相当于new一个新的组件实例对象

```
### 5. 路由传参的种类(params,query)
```
1.params参数：属于路径的一部分，路由当中匹配的时候，是要照顾到这个参数的
2.query参数：在路径的后面，以?分割，?后面的 a=b&c=d就是你的query参数；query参数不属于路径的一部分，路由匹配的时候不需要关心这个参数

注意：无论是params还是query参数，最终匹配完成都会解析到当前这个路由对象当中的params和query属性当中
显示路由组件的时候，会把这个路由对象传递给组件当中的this.$route,所以this.$route就可以获取到之前传递的参数
this.$route.params.xxx
this.$route.query.xxx

```
### 6.路由路径带参数的三种写法
```
1.字符串写法
this.$router.push('/search/'+this.keyword+'?keyword1='+this.keyword.roUpperCase())
2.模板字符串写法：
this.$router.push(`/search/${this.keyword}?keyword1=${this.keyword.roUpperCase()}`)
3.对象写法（重点）
 this.$router.push(
   {
     name:'search',
     params:{keyword:this.keyword},query:{keyword1:this.keyword.toUpperCase()
     }
     })

```
## day02
### 1.什么是http协议？
```
     http是超文本传输协议，主要用于浏览器和服务器之间交互数据，交互有两个部分:
      请求：get post put delete
      响应：1xx信息 ，2xx成功，3xx重定向（跳转不传值），4xx客户端错误，5xx服务端错误
```
### 2.跨域：
```
   1.什么是跨域？
     浏览器上的同源策略
         特点：
             1.跨域只存在于浏览器
             2.不再浏览器发送请求是不会存在跨域问题的
             3. http请求分为：
                 1.普通的：get post
                 2.axios(会出现跨域)：get post put delete 一般是异步发送的

  2.什么地方会出现跨域？
    浏览器给服务端发送axios请求会跨域，因为（同源策略）在存在于浏览器
    服务端给服务端发送axios请求不会跨域

  3.什么条件会跨域？
     同源（协议，ip，端口一致）不跨域
     不同源就跨域（三个中间有一个不一样就跨域）
  
  4.解决跨域：
     前端可以解决，后端解决。一般后端解决比前段容易

     配置代理服务器解决跨域问题：
       1.本身我们就跑在开发服务器webpack-dev-serve而这个服务器带有一个模块，这个模块可以支持我们使用代理
       2.原理：在浏览器发送请求时，把这个请求发送给服务器上的这个代理模块，这个样的话我们原来有浏览器直接发送请求到服务器就转换成服务器到服务器之间的请求

       3.你要让代理转发，那么要告诉代理你的这个请求什么时候转发，配置以固定什么时候开头的路径需要代理转发，代理看到这个路径是以他开头就会帮你转发

       4.代理转发的时候会把路径交给真正的请求服务器，作为请求路径，需要把固定的开头去除

       5.changeOrigin:true,//支持跨域，如果协议/主机也不相同，必须加上

       proxy:{
         "/api":{
           target:"http://localhost:4000",
           pathRewrite:{"^/api":""},//要看真正的后台接口路径当中有没有包含/api，有就不用
           changeOrigin:true
         }
       }

```
### 3.ajax请求的步骤？
```
  1.创建文件夹api，里面创建axios.js 和index.js
  2.axios.js里面写的是axios请求，创建新的axios对象 axios.create
  3.在vue.config.js里面配置代理
  4.index.js里面写请求接口函数
  5.store文件夹里面的home.js里面写三大项（state，mutations，actions）
  6.那个页面使用axios请求，就在页面的moutend里面发送dispatch调用actions，
  7.调用完接口，在computend里面...mapState数据

```
## day03
### 1.强制绑定类有三种写法：对象（常用）  数组    变量
```
  对象写法:  :class="{item_on:布尔值}"  为true类生效
```
### 2.函数的节流与防抖
```
正常：事件触发非常频繁，而且每次的触发，回调函数都要去执行（如果时间很短，而且回调函数内有计算，很可能出现卡顿
节流：在规定的时间范围内不会重复触发回调，只有在大于这个时间间隔才会触发回调，把频繁触发变成少量触发
防抖：前面的所有触发都被取消，最后一次执行在规定时间之后才会，连续快速的触发只会执行一次

用到的插件：loadsh  -> _.throttle(节流),_.debounce(防抖)
  trailing:true; 是否在时间间隔之后执行函数
  leading:false  是否在时间间隔之前执行函数

```
### 3.事件委派(托)：原理（冒泡）
```
1.什么情况下适用？
     (1)新增子标签也拥有以前的事件  （父元素拥有几个子标签，点击按钮添加新的标签）
     (2)子元素都绑定相同的事件    （父元素下的子标签都绑定相同事件）
2.事件发生在儿子身上，会自动冒泡到父元素上
3.事件委派处理：找公共的离自己最近的祖先元素，添加事件监听

```
### 4.添加过渡的步骤
```
1.哪个部分变化，用transition标签包裹，在标签上起名字<transition name=""><transition/>
2.在样式里，写变化，有六种变化，可以查官网，在vue中 
```
### 5.解决axios请求相同数据，多次发请求的情况？
```
typeNav被多个页面公用，每次切换页面时，这个组件都会重新创建，mounted就会重新发请求，执行多次axios请求，太繁琐，可以将dispath请求放在App根组件中（相当于存放在vux中），这样就只执行一次
```
### 6.合并query参数和params参数
```
在this.$router.push(location)，调用之前先判断有没有query参数或params参数，将其保存
                if(this.$route.params){
                    location.params=this.$route.params
                }
```
## day04
### 1.mock数据
```
 mock.js文档：查看，可以生成随机数据

1.使用mock数据来模拟数据接口（其实和axios差不多，mock其实就是给我们的json数据指定一个url路径去做请求）

2.步骤：
    （1）准备json数据
     (2)安装mockjs
    （3）使用mock.js来模拟数据提供数据接口地址
     (4) 在main中引入mockServer.js
    （5）在ajax中修改Ajax中的baseUrl为/mock 变为一个新的文件mockAjax

3.mock会拦截我们的请求，不会真正去发送请求。(发送请求是往本地发的，没有往后端发，请求的数据也是本地的)


```
### 2.实现轮播的步骤
```
swiper官网
1.安装
2.引入js，css
3.书写swiper的结构
4.实例化swiper实例对象

注意：swiper必须在页面的数据格式显示完成后创建才会生效

在moutend中创建new Swiper（".swiper-container"）可能不生效：因为数据还没有请求回来

new swiper(ref="bannerSwiper")，第一个参数可以是dom元素，可以是class标签，可能会出现bug，单页面应用会对其他组件的swiper产生影响
也可以使用this.$refs.bannerSwiper,更好
解决办法：1.可以用setTimeOut，但不太好
         2.可以用watch监听，watch监听数据的获取，再用nextTick来监听页面是否渲染更新，然后再swiper  nextTick(()=>{})
```
### 3.代码复用
```
1.同一个组件，好几个地方代码一样     封装函数
2.不同组件，好几个地方js代码是一样   封装模块(vue可以封装混入混出)
3.不同组件，好几个地方html，js，css一样   封装组件


查看数据如何查看？

看组件有没有数据 ->看vuex有没有数据 ->看netWork请求状态
```
### 4.全局事件总线
```
 三步走：
   1.是什么？ 
    全局事件总线，是组件间通信的方法 ;
    全局事件总线，是一个对象，对象有两个条件：1.所有的事件都能看到他  2.可以使用$on,$emite
   2.为什么？ 
   全局事件总线可以实现兄弟间通信，符合任何关系组件间通信
   3.怎么做？
       （1）安装总线，在main.js中
       （2）$emit()发信息，$on()接受信息


```
### 5.组件通信的10种方式
```
1.props
   通常用于父子之间通信
   父组件可以传递给子组件  非函数数据和函数数据
   父组件给子组件传递非函数数据，是真的给子组件传递数据
   父组件给组件传递函数数据，是父组件要获取子组件传递过来的数据

   特殊：路由配置props（三种）路由组件之间没有标签，但是可以把参数通过路由映射为属性
        （1）布尔值：true  ：把路径params参数映射为组件内属性
        （2）对象：{'name':'赵丽颖'} 只能映射传递额外的静态数据，一般不用
        （3）函数：props：（route）=>{}  自己动手映射params参数和query参数，成为要显示的组件内属性


2.自定义事件
   适用：子向父传递数据
    *原生dom自定义事件
       事件类型     回调函数    谁调用    默认传递的参数是什么

       1.事件类型   固定的几种 onclick onmouseover onmouseenter ...
       2.回调函数   自定义的回调函数
       3.触发（分发，触发事件）了谁调用    系统调用浏览器去调用
       4.传递的参数是    event事件对象 （浏览器掉用回调函数，会将回调函数事件相关的内容封装成event事件对象）
       box.onclick=function(event){}
    *自定义事件
      事件类型     回调函数    谁调用    默认传递的参数是什么

      1.事件类型   无数个，自己定义的
      2.回调函数    自己定义
      3.谁调用      自己调用 ，自己使用$emit()触发调用
      4.参数        默认传递的是自己传递的参数（有就有，没有就是undefined）
        this.$emit('haha',10)

    延伸：在html标签上定义的事件为dom事件
          在组件标签上定义的事件为自定义事件，无论是否和dom事件名字一样


3.全局事件总线
    适用于任何场合
    
    全局事件总线的角色标准：
      （1）所有的时间组件都可以看到
      （2）可以使用$on,$emit方法

    添加事件总线的方法：
      1.安装总线 根本就是在原型上绑定事件总线
      2.在接收事件总线的对象当中，获取总线给总线绑定自定义事件   this.$bus.$on
      3.在发送数据的时间总线的对象中，获取总线触发总线身上绑定的自定义事件  thi.$bus.$emit()


4.pubsub，订阅发布
   所有场合
   代码类似全局事件总线，但在vue中有全局事件总线，所有他很少用，pubsubjs，需要下载包，使用会增加体积
5.插槽
  作用域插槽：
    适用于：父子之间
    数据是在父组件当中的，是要给子组件展示的（v-for）
    展示的过程当中数据的结构，子组件说了不算，由父组件决定

    父组件需要把子组件需要展示的数据传递给子组件
    子组件在展示过程中，需要改变结构的数据传回给父组件
    父组件再把结构和数据一并传回给子组件

6.vuex
   所有场合
    看项目的大小决定要不要使用，项目比较小就可以不用，毕竟还要下包，会是打包体积变大，项目比较大，使用更方便，性价比更高
    5个核心概念

    * state：保存数据  
       补充：state是vuex存储数据的地方，但是这个state并不是永久存储
// 当我们刷新页面或者重新启动项目（可以认为刷新页面就是重启了一下项目）
// 那么vuex当中所有的数据，都要重新初始化，重新发请求去获取
// state里面的数据一开始就是有的，只不过是我们初始化的，不是请求回来的
// 但是state这个初始化的数据，也会影响组件（组件也是可以获取这个初始化数据）

// 就是因为vue和vuex没办法去永久存储数据，才有以下两个存储方案
// localStorage
// sessionStorage

     *mutations:直接修改数据
     *actions:与组件当中用户对接，一般是异步发请求，提交mutations
     *getters:用来简化数据的操作
     *modules:模块化

7.v-modle
 v-model能做什么?
          1. v-model不仅能实现原生标签的双向数据绑定, 也能实现组件标签的双向数据绑定
          2. 方便父组件与子组件相互通信(传值)
          3. elment-ui中的Input组件就封装了v-model
          4.本质
             :value="data"  父组件传递属性给子组件，子组件需要接受
             @input="data=$event"  父组件当中给子组件添加的自定义事件
             数据在父组件当中

             子组件当中必须这样写
             先接受props:['value']
           
             子组件表单类元素
               :value="value"
               @input="$emit('input',$event.target.value)"

            干了两件事：
               先显示数据
               再绑定修改数据的事件
               只不过在html和组件标签上绑定的@input事件不同  一个是原生的，一个是自定义的事件
             
        本质上还是自定义事件和props的组合
  
8. .sync属性修饰符
   实现父子组件双向数据同步问题
   和v-model实现效果几乎一样
   v-model一般用于带表单项的组件
   sync属性修饰符一般用于不带表单项的组件
   父组件给子组件书香传递数据后面添加.sync
   子组件修改数据需要分发事件@click=$emit("update:属性名",要更新的数据)
   本质上还是自定义事件和props组合

9.$attrs和$listeners
   $attrs:将父组件传递过来的属性（除了props接收的，style和class）封装在$attrs中
   $listeners:将父组件给子组件绑定的所有事件监听的对象
   使用他们是为了对一个组件进行二次封装

   本质就是父组件中给子组件传递的所有数形组成的对象及自定义事件方法组成的对象
   $attrs如果不声明props那么子组件当中是可以看到的，如果生命了那个属性，那么这个属性在$attrs中就看不到了
    
    可以通过v-bind 一次性把父组件传递过来的属性添加给子组件
    可以通过v-on  一次性把父组件传递过来的事件监听添加给子组件

10.$parent $children $ref
   $ref:常用，重要父子通信
   子组件上定义： ref="son"
   通过this.$ref.son.属性名  得到该属性，操作该属性

   $parent和$children 不常用会出现问题，不知道哪个父亲或儿子
   父组件当中可以通过$children找到所有的子组件去操作他的数据（当然可以找到孙子组件）
   子组件可以通过$parent 找到父组件（当然可以找到爷爷组件）操作父组件的数据

11.深入嵌套传值
   用provide和inject
   在父组件中 provide来提供变量，然后在子组件中用inject来注入变量，无论嵌套有多深

12.扩展:多个组件有部分相同的js代码
   html css js 相同   封装组件
   同一个组件js代码重复   封装函数
   不同组件js代码重复    封装混合
   实现组件之间jsdaima的复用  利用vue的mixin技术   参考官网
   比如多个组件的methods里面很多函数都是重复的，那么我们可以定义单独的模块把这些相同的代码定义到外部
   export const xxxMixin={
     methosd:{
       重复代码
     }
   }

   1.封装一个mixin.js函数，哪里使用引入 写上mixins:['minxin']
     

```

## day05
### 1. for循环，for...of,for...in,forEach区别？
```
1.for循环式：js中最简单的循环遍历方法，主要是针对数组进行遍历，效率不高，但可以使用continue和break
2.for...in： 循环主要是用来遍历对象的（遍历对象的可枚举属性），效率最低，原因是因为不单要遍历自身的属性，还要遍历原形的属性
3.feoEach：数组的一个方法，主要用来遍历数组，效率最高，但是不可以使用continue和break
4.for...of：是es6新加的方法遍历方法（前提是可迭代对象），效率没有forEach高（比其他的高），也可以使用continue和break，只针对迭代对象

Object.keys(obj).forEach():将对象转化为数组（数组是对象的key），遍历他，效率很高
```
### 2.分页器的使用步骤？
```
  1.实现静态组件
     注册组件并渲染组件
  2.实现动态组件
     （1）分页器组件用处
         第一点：展示当前页
         第二点：展示总条数
         第三点：展示总页码
         第四点：展示连续页
      （2）分页器需要什么数据，怎么来？
          展示当前页码，分页器本身没有，但父组件有，父组件需要给子组件传递
          展示总条数，分页器本身没有，但父组件有，父组件需要给子组件传递
          展示总页码，分页器本身没有，但父组件有，父组件需要给子组件传递总条数和每页的数量，子组件可以计算
          展示连续页数，分页器本身没有，但父组件有，父组件需要给子组件传递数字，一般是奇数
```

### 3.state
```
state是vue存储数据的地方，但state不是永久存储
```

### 4.放大镜效果
```
  event.clientX:相对视口左上角，视口是不会动的
  event.pageX:相对页面左上角（页面是可以拖动的）
  event.offsetX:相对元素本身

```
### 输入框事件
```
 输入框的blur事件，是失去焦点事件，只要添加他，失去焦点就会触发这个事件
 但是不好，因为他不会判断这次输入的和之前输入的数据是不是一样触发

 输入框的change事件内部包含了失去焦 择性触发change事件，触发这个事件的 不一样，才会触发。否则不触发
```
### 临时标识
```
  添加购物车需要临时标识（uuid）创建临时字符串，可以再github上看他的使用规则

  1.临时标识加在请求拦截器里面，请求头里面
  2.在用户store里面写方法，在utils里面是具体的方法
    
```
### 常见函数
```
  1.reduce:统计  从0开始
     reduce((pre,item)=>{

     },0)
  
  2.every

  3.map

  4.forEach

  5.find:找到符合条件的某一项
    findIndex：找到符合条件的下标

```
### promise
```
  MDN web docs :网站
  promise基础用法： then()  catch()  链式时调用（中断）
  Promise.all()
      功能：批处理多个promise对象
      参数：promise对象的数组
      返回值：返回一个新的promise对象

      新的promise对象是成功还是失败，只有所有的promise对象成功才算成功
      新的promise对象成功的结果：是参数promise对象数组当中每个promise对象成功的结果组成的数组
      新的promise对象失败的结果：是参数promise对象数组当中第一个promise对象失败的原因

  Promise.resolve()
  Promise.race()
  promise.reject()
```

### 暴露方式，引入方式
```
//无论什么样的暴露方式，往外暴露的都是一个对象
//只不过，暴露的对象形成方式不一样

//默认暴露
// export default {a:100}
// 暴露的是一个对象，这个对象里面是以default为属性名，以default后面的东西为值的对象 *****
// {
//   default:{a:100}
// }

// 引入的时候，如果是默认暴露
// 通常我们是这样引入   import a from './xxx.js'  它其实是一个简写方式
// 全写应该是   import {default as a} from './xxx.js'
// 由于默认暴露引入的时候如果全写会很麻烦，因此才出现上面我们的简写


//分别暴露
// export const a = 100
// export const reqXX = () => {}
//最终暴露出文件的时候，会自动的把分别暴露的信息封装为一个对象 ****** 
// {
//   a:a,
//   reqXX:reqXX
// }

//引入的时候
// import {reqXX} from './xx.js'
// import {a} from './xx.js


//整体暴露
// const a = 100
// const obj = {a:100}

//最终暴露的就是你export 后面的对象  ********
// export {
//   a,
//   obj
// }

// 引入的时候
// import {a} from './xx.js'
// import {obj} from './xx.js'


//无论什么暴露方式，如果你想拿到暴露出文件的整个那个对象，就得这么干
// import * as xxx from './xx.js'   

```
### 图片懒加载，路由懒加载
```
  图片懒加载的特点：
     （1）还没有加载的到目标图片是，先展示loading图片
     （2）在<img>进入可视范围才加载请求目标图片
        npm install vue-lazyload -S
      引入并配置loading图片
       main.js里面：
         

```



              


















