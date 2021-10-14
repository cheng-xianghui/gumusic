<template>
  <a href="javascript:" :title="title">
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>
export default {
  props: ['title'],

  beforeCreate () {
    // 使用他们shihu
    console.log('---', this.$attrs, this.$listeners)
  }
}
</script>

<style>

</style>