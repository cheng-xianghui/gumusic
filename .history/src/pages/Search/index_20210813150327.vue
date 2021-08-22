<template>
    <div>
<!-- search  <br>
header页面传递过来的params和query，给到router路由组件，路由中的search通过/keyword?为占位params，search页面通过$route来获取数据 -->
<!-- params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{keyword1}} -->


 <!--bread-->
     <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x">手机</li>
                        <li class="with-x">iphone<i>×</i></li>
                        <li class="with-x">华为<i>×</i></li>
                        <li class="with-x">OPPO<i>×</i></li>
                    </ul>
                </div>
<TypeNav></TypeNav>
<SearchSelector></SearchSelector>
    </div>
</template>

<script>
import SearchSelector from './SearchSelector'
    export default {
        name:'',
        // 接受路由传过来的keyword和keyword1
        props:['keyword','keyword1'],
        components:{
            SearchSelector
        }
    }
</script>

<style scoped>

</style>