<template lang="">
  <div class='helpItem '>
    <router-link
      v-for='(item,ind) in data'
      :key='ind'
      :to='item.path'
      tag='div'
      class='item'
      >
      <span>{{item.name}}</span>
      <i class="icon"></i>
      </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        {
          name: '隐私说明',
          path: '/myInfo/privacy'
        }, {
          name: '服务协议',
          path: '/myInfo/agreement'
        }, {
          name: '接受条款',
          path: '/myInfo/terms'
        }, {
          name: '服务条件',
          path: '/myInfo/conditions'
        }, {
          name: '服务范围',
          path: '/myInfo/scope'
        }, {
          name: '有关风险',
          path: '/myInfo/risk'
        }, {
          name: '隐私声明',
          path: '/myInfo/statement'
        }, {
          name: '用户知悉',
          path: '/myInfo/aware'
        }, {
          name: '用户责任',
          path: '/myInfo/responsibility'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .helpItem{
    padding:.4rem;
    .item{
      height: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-block-end: 1px solid #e8e8e8;
      span{
        font-size: .28rem;
        color: #2A3540;
        font-weight: 500;
        margin-left: .04rem;
      }
      .icon{
        width: .21rem;
        height: .38rem;
        background: url('./img/more.png') no-repeat;
        background-size: contain;
        margin-right: .4rem ;
      }
    }
  }
</style>
