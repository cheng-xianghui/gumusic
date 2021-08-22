<template>
    <div>
search  <br>
<!-- header也免除阿迪雇来的 -->
params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{keyword1}}
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