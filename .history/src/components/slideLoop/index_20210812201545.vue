<template>
    <div>

    </div>
</template>

<script>
import 
    export default {
         watch:{
       floorList:{
           immediate:true,//监视没有变化时也执行一次
           handler(newVal,oldVal){
               this.$nextTick(()=>{
        new Swiper (this.$refs.FloorSwiper, {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
              })
               })
           }
       }
    }
    }
</script>

<style scoped>

</style>