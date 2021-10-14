<template>
     <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p v-if="$store">
                            <span>请</span>
                            <router-link to="/login">登录</router-link>
                            <router-link to="/register" class="register">免费注册</router-link>
                            <!-- <a href="###">登录</a> -->
                            <!-- <a href="###" class="register">免费注册</a> -->
                        </p>
                         <p>
                            <span>请</span>
                            <router-link to="/login">登录</router-link>
                            <router-link to="/register" class="register">免费注册</router-link>
                            <!-- <a href="###">登录</a> -->
                            <!-- <a href="###" class="register">免费注册</a> -->
                        </p>
                    </div>
                    <div class="typeList">
                        <a href="###">我的订单</a>
                        <a href="###">我的购物车</a>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <a class="logo" title="尚品汇" href="###" target="_blank">
                        <!-- <img src="./images/logo.png" alt=""> -->
                        <router-link to="/home">
                        <img src="./images/logo.png" alt="">
                        </router-link>
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword"/>
                        <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
    export default {
        data(){
            return {
                keyword:''
            }
        }
        ,
        mounted(){
            this.$bus.$on('clearKeyword',this.clearKeyword)
        },
        methods:{
            toSearch(){
                // 传递参数params和query，使用对象的方式，name可以params和query一起使用，但path只能和query使用

                // 跳转之前判断带没带query参数,合并query和params
                let location={
                     name:'search',
                  params:{keyword:this.keyword || undefined},
                }
                if(this.$route.query){
                    location.query=this.$route.query
                }
                if(this.$route.path !== '/home'){
                    this.$router.replace(location)
                }else{
                      this.$router.push(location)
                }
              
                               
            //   this.$router.push({
                  
                //   name:'search',
                //   params:{keyword:this.keyword || undefined}, //undefined解决传入的params是空串的情况下，防止出现bug
                //   query:{keyword1:this.keyword.toUpperCase()}
            //   },()=>{})
            // }.catch(()=>{}))
            // })
            /**
             * 面试5：编程式导航路由，由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicate的警告错误
             * 声明式导航：由跳转内部已处理
             * 
             * 原因：vue-router3.1.0以后，引入Promise的语法，如果没有通过参数指定成功或者失败回调函数就返回一个promise且内部会判断如果跳转的路径和参数都没变会抛出一个失败的promise
             * 
             * 解决：1.在跳转时指定成功或失败的回调函数，或者catch处理错误,但不能一劳永逸，以后使用push和replace还要写回调或.catch
             * 2.修改Vue原型上的push和replace方法（优秀）
             */
            },
            clearKeyword(){
                this.keyword=''
            }
        }
    }
</script>

<style lang="less" scoped>
 .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>