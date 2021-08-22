<template>
<div>
   <TypeNav></TypeNav>
   <ListContainer></ListContainer>
   <Reacommend></Reacommend>
   <Rank></Rank>
   <Link></Link>
   </div>
</template>

<script>
import ListContainer from './ListContainer'
import Reacommend from './Reacommed'
import Rank from './Rank'
import Link from './Linke'
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