<template lang="">
  <div class='item'>
    <div class="item-type">{{data.type}}</div>
    <div class="item-body">
      <div class="item-text">
        <h4>{{data.title}}</h4>
        <p>{{data.content}}</p>
      </div>
      <div class="item-pic">
        <img :src="data.image" alt="">
      </div>
    </div>
    <div class="item-buy">
      <span class="item-money">¥{{data.money}}</span>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
  .item{
    border-bottom: 1px solid #e8e8e8;
    padding:.47rem  .10rem .39rem;
    .item-type{
      font-size: .22rem;
      color:#2A3540;
      padding-left: .02rem;
    }
    .item-body{
      margin-top: .34rem;
      display: flex;
      justify-content: space-between;
      .item-text{
        width: 3.38rem;
        h4{
          font-size: .28rem;
          color:#2A3540;
        }
        p{
          font-size: .24rem;
          color:#2A3540;
          line-height: .4rem;
          margin-top: .12rem;
        }
      }
      .item-pic{
        width: 1.96rem;
        height: 1.08rem;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }

    .item-buy{
      margin-top: .4rem;
      display: flex;
      height: .66rem;
      justify-content: space-between;
      align-items: center;
      .item-money{
        font-size: .36rem;
        color:#2A3540;
      }
      button{
        width: 2rem;
        height: 100%;
        line-height: .66rem;
        border-radius: .33rem;
        background-color: #5A6DE6;
        font-size: .24rem;
        text-align: center;
        color:#fff;
      }
    }
  }
</style>
