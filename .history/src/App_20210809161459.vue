<template>
  <div>
<!-- 非路由组件使用 -->
<Header></Header>
<router-view></router-view>
<Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
  export default {
    // 非路由组件注册
    // https://github.com/ly03171629/0922gulishop-client.git
    components:{
      Footer,
      Header
    }
  }
</script>

<style lang="scss" scoped>

</style>