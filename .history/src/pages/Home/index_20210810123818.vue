<template>
<div>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   <Linke></Link>
   </div>
</template>

<script>
import ListContainer from './ListContainer'
import Reacommend from './Reacommed'
import Rank from './Rank'
import Linke from './Linke'
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