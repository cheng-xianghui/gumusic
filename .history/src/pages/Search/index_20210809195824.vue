<template>
    <div>
search  <br>
<!-- header页面传递过来的params -->
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