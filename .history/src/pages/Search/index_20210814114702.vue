<template>
    <div>
<!-- search  <br>
header页面传递过来的params和query，给到router路由组件，路由中的search通过/keyword?为占位params，search页面通过$route来获取数据 -->
<!-- params:{{$route.params.keyword}}---{{keyword}}
<br>
query:{{$route.query.keyword1}}---{{keyword1}} -->
<TypeNav></TypeNav>
 <div class="main">
<div class="py-container">
 <!--bread-->
     <div class="bread">
                    <ul class="fl sui-breadcrumb">
                        <li>
                            <a href="#">全部结果</a>
                        </li>
                    </ul>
                    <ul class="fl sui-tag">
                        <li class="with-x" v-if="searchParams.categoryName">{{searchParams.categoryName}}<i @click="removeCategoryName">x</i></li>
                        <li class="with-x" v-if="searchParams.keyword">{{searchParams.keyword}}<i @click="removeCategorykeyword">x</i></li>

                        
                    </ul>
     </div>

<SearchSelector></SearchSelector>

<!--details-->
<div class="details clearfix">
                    <div class="sui-navbar">
                        <div class="navbar-inner filter">
                            <ul class="sui-nav">
                                <li class="active">
                                    <a href="#">综合</a>
                                </li>
                                <li>
                                    <a href="#">销量</a>
                                </li>
                                <li>
                                    <a href="#">新品</a>
                                </li>
                                <li>
                                    <a href="#">评价</a>
                                </li>
                                <li>
                                    <a href="#">价格⬆</a>
                                </li>
                                <li>
                                    <a href="#">价格⬇</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="goods-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-5" v-for="(goodsList,index) in goodsList" :key="index">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <a href="item.html"  target="_blank"><img src="./images/mobile01.png" /></a>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>{{goodsList.price}}</i>
                                            </strong>
                                    </div>
                                    <div class="attr">
                                        <a target="_blank" href="item.html"  title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{goodsList.title}}</a>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有<span>2000</span>人评价</i>
                                    </div>
                                    <div class="operate">
                                        <a href="success-cart.html" target="_blank" class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                        <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                    </div>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                    <div class="fr page">
                        <div class="sui-pagination clearfix">
                            <ul>
                                <li class="prev disabled">
                                    <a href="#">«上一页</a>
                                </li>
                                <li class="active">
                                    <a href="#">1</a>
                                </li>
                                <li>
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
                                <li class="dotted"><span>...</span></li>
                                <li class="next">
                                    <a href="#">下一页»</a>
                                </li>
                            </ul>
                            <div><span>共10页&nbsp;</span></div>
                        </div>
                    </div>
    </div>
<!--hotsale-->
<div class="clearfix hot-sale">
                    <h4 class="title">热卖商品</h4>
                    <div class="hot-list">
                        <ul class="yui3-g">
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_01.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>金属A面，360°翻转，APP下单省300！</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_04.png" />
                                    </div>
                                    <div class="attr">
                                        <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4068.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有20人评价</i>
                                    </div>
                                </div>
                            </li>
                            <li class="yui3-u-1-4">
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/like_02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                                <em>¥</em>
                                                <i>4088.00</i>
                                            </strong>
                                    </div>
                                    <div class="commit">
                                        <i class="command">已有700人评价</i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
</div>
    </div>
 </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchSelector from './SearchSelector'
    export default {
        name:'',
        data(){
            return {
                searchParams:{
                  //这个对象我们称作叫初始化所有的搜索参数,只不过一上来所有的搜索条件，我们都是空的
        // 今后只要是作为搜索条件的，所有相关数据，全部先在这个对象内部初始化好
        category1Id: "",
        category2Id: "",
        category3Id: "",
        categoryName: "",
        keyword: "",
        props: [],
        trademark: "",

        // 默认的搜索条件
        order: "2:desc", //排序规则，排序是后台排序的，我们搜索的时候得给后台一个默认的排序规则
        pageNo: 1, //搜素第几页的商品，分页也是后台做好的，我们也是得告诉后台我们要第几页数据
        pageSize: 3, //每页多少个商品，告诉后台，每页回来多少个商品 默认10个
                }
            }
        },
        // 接受路由传过来的keyword和keyword1
        props:['keyword','keyword1'],
        components:{
            SearchSelector
        },
        beforeMount(){
           this.handlerSearchParams()
        },
        mounted(){
           this.getSearchInfo()
        },
        methods:{
            getSearchInfo(){
                // dispatch只能带一个参数，所以括号里只能有一个逗号
                this.$store.dispatch('getSearchInfo',this.searchParams)
            },
            handlerSearchParams(){
                 let {category1Id,category2Id,category3Id,categoryName} = this.$route.query
            let {keyword} =this.$route.params
            let searchParams={
                ...searchParams,
              category1Id,
              category2Id,
              category3Id,
              categoryName,
              keyword  
            };
            this.searchParams=searchParams

            },
            // 删除关键字搜素条件
            removeCategoryName(){
                this.CategoryName=undefined,
                this.getSearchInfo()
            },
             removeKeyword(){
                this.keyword=undefined,
                this.getSearchInfo()
            }

        },
        computed:{
            ...mapGetters(['goodsList']),
              
        },
        // watch解决search页面改变关键字无法重复发送请求
        watch:{
            $route(newVal,oldVal){
               this.handlerSearchParams()
           this.getSearchInfo()
            }
        }

    }




//     // {
//     "category1Id":"12",
//     "category2Id":"23",
//     "category3Id":"62",
//     "keyword":"华为",
//     "order":"1:desc",
//     "pageNo":1,
//     "pageSize":10,
//     "props":["1:2700-3799:价格","2:6.65-6.67英寸:屏幕尺寸"],
//     "trademark":"4:华为"
// },
// {
//     "category1Id":"13",
//     "category2Id":"23",
//     "category3Id":"63",
//     "keyword":"vivo",
//     "order":"1:desc",
//     "pageNo":1,
//     "pageSize":10,
//     "props":["1:1711-3499:价格","2:6.65-6.67英寸:屏幕尺寸"],
//     "trademark":"4:vivo"
// },
// {
//     "category1Id":"14",
//     "category2Id":"24",
//     "category3Id":"64",
//     "keyword":"opop",
//     "order":"1:desc",
//     "pageNo":1,
//     "pageSize":10,
//     "props":["1:1789-2789:价格","2:6.65-6.67英寸:屏幕尺寸"],
//     "trademark":"4:opop"
// },
// {
//     "category1Id":"15",
//     "category2Id":"25",
//     "category3Id":"65",
//     "keyword":"魅族",
//     "order":"1:desc",
//     "pageNo":1,
//     "pageSize":10,
//     "props":["1:1707-2797:价格","2:6.65-6.67英寸:屏幕尺寸"],
//     "trademark":"4:魅族"
// },
// {
//     "category1Id":"16",
//     "category2Id":"26",
//     "category3Id":"66",
//     "keyword":"小米pro",
//     "order":"1:desc",
//     "pageNo":1,
//     "pageSize":10,
//     "props":["1:1760-2739:价格","2:6.65-6.67英寸:屏幕尺寸"],
//     "trademark":"4:小米pro"
// },
// {
//     "category1Id":"17",
//     "category2Id":"27",
//     "category3Id":"67",
//     "keyword":"小米3",
//     "order":"1:desc",
//     "pageNo":1,
//     "pageSize":10,
//     "props":["1:1700-2799:价格","2:6.65-6.67英寸:屏幕尺寸"],
//     "trademark":"4:小米3"
// }
</script>

<style lang="less" scoped>
.main{
        margin: 10px 0;
        .py-container{
            width: 1200px;
            margin: 0 auto;
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

  .details{
                margin-bottom: 5px;
                .sui-navbar{
                    overflow: visible;
                    margin-bottom: 0;
                    .filter{
                        min-height: 40px;
                        padding-right: 20px;
                        background: #fbfbfb;
                        border: 1px solid #e2e2e2;
                        padding-left: 0;
                        border-radius: 0;
                        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
                        .sui-nav{
                            position: relative;
                            left: 0;
                            display: block;
                            float: left;
                            margin: 0 10px 0 0;
                            li{
                                float: left;
                                line-height: 18px;
                                a{
                                    display: block;
                                    cursor: pointer;
                                    padding: 11px 15px;
                                    color: #777;
                                    text-decoration: none;
                                }
                                &.active{
                                    a{
                                        background: #e1251b;
                                        color: #fff;
                                    }
                                }
                            }
                        }
                    }
                }
                .goods-list{
                    margin: 20px 0;
                    ul{
                        display:flex;
                        flex-wrap:wrap;
                        li{
                            height: 100%;
                            width: 20%;
                            margin-top: 10px;
                            line-height: 28px;
                            .list-wrap{
                                .p-img{
                                    padding-left: 15px;
                                    width: 215px;
                                    height: 255px;
                                    a{
                                        color: #666;
                                        img{
                                            max-width: 100%;
                                            height: auto;
                                            vertical-align: middle;
                                        }
                                    }
                                }
                                .price{
                                    padding-left: 15px;
                                    font-size: 18px;
                                    color: #c81623;
                                    strong{
                                        font-weight: 700;
                                        i{
                                            margin-left: -5px;
                                        }
                                    }
                                }
                                .attr{
                                    padding-left: 15px;
                                    width: 85%;
                                    overflow: hidden;
                                    margin-bottom: 8px;
                                    min-height: 38px;
                                    cursor: pointer;
                                    line-height: 1.8;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    a{
                                        color: #333;
                                        text-decoration: none;
                                    }
                                }
                                .commit{
                                    padding-left: 15px;
                                    height: 22px;
                                    font-size: 13px;
                                    color: #a7a7a7;
                                    span{
                                        font-weight: 700;
                                        color: #646fb0;
                                    }
                                }
                                .operate{
                                    padding: 12px 15px;
                                    .sui-btn{
                                        display: inline-block;
                                        padding: 2px 14px;
                                        box-sizing: border-box;
                                        margin-bottom: 0;
                                        font-size: 12px;
                                        line-height: 18px;
                                        text-align: center;
                                        vertical-align: middle;
                                        cursor: pointer;
                                        border-radius: 0;
                                        background-color: transparent;
                                        margin-right: 15px;
                                    }
                                    .btn-bordered{
                                        min-width: 85px;
                                        background-color: transparent;
                                        border: 1px solid #8c8c8c;
                                        color: #8c8c8c;
                                        &:hover{
                                            border: 1px solid #666;
                                            color: #fff!important;
                                            background-color: #666;
                                            text-decoration: none;
                                        }
                                    }
                                    .btn-danger{
                                        border: 1px solid #e1251b;
                                        color: #e1251b;
                                        &:hover{
                                            border: 1px solid #e1251b;
                                            background-color: #e1251b;
                                            color:white!important;
                                            text-decoration: none;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
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
            }
  .hot-sale{
                margin-bottom: 5px;
                border: 1px solid #ddd;
                .title{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 21px;
                    border-bottom: 1px solid #ddd;
                    background: #f1f1f1;
                    color: #333;
                    margin: 0;
                    padding: 5px 0 5px 15px;
                }
                .hot-list{
                    padding: 15px;
                    ul{
                        display:flex;
                        li{
                            width:25%;
                            height: 100%;
                            .list-wrap{
                                .p-img,.price,.attr,.commit{
                                    padding-left: 15px;
                                }
                                .p-img{
                                    img{
                                        max-width: 100%;
                                        vertical-align: middle;
                                        border: 0;
                                    }
                                }
                                .attr{
                                    width: 85%;
                                    display: -webkit-box;
                                    -webkit-box-orient: vertical;
                                    -webkit-line-clamp: 2;
                                    overflow: hidden;
                                    margin-bottom: 8px;
                                    min-height: 38px;
                                    cursor: pointer;
                                    line-height: 1.8;
                                }
                                .price{
                                    font-size: 18px;
                                    color: #c81623;
                                    strong{
                                        font-weight: 700;
                                        i{
                                            margin-left: -5px;
                                        }
                                    }
                                }
                                .commit{
                                    height:22px;
                                    font-size: 13px;
                                    color: #a7a7a7;
                                }
                            }
                        }
                    }
                }
            }

            }
    }
</style>