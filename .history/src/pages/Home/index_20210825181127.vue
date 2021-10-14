<template>
<div>
    <el-button ty></el-button>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   <Linke></Linke>
   <Floor v-for="(floor,index) in floorList" :key="floor.id" :floor="floor"></Floor>
   <Brand></Brand>
   </div>
</template>

<script>
import ListContainer from './ListContainer'
import Reacommend from './Reacommed'
import Rank from './Rank'
import Linke from './Linke'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'
    export default {
      components:{
      ListContainer,
      Reacommend,
      Rank,
      Linke,
      Floor,
      Brand
      },
      // 请求floor数据
     mounted(){
            this.$store.dispatch('getFloorList')
        },
        computed:{
            ...mapState({
                floorList:state=>state.home.floorList
            })  
    }
        }
</script>

<style scoped>

</style>