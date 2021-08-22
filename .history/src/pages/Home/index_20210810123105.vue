<template>
<div>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   </div>
</template>

<script>
import ListContainer from './ListContainer'
import Reacommend from './Reacommed'
import Rank from './Rank'
    export default {
      components:{
      ListContainer,
      Reacommend,
      Rank
      }  
    }
</script>

<style scoped>

</style>