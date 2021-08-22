<template>
<div>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   <Linke></Linke>
   </div>
</template>

<script>
import ListContainer from './ListContainer'
import Reacommend from './Reacommed'
import Rank from './Rank'
import Linke from './Linke'
import Floor from './Floor'
    export default {
      components:{
      ListContainer,
      Reacommend,
      Rank,
      Linke
      }  
    }
</script>

<style scoped>

</style>