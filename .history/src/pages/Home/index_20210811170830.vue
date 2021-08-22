<template>
<div>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   <Linke></Linke>
   <Floor></Floor>
   <Floor></Floor>
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
    export default {
      components:{
      ListContainer,
      Reacommend,
      Rank,
      Linke,
      Floor,
      Brand
      },
      // qingqiu
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