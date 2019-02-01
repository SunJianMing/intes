<template>
  <div class='setting-wrap'>
      <router-link
        class="item"
        v-for='(item,ind) in settingData'
        :to='item.path'
        tag='div'
        :key='ind'
        >
          <div >
            <i :class='item.className'></i>
            <span>{{item.name}}</span>
          </div>
          <div class="more"></div>
        </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      settingData: [{
        name: '我的私信',
        className: 'msg',
        path: ''
      }, {
        name: '我的收藏',
        className: 'collection',
        path: '/myInfo/collection'
      }, {
        name: '购买',
        className: 'myBuy',
        path: ''
      }, {
        name: '订单查询',
        className: 'searchOrder',
        path: ''
      }, {
        name: '帮助中心',
        className: 'help',
        path: '/myInfo/help'
      }, {
        name: '关于我们',
        className: 'about',
        path: ''
      }, {
        name: '设置',
        className: 'setting',
        path: '/myInfo/setting'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  .setting-wrap{
    border-radius: .2rem;
    background-color: #fff;
    margin-bottom: .4rem;
    display: flex;
    flex-direction: column;
    .item{
      &:last-child{
        border-bottom: none;
      }
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: .9rem;
      padding: 0 .4rem;
      border-bottom: 1px solid #e8e8e8;
      div{
        display: flex;
        align-items: center;
        i{
        margin-right: .3rem;
          &.msg{
            width: .46rem;
            height: .31rem;
            background: url('./img/msg.png') no-repeat;
            background-size: contain;
          }
          &.collection{
            width: .45rem;
            height: .43rem;
            background: url('./img/collection.png') no-repeat;
            background-size: contain;
          }
          &.myBuy{
            width: .45rem;
            height: .41rem;
            background: url('./img/buy.png') no-repeat;
            background-size: contain;
          }
          &.searchOrder{
            width: .45rem;
            height: .44rem;
            background: url('./img/search-order.png') no-repeat;
            background-size: contain;
          }
          &.help{
            width: .45rem;
            height: .45rem;
            background: url('./img/help.png') no-repeat;
            background-size: contain;
          }
          &.about{
            width: .44rem;
            height: .40rem;
            background: url('./img/about.png') no-repeat;
            background-size: contain;
          }
          &.setting{
            width: .45rem;
            height: .43rem;
            background: url('./img/setting.png') no-repeat;
            background-size: contain;
          }
        }
        span{
          font-size: .24rem;
          color: #2A3540;
        }
      }
      .more{
        width: .21rem;
        height: .38rem;
        background: url('./img/more.png') no-repeat;
        background-size: contain;
      }

    }
  }
</style>
