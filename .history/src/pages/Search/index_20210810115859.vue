<template>
    <div>
<!-- search  <br>
<!-- header页面传递过来的params和query，给到router路由组件，路由中的search通过/keyword?为占位params，search页面通过$route来获取数据 -->
<!-- params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{keyword1}} -->

<TypeNav></TypeNav>
    </div>
</template>

<script>
    export default {
        name:'',
        // 接受路由传过来的keyword和keyword1
        props:['keyword','keyword1']
    }
</script>

<style scoped>

</style>