<template lang="">
  <div class='status-tree'>
      <div class="title">订单状态</div>
      <div class="tree-wrap">
          <div class="tree-item" v-for='(item,ind) in data' :key='ind'>
            <div class="timer">{{item.timer}}</div>
            <div class="content">
              <div class="order-title"><span>{{item.title}}</span></div>
              <p class='order-content' v-if='ind==0'>{{item.content}}</p>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
  .status-tree{
    .title{
      font-size: .28rem;
      color:#4953CC;
    }
    .tree-wrap{
      margin-top:.4rem ;
    }
    .tree-item{
      margin-top: .20rem;
      &:first-child{
        margin-top: 0;
        .content{
          .order-title{
            span{
              text-decoration: none;
            }
            &:after{
              content: '';
              width: .48rem;
              height: .48rem;
              background: url('./img/ok.png') no-repeat;
              background-size: contain;
            }
          }
          .order-content{
            margin-top: .16rem;
          }
        }
      }
      &:last-child{
        .content{
          &::before{
            height: 50%;
          }
          &:after{
            content: '';
            position: absolute;
            top:50%;
            left:.39rem;
            transform: translateY(-50%);
            width: .12rem;
            height: .12rem;
            border-radius: 100%;
            background: url('./img/round.png') no-repeat;
            background-size: contain;

          }
        }
      }
      .timer{
        padding-bottom: .09rem;
        font-size: .22rem;
        color:#2A3540;

      }
      .content{
        position: relative;
        padding-left:1.17rem;
        padding-top:.13rem;
        padding-bottom:.18rem;
        &:before{
          content: '';
          position: absolute;
          left:.45rem;
          top:0;
          width: 1px;
          height: 100%;
          background-color: #e8e8e8;
        }
        .order-title{
          display:flex;
          justify-content: space-between;
          align-items: center;

          span{
            text-decoration: line-through;
            font-size: .22rem;
            color:#2A3540;
          }
        }
        .order-content{
          margin-top: .28rem;
          font-size: .22rem;
          color:#2A3540;
          line-height: .3rem;
        }
      }
    }
  }
</style>
