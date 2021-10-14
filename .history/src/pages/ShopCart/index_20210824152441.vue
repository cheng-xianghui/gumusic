<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul
          class="cart-list"
          v-for="(cart,index) in shopCartList"
          :key="cart.id"
        >
          <li class="cart-list-con1">
            <input
              type="checkbox"
              name="chk_list"
              :checked="cart.isChecked"
              @click="updateOneChecked(cart)"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="cart.imgUrl" />
            <div class="item-msg">{{ cart.skuName }}</div>
            <!-- <div class="item-msg">标符合日无发热管意外</div> -->
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cart.skuPrice }}</span>
            <!-- <span class="price">时婚纱UI断路器合法戹</span> -->
          </li>
          <li class="cart-list-con5">
            <a
              href="javascript:void(0)"
              class="mins"
             @click="changeCartNum(cart,-1,true)"
              >-</a
            >
            <input
              autocomplete="off"
              type="text"
              :value="cart.skuNum"
              minnum="1"
              class="itxt"
             @click="changeCartNum(cart,($event.target.value*1),false)"
            />
            <a
              href="javascript:void(0)"
              class="plus"
             @click="changeCartNum(cart,-1,true)"
              >+</a
            >
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cart.skuPrice * cart.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="isCheckedAll" />
        <span >全选</span>
      </div>
      <div class="option">
        <a href="javascript:;">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">
          已选择 <span>{{checkNum}}</span
          >件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalPrice}}</i>
        </div>
        <div class="sumbtn">
          <!-- <a class="sum-btn" href="###" target="_blank">结算</a> -->
          <router-link to="/trade" class="sum-btn">结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "ShopCart",
  mounted() {
    this.getshopCartInfo();
    console.log(this.getshopCartInfo());
    console.log(this.shopCartList);
  },
  methods: {
    getshopCartInfo() {
      this.$store.dispatch("getShopCartList");
      //这边不需要根据请求的成功或者失败有后续的操作，所以我们没必要去拿结果
      //只需要发请求，让数据存储在vuex里面
    },
    //修改购物车商品数量
  async  changeCartNum(cart,disNum,flag){
          let originNum= cart.skuNum
          if(flag){
            //  当点击的是+ - 时
            if(originNum+disNum<1){
              disNum=1-originNum
            }
          }else{
              //  直接修改数字时
              if(disNum<1){//disNum为修改的最终值
                disNum=1-originNum //此时disNum代表变化的量
                
              }else{
                disNum=disNum-originNum //等号左边disNum为变化的量，等号右边disNum最终值
              }
          }
          try {
             // 发请求修改后台数据
        await  this.$store.dispatch('getAddshop',{skuId:cart.skuId,skuNum:disNum})
        
                alert('修改成功')
          } catch (error) {
            alert(error.message)
          }
         


          this.getshopCartInfo();
    },

    //修改购物车选中状态，单个修改
 asyn   updateOneChecked(cart){
try
   await  this.$store.dispatch('getUpdatechecked',{skuId:cart.skuId,isChecked:cart.isChecked? 0:1})
   }
    //删除单个的购物车数据
   
    //删除多个购物车数据
    
  },
  computed:{
    ...mapState({
      shopCartList:state=>state.shopcart.shopCartList
    }),
    // 统计已选件数   reduce:统计函数
    checkNum(){
      return this.shopCartList.reduce((prv,item)=>{
          if(item.isChecked){
            prv += item.skuNum
          }
          return prv
      },0)
    },
    // 已选商品的总价（只读，只用get方法）
    totalPrice(){
      return this.shopCartList.reduce((prv,item)=>{
           if(item.isChecked){
             prv +=(item.skuPrice*item.skuNum)
           }
           return prv
      },0)
    },
    // 计算全选按钮  （可以读也可以写，要用计算属性的完整写法）

    /**
     * 复选框中,单个v-module收集的是：checked的值；当是一组多个复选框时收集的是value中的值收集到数组中，value的只要自己书写
     */
     isCheckedAll:{
       get(){
            // 读取 返回的是布尔值，返回true作用于checked属性，使复选框呈现选中状态
             return this.shopCartList.every(item=>item.isChecked)
       },
       set(val){
        //  v-modle 收集的checked的值返回过来，此处可以修改

       }
     }

  }
  
 
};
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con4 {
          width: 10%;
        }
        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>