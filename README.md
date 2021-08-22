# gumusice
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
       路由组件在切换时，会销毁重建（kee-alive）
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
### 5.组件通信的6种方式
```
1.props
2.自定义事件
3.全局事件总线
4.pubsub，订阅发布
5.插槽
6.vuex
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
See [Configuration Reference](https://cli.vuejs.org/config/).
