<template>
  <div class='footer'>
      <router-link
        :class='item.type'
        tag='div'
        exact
        activeClass='active'
        v-for='(item,ind) in menuData'
        :to='item.path'
        :key='ind'>
        <i></i>
        <span>{{item.name}}</span>
      </router-link>

  </div>
</template>
<script>
export default {
  data () {
    return {
      menuData: [{
        name: '首页',
        path: '/',
        type: 'home'
      }, {
        name: '样例报告',
        path: '/report',
        type: 'report'
      }, {
        name: '购买',
        path: '/buy',
        type: 'buy'
      }, {
        name: '我的',
        path: '/my',
        type: 'my'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.footer{
  width: 100%;
  display: flex;
  flex-shrink:0;
  height: .98rem;
  border-top: .02rem solid #e8e8e8;
  background-color: #fff;
  justify-content: space-around;
  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 1rem;
    &.active{
      span{
        color:#5A6DE6;
      }
    }
    span{
      padding:.1rem 0;
      font-size: .18rem;
      color:rgba(42,53,64,0.5);
    }
  }
  // 首页
  .home{
    &.active{
      i{
        background:url(./img/home_active.png) no-repeat;
        background-size: contain;
      }
    }
    i{
      width: .44rem;
      height: .43rem;
      background: url(./img/home.png) no-repeat;
      background-size: contain;
    }

  }
  // 报告
  .report{
    &.active{
      i{
        background: url(./img/report_active.png) no-repeat;
      background-size: contain;
      }
    }
    i{
      width: .34rem;
      height: .39rem;
      background: url(./img/report.png) no-repeat;
      background-size: contain;
    }
  }
  // 购买
  .buy{
    i{
      width: .45rem;
      height: .42rem;
      background:url(./img/buy.png) no-repeat;
      background-size: contain;
    }
    span{
      margin-left: .08rem;
    }
    &.active{
      i{
        background:url(./img/buy_active.png) no-repeat;
        background-size: contain;
      }
    }
  }
  // 我的
  .my{
    i{
      width: .34rem;
      height: .39rem;
      background:url(./img/my.png) no-repeat;
      background-size: contain;
    }
    &.active{
      i{
        background:url(./img/my_active.png) no-repeat;
      background-size: contain;
      }
    }
  }
}
</style>
