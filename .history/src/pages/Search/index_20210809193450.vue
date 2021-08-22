<template>
    <div>
search  <br>
params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}
    </div>
</template>

<script>
    export default {
        name:'',
        props:['keyword','username']
    }
</script>

<style scoped>

</style>