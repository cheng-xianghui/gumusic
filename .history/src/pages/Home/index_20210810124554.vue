<template>
<div>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   <Linke></Linke>
   <Floor></Floor>
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
      Floor
      }  
    }
</script>

<style scoped>

</style>