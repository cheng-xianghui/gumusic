<template>
    <div>
<h2>知否知否应是绿肥红瘦</h2>
<!-- 插槽：给父组件到时候使用子组件留的坑，需要父组件传递东西来填 -->
<slot></slot>
<!-- 具名插槽 -->
<slot name="xxx">周翡</slot>
<!-- 当一个组件中插槽有多个时，默认插槽一般只能有一个，其余的都是具名插槽 -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>