

<template>
<!-- 默认插槽具名插槽 -->
  <div> 
<children>
  <template>
    <!-- 这里面写的就是父组件给子组件传递的html/css结构 -->
    <p>哈哈</p>
  </template>
  <template slot="xxx">
<a href="###">呵呵</a>
  </template>
</children>
<children>
  <template>
    <!-- 这里面写的就是父组件给子组件传递的html/css结构 -->
    <button>按钮</button>
  </template>
</children>





<!-- 作用域插槽 -->
    <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
    <List :data="todos">
      <!-- 
        slot-scope: 指定的就是包含子组件通过<slot>属性传递过的所有数据的对象 
            {row: todo对象, index: 下标}
      -->
      <template slot-scope="scope">
          <span v-if="scope.row.isComplete" style="color: green">{{scope.row.text}}</span>
          <span v-else>{{scope.row.text}}</span>
      </template>
    </List>

    <br>
    <br>
    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
    <List :data="todos">
      <template slot-scope="{row, index}">
          <span>{{index+1}}-</span>
          <span :style="{color: index%2==1 ? 'green' : 'blue'}">{{todo.text}}</span>
      </template>
    </List>
  </div>
</template>

<script type="text/ecmascript-6">
  import List from './List'
  import Children from './Children.vue'
  export default {
    data () {
      return {
        todos: [
          {id: 1, text: 'AAA', isComplete: false},
          {id: 2, text: 'BBB', isComplete: true},
          {id: 3, text: 'CCC', isComplete: false},
          {id: 4, text: 'DDD', isComplete: false},
        ]
      }
    },

    components: {
      List,
      Children
    }
  }
</script>
