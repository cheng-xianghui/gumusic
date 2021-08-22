<template>
    <div class="fr page">
                        <div class="sui-pagination clearfix">
                            <ul>
                                <li class="prev disabled" :disabled="currentPageNo===1">
                                    <a href="#" >«上一页</a>
                                </li>
                                <li class="active" v-if="satrtEnd.start > 1">
                                    <a href="#">1</a>
                                </li>
                                <li v-if="startEnd.start > 2">
                                    <a href="#">...</a>
                                </li>
                                <li >
                                    <a href="#">2</a>
                                </li>

                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li class="dotted" v-if="startEnd.end < totalPageNo-1"><span>...</span></li>
                                <li v-if="startEnd.end">
                                    <a href="#">{{totalPageNo}}</a>
                                </li>
                                <li class="next" v-if="currentPageNo===totalPageNo">
                                    <a href="#">下一页»</a>
                                </li>
                            </ul>
                            <div v-><span>共{{total}}页&nbsp;</span></div>
                        </div>
                    </div>
</template>

<script>
    export default {
    props: {
    currentPageNo: Number,
    total: {
      type: Number,
      default: 0, 
      //必须给一个默认值，否则会报一个错误，说total是undefined
      //searchInfo是根据请求回来的数据，请求回来的数据是需要时间的
      //当searchInfo没回来的时候就是空对象，因此传递过来就是undefiend
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    continueNo: {
      type: Number,
      required: true,
    },
  },

  computed:{
    //   计算总页数
    totalPageNo(){
        let {total,pageSize}=this
        return Math.ceil(total/pageSize)
    },
    // 计算连续页的起始位置和结束位置
    startEnd(){
        let {continueNo,currentPageNo,totalPageNo} =this;
        let start=0;
        let end=0;
        if(continueNo>=totalPageNo){
            // 假设传递的起始页数比我最大的页码还要大，代表我根本没有那么多起始页数
            start=1;
            end=totalPageNo
        }else{
            // 正常情况
            start =currentPageNo-Math.floor(continueNo/2);
            end = currentPageNo+Math.floor(currentPageNo/2);
            // 非正常情况
            if(start<0){
                // 左侧
                start=1,
                end=continueNo
            }
            if(end>totalPageNo){
                end=totalPageNo
                start=totalPageNo-continueNo+1

            }
        }
        return {start,end}
    }

  }
    }
</script>

<style lang="less" scoped>
 .page{
                    width: 733px;
                    height: 66px;
                    overflow: hidden;
                    float:right;
                    .sui-pagination{
                        margin: 18px 0;
                        ul{
                            margin-left: 0;
                            margin-bottom: 0;
                            vertical-align: middle;
                            width: 490px;
                            float: left;
                            li{
                                line-height: 18px;
                                display: inline-block;
                                a{
                                    position: relative;
                                    float: left;
                                    line-height: 18px;
                                    text-decoration: none;
                                    background-color: #fff;
                                    border: 1px solid #e0e9ee;
                                    margin-left: -1px;
                                    font-size: 14px;
                                    padding: 9px 18px;
                                    color: #333;
                                }
                                &.active{
                                    a{
                                        background-color: #fff;
                                        color: #e1251b;
                                        border-color: #fff;
                                        cursor: default;
                                    }
                                }
                                &.prev{
                                    a{
                                        background-color: #fafafa;
                                    }
                                }
                                &.disabled{
                                    a{
                                        color: #999;
                                        cursor: default;
                                    }
                                }
                                &.dotted{
                                    span{
                                        margin-left: -1px;
                                        position: relative;
                                        float: left;
                                        line-height: 18px;
                                        text-decoration: none;
                                        background-color: #fff;
                                        font-size: 14px;
                                        border: 0;
                                        padding: 9px 18px;
                                        color: #333;
                                    }
                                }
                                &.next{
                                    a{
                                        background-color: #fafafa;
                                    }
                                }
                            }
                        }
                        div{
                            color: #333;
                            font-size: 14px;
                            float: right;
                            width: 241px;
                        }
                    }
                }
</style>