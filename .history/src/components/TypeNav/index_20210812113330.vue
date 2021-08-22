<template>
     <div class="type-nav">
            <div class="container">
                <div @mouseleave="currentIndex=-1">
                <h2 class="all">全部商品分类</h2>
                <div class="sort">
                    <div class="all-sort-list2">
                        <div class="item" :class="{item_on:currentIndex===index}" v-for="(c1,index) in categoryList" :key="c1.categoryId" @mouseenter="moveInItem(index)">
                            <h3>
                                <!-- <a href="">{{c1.categoryName}}</a> -->
                                <!-- 导航到search页面 -->
                                <!-- 声明式导航，效率不高，太多对象在内存，使用编程式导航 -->
                                <!-- <router-link :to="{name:'search',query:{category1Id:c1.categoryId,category1Name:c1.categoryName}}">{{c1.categoryName}}</router-link> -->

                                <!-- 编程式导航 -->
                                <a href="###" @click="$router.push({})">{{c1.categoryName}}</a>

                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                                        <dt>
                                            <a href="###">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId"> 
                                                <a href="">{{c3.categoryName}}</a>
                                            </em>
                                           
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>  
                        
                    </div>
                </div>
                </div>
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                
            </div>
        </div>

</template>

<script>
import { mapState } from 'vuex'
import throttle from 'lodash/throttle'
    export default {
        data(){
            return {
                currentIndex:-1
            }
        },
        //组件在挂载完成的时候，就立马发请求获取数据，存储到vuex里面，而不是直接在vue组件里面
       mounted(){
        //    dispctch是奋发和触发的意思，和emit单词意思一样
        // 本质其实就是在调用action函数
          this.$store.dispatch('getCategoryList')
       } ,
       methods:{
        //    没节流
        //    moveInItem(index){
        //        this.currentIndex=index
        //    }

        // 节流后
        moveInItem:throttle(
            function(index){
                this.currentIndex=index;
                console.log(index);
            },20,
            {trailing:false}
        )
       },
    //    从vuex中把数据捞到vue组件当中使用
    // 以后只要从vuex拿数据（mutations和actions当中的东西），都在methods当中去拿，一般用得少
       computed:{
        //    函数里面可以是数组也可以是对象
        // 是数组必须满足：
        // 1.数据直接就是总的state中的数据，不能是模块里面的
        // 2.数组当中的名字必须和state当中的名字一致
        //    ...mapState(['categorylist'])//不能这默写，因为categorylist，不是state.categorylist,而是state.home.categorylist

        ...mapState({
            categoryList:state=>state.home.categoryList
        })

       }
    }
</script>

<style lang="less" scoped>
  .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                        &.item_on {
                            background:rgba(114, 113, 113, 0.3);
                            .item-list {
                                display: block;
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }
</style>