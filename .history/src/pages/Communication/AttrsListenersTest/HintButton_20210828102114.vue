<template>
  <a href="javascript:" :title="title" style="margin-right:10px">

    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>
export default {
  props: ['title'],

  beforeCreate () {
    // 使用他们是为了对一个组件进行二次封装
    console.log('---', this.$attrs, this.$listeners)
  }
}
</script>

<style>

</style>