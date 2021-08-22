<template>
    <!-- 项目的最外层 -->
    <div class="outer">
        <!-- 窗口侧边栏 -->
        <div class="toolbar toolbar-wrap">
            <div class="content"></div>
            <div class="but list"></div>
            <div class="toolist">
                <div class="pull">
                    <i class="tab-ico vip"></i>
                    <em class="tab-text">商品会员</em>
                </div>
                <div class="pull">
                    <i class="tab-ico cart"></i>
                    <em class="tab-text">购物车</em>
                </div>
                <div class="pull">
                    <i class="tab-ico follow"></i>
                    <em class="tab-text">我的关注</em>
                </div>
                <div class="pull">
                    <i class="tab-ico history"></i>
                    <em class="tab-text">我的足迹</em>
                </div>
                <div class="pull">
                    <i class="tab-ico message"></i>
                    <em class="tab-text">我的消息</em>
                </div>
                <div class="pull">
                    <i class="tab-ico jimi"></i>
                    <em class="tab-text">咨询</em>
                </div>
            </div>
            <div class="back pull">
                <i class="tab-ico top"></i>
                <em class="tab-text">顶部</em>
            </div>
        </div>
        <!-- 头部 -->
        <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p>
                            <span>请</span>
                            <a href="###">登录</a>
                            <a href="###" class="register">免费注册</a>
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
                        <img src="./images/Logo.png" alt="">
                    </a>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" />
                        <button class="sui-btn btn-xlarge btn-danger" type="button">搜索</button>
                    </form>
                </div>
            </div>
        </header>

        <!-- 商品分类导航 -->
        <div class="typeNav">
            <div class="container">
                <h2 class="all">全部商品分类</h2>
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

        <!-- 主要内容区域 -->
        <section class="con">
            <!-- 导航路径区域 -->
            <div class="conPoin">
                <div class="conPoin">
                    <a href="###">手机、数码、通讯</a>
                    <a href="###">手机</a>
                    <a href="###">Apple苹果</a>
                    <a>iphone 6S系类</a>
                </div>
            </div>
            <!-- 主要内容区域 -->
            <div class="mainCon">
                <!-- 左侧放大镜区域 -->
                <div class="previewWrap">
                    <!--放大镜效果-->
                    <div class="preview">
                        <div class="jqzoom">
                            <img src="./images/s1.png" />
                        </div>
                    </div>
                    <!--下方的缩略图-->
                    <div class="specScroll">
                        <!--左按钮-->
                        <a class="prev">&lt;</a>
                        <!-- 中间可滑动区域 -->
                        <div class="items">
                            <div class="itemsCon">

                            </div>
                        </div>
                        <!--右按钮-->
                        <a class="next">&gt;</a>
                    </div>
                </div>
                <!-- 右侧选择区域布局 -->
                <div class="InfoWrap">
                    <div class="goodsDetail">

                    </div>

                    <div class="choose">
                        <div class="chooseArea">
                            <div class="choosed"></div>
                        </div>

                        <div class="cartWrap">
                            <div class="controls">
                                <input autocomplete="off" value="1" class="itxt" />
                                <a href="###" class="plus">+</a>
                                <a href="###" class="mins">-</a>
                            </div>
                            <div class="add">
                                <a href="###" target="_blank">加入购物车</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 内容详情页 -->
        <section class="productDetail">
            <aside class="aside">
                <div class="tabWraped">
                    <h4 class="active">相关分类</h4>
                    <h4>推荐品牌</h4>
                </div>
                <div class="tabContent">
                    <div class="tab-pane active">
                        <ul class="partList">
                            <li>手机</li>
                            <li>手机壳</li>
                            <li>内存卡</li>
                            <li>Iphone配件</li>
                            <li>贴膜</li>
                            <li>手机耳机</li>
                            <li>移动电源</li>
                            <li>平板电脑</li>
                        </ul>
                        <ul class="goodsList">
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part01.png" />
                                    </div>
                                    <div class="attr">Apple苹果iPhone 6s (A1699) </div>
                                    <div class="price">
                                        <em>¥</em>
                                        <i>6088.00</i>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part02.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="list-wrap">
                                    <div class="p-img">
                                        <img src="./images/part03.png" />
                                    </div>
                                    <div class="attr">
                                        <em>Apple苹果iPhone 6s (A1699)</em>
                                    </div>
                                    <div class="price">
                                        <strong>
                                            <em>¥</em>
                                            <i>6088.00</i>
                                        </strong>
                                    </div>
                                    <div class="operate">
                                        <a href="javascript:void(0);">加入购物车</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane">
                        <p>推荐品牌</p>
                    </div>
            </aside>
            <div class="detail">
                <div class="fitting">
                    <h4 class="kt">选择搭配</h4>
                    <div class="good-suits">
                        <div class="master">
                            <img src="./images/l-m01.png" />
                            <p>￥5299</p>
                            <i>+</i>
                        </div>
                        <ul class="suits">
                            <li class="suitsItem">
                                <img src="./images/dp01.png" />
                                <p>Feless费勒斯VR</p>
                                <label>
                                    <input type="checkbox" value="39">
                                    <span>39</span>
                                </label>
                            </li>
                            <li class="suitsItem">
                                <img src="./images/dp02.png" />
                                <p>Feless费勒斯VR</p>
                                <label>
                                    <input type="checkbox" value="50">
                                    <span>50</span>
                                </label>
                            </li>
                            <li class="suitsItem">
                                <img src="./images/dp03.png" />
                                <p>Feless费勒斯VR</p>
                                <label>
                                    <input type="checkbox" value="59">
                                    <span>59</span>
                                </label>
                            </li>
                            <li class="suitsItem">
                                <img src="./images/dp04.png" />
                                <p>Feless费勒斯VR</p>
                                <label>
                                    <input type="checkbox" value="99">
                                    <span>99</span>
                                </label>
                            </li>
                        </ul>
                        <div class="result">
                            <div class="num">已选购0件商品</div>
                            <div class="price-tit">
                                套餐价
                            </div>
                            <div class="price">￥5299</div>
                            <button class="addshopcar">加入购物车</button>
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <ul class="tab-wraped">
                        <li class="active">
                            <a href="###">
                                商品介绍
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                规格与包装
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                售后保障
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                商品评价
                            </a>
                        </li>
                        <li>
                            <a href="###">
                                手机社区
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="one" class="tab-pane active">
                            <ul class="goods-intro">
                                <li>分辨率：1920*1080(FHD)</li>
                                <li>后置摄像头：1200万像素</li>
                                <li>前置摄像头：500万像素</li>
                                <li>核 数：其他</li>
                                <li>频 率：以官网信息为准</li>
                                <li>品牌： Apple</li>
                                <li>商品名称：APPLEiPhone 6s Plus</li>
                                <li>商品编号：1861098</li>
                                <li>商品毛重：0.51kg</li>
                                <li>商品产地：中国大陆</li>
                                <li>热点：指纹识别，Apple Pay，金属机身，拍照神器</li>
                                <li>系统：苹果（IOS）</li>
                                <li>像素：1000-1600万</li>
                                <li>机身内存：64GB</li>
                            </ul>
                            <div class="intro-detail">
                                <img src="./images/intro01.png" />
                                <img src="./images/intro02.png" />
                                <img src="./images/intro03.png" />
                            </div>
                        </div>
                        <div id="two" class="tab-pane">
                            <p>规格与包装</p>
                        </div>
                        <div id="three" class="tab-pane">
                            <p>售后保障</p>
                        </div>
                        <div id="four" class="tab-pane">
                            <p>商品评价</p>
                        </div>
                        <div id="five" class="tab-pane">
                            <p>手机社区</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 猜你喜欢 -->
        <div class="like">
            <h4 class="kt">猜你喜欢</h4>
            <ul class="like-list">
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike01.png" />
                    </div>
                    <div class="attr">
                        <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>3699.00</i>
                    </div>
                    <div class="commit">已有6人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike02.png" />
                    </div>
                    <div class="attr">
                        Apple苹果iPhone 6s/6s Plus 16G 64G 128G
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4388.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike03.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike04.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike05.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
                <li class="likeItem">
                    <div class="p-img">
                        <img src="./images/itemlike06.png" />
                    </div>
                    <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                    </div>
                    <div class="price">
                        <em>¥</em>
                        <i>4088.00</i>
                    </div>
                    <div class="commit">已有700人评价
                    </div>
                </li>
            </ul>
        </div>

        <!-- 底部 -->
        <div class="footer">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h4>购物指南</h4>
                        <ul class="footerItemCon">
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>生活旅行/团购</li>
                            <li>常见问题</li>
                            <li>购物指南</li>
                        </ul>

                    </div>
                    <div class="footerItem">
                        <h4>配送方式</h4>
                        <ul class="footerItemCon">
                            <li>上门自提</li>
                            <li>211限时达</li>
                            <li>配送服务查询</li>
                            <li>配送费收取标准</li>
                            <li>海外配送</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>支付方式</h4>
                        <ul class="footerItemCon">
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>分期付款</li>
                            <li>邮局汇款</li>
                            <li>公司转账</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>售后服务</h4>
                        <ul class="footerItemCon">
                            <li>售后政策</li>
                            <li>价格保护</li>
                            <li>退款说明</li>
                            <li>返修/退换货</li>
                            <li>取消订单</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>特色服务</h4>
                        <ul class="footerItemCon">
                            <li>夺宝岛</li>
                            <li>DIY装机</li>
                            <li>延保服务</li>
                            <li>尚品汇E卡</li>
                            <li>尚品汇通信</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>帮助中心</h4>
                        <img src="./images/wx_cz.jpg">
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>联系我们
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>商家入驻
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们
                            <span class="space"></span>
                        </li>
                        <li>营销中心
                            <span class="space"></span>
                        </li>
                        <li>友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                    <p>京ICP备19006430号</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

</style>