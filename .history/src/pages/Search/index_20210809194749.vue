<template>
    <div>
search  <br>
params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{keyword1}}
    </div>
</template>

<script>
    export default {
        name:'',
        // 
        props:['keyword','keyword1']
    }
</script>

<style scoped>

</style>