<template>
    <!--selector-->
                <div class="clearfix selector">
                    <div class="type-wrap logo">
                        <div class="fl key brand">品牌</div>
                        <div class="value logos">
                            <ul class="logo-list">
                                <li>索尼（SONY）</li>
                                <li>TCL</li>
                                <li>长虹（CHANGHONG）</li>
                                <li>飞利浦（PHILIPS）</li>
                                <li>风行电视</li>
                                <li><img src="./images/phone06.png" /></li>
                                <li><img src="./images/phone07.png" /></li>
                                <li><img src="./images/phone08.png" /></li>
                                <li><img src="./images/phone09.png" /></li>
                                <li><img src="./images/phone10.png" /></li>
                                <li><img src="./images/phone11.png" /></li>
                                <li><img src="./images/phone12.png" /></li>
                                <li><img src="./images/phone12.png" /></li>
                                <li><img src="./images/phone14.png" /></li>
                                <li><img src="./images/phone01.png" /></li>
                                <li><img src="./images/phone06.png" /></li>
                                <li><img src="./images/phone07.png" /></li>
                                <li><img src="./images/phone02.png" /></li>
                            </ul>
                        </div>
                        <div class="ext">
                            <a href="javascript:void(0);" class="sui-btn">多选</a>
                            <a href="javascript:void(0);">更多</a>
                        </div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">网络制式</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>GSM（移动/联通2G）</a>
                                </li>
                                <li>
                                    <a>电信2G</a>
                                </li>
                                <li>
                                    <a>电信3G</a>
                                </li>
                                <li>
                                    <a>移动3G</a>
                                </li>
                                <li>
                                    <a>联通3G</a>
                                </li>
                                <li>
                                    <a>联通4G</a>
                                </li>
                                <li>
                                    <a>电信3G</a>
                                </li>
                                <li>
                                    <a>移动3G</a>
                                </li>
                                <li>
                                    <a>联通3G</a>
                                </li>
                                <li>
                                    <a>联通4G</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">显示屏尺寸</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>4.0-4.9英寸</a>
                                </li>
                                <li>
                                    <a>4.0-4.9英寸</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">摄像头像素</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>1200万以上</a>
                                </li>
                                <li>
                                    <a>800-1199万</a>
                                </li>
                                <li>
                                    <a>1200-1599万</a>
                                </li>
                                <li>
                                    <a>1600万以上</a>
                                </li>
                                <li>
                                    <a>无摄像头</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">价格</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>0-500元</a>
                                </li>
                                <li>
                                    <a>500-1000元</a>
                                </li>
                                <li>
                                    <a>1000-1500元</a>
                                </li>
                                <li>
                                    <a>1500-2000元</a>
                                </li>
                                <li>
                                    <a>2000-3000元 </a>
                                </li>
                                <li>
                                    <a>3000元以上</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext">
                        </div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">更多筛选项</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>特点</a>
                                </li>
                                <li>
                                    <a>系统</a>
                                </li>
                                <li>
                                    <a>手机内存 </a>
                                </li>
                                <li>
                                    <a>单卡双卡</a>
                                </li>
                                <li>
                                    <a>其他</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext">
                        </div>
                    </div>
                </div>
</template>

<script>
    export default {
        
    }
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
            .selector{
                border: 1px solid #ddd;
                margin-bottom: 5px;
                overflow: hidden;
                .logo{
                    border-top: 0;
                    margin: 0;
                    position: relative;
                    overflow: hidden;
                    .key{
                        padding-bottom: 87px!important;
                    }
                }
                .type-wrap{
                    margin: 0;
                    position: relative;
                    border-top: 1px solid #ddd;
                    overflow:hidden;
                    .key{
                        width: 100px;
                        background: #f1f1f1;
                        line-height: 26px;
                        text-align: right;
                        padding: 10px 10px 0 15px;
                        float:left;
                    }
                    .value{
                        overflow: hidden;
                        padding: 10px 0 0 15px;
                        color: #333;
                        margin-left: 120px;
                        padding-right: 90px;
                        .logo-list{
                            li{
                                float: left;
                                border: 1px solid #e4e4e4;
                                margin: -1px -1px 0 0;
                                width: 105px;
                                height: 52px;
                                text-align: center;
                                line-height: 52px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                font-weight: 700;
                                color: #e1251b;
                                font-style: italic;
                                font-size: 14px;
                                img{
                                    max-width: 100%;
                                    vertical-align: middle;
                                }
                            }
                        }
                        .type-list{
                            li{
                                float: left;
                                display: block;
                                margin-right: 30px;
                                line-height: 26px;
                                a{
                                    text-decoration: none;
                                    color: #666;
                                }
                            }
                        }
                    }
                    .ext{
                        position: absolute;
                        top: 10px;
                        right: 10px;
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
                            padding: 0 10px;
                            background: #fff;
                            border: 1px solid #d5d5d5;
                        }
                        a{
                            color: #666;
                        }
                    }
                }
            }
           
        }
    }
</style>