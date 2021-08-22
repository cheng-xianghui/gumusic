<template>
    <div>
search  <br>
params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{ke}}
    </div>
</template>

<script>
    export default {
        name:'',
        props:['keyword','keyword1']
    }
</script>

<style scoped>

</style>