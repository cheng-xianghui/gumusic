<template>
  <div>
<!-- 非路由组件使用 -->
<footer></footer>
router-view
<header></header>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
  export default {
    // 非路由组件注册
    components:{
      Footer,
      Header
    }
  }
</script>

<style lang="scss" scoped>

</style>