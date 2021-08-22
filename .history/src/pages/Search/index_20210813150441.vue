<template>
    <div>
<!-- search  <br>
header页面传递过来的params和query，给到router路由组件，路由中的search通过/keyword?为占位params，search页面通过$route来获取数据 -->
<!-- params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{keyword1}} -->

<TypeNav></TypeNav>
 <!--bread-->
     <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x">手机</li>
                        <li class="with-x">iphone<i>×</i></li>
                        <li class="with-x">华为<i>×</i></li>
                        <li class="with-x">OPPO<i>×</i></li>
                    </ul>
     </div>

<SearchSelector></SearchSelector>


    </div>
</template>

<script>
import SearchSelector from './SearchSelector'
    export default {
        name:'',
        // 接受路由传过来的keyword和keyword1
        props:['keyword','keyword1'],
        components:{
            SearchSelector
        }
    }
</script>

<style lang="less" scoped>
 .bread{
                margin-bottom: 5px;
                overflow: hidden;
                .sui-breadcrumb{
                    padding: 3px 15px;
                    margin: 0;
                    font-weight: 400;
                    border-radius: 3px;
                    float:left;
                    li{
                        display: inline-block;
                        line-height: 18px;
                        a{
                            color: #666;
                            text-decoration: none;
                            &:hover{
                                color: #4cb9fc;
                            }
                        }
                    }
                }
                .sui-tag{
                    margin-top: -5px;
                    list-style: none;
                    font-size: 0;
                    line-height: 0;
                    padding: 5px 0 0;
                    margin-bottom: 18px;
                    float: left;
                    .with-x{
                        font-size: 12px;
                        margin: 0 5px 5px 0;
                        display: inline-block;
                        overflow: hidden;
                        color: #000;
                        background: #f7f7f7;
                        padding: 0 7px;
                        height: 20px;
                        line-height: 20px;
                        border: 1px solid #dedede;
                        white-space: nowrap;
                        transition:color 400ms;
                        cursor: pointer;
                        i{
                            margin-left: 10px;
                            cursor: pointer;
                            font: 400 14px tahoma;
                            display: inline-block;
                            height: 100%;
                            vertical-align: middle;
                        }
                        &:hover{
                            color: #28a3ef;
                        }
                    }
                }
            }
</style>