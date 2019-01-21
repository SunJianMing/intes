<template lang="">

  <div class="focus">
    <div class="title">我的关注</div>
    <div class="focus-item">
        <router-link
          to='/'
          tag='div'
          v-for='(menu,ind) in menus'
          :key='ind'

          class='item'
          >
          <i  :class='menu.className'></i>
          <span>{{menu.name}}</span>
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [{
        name: '个人样本',
        className: 'sample',
        path: ''
      }, {
        name: '添加数据',
        className: 'addData',
        path: ''
      }, {
        name: '示例报告',
        className: 'sample-report',
        path: ''
      }, {
        name: '我的报告',
        className: 'my-report',
        path: ''
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  .focus{
        border-radius: .2rem;
        background-color: #fff;
        margin-bottom: .4rem;
        .title{
          padding:.4rem;
          font-size: .24rem;
          color:#2A3540;
          border-bottom: 1px solid #e8e8e8;
        }
        .focus-item{
          height: 1.7rem;
          display: flex;
          .item{
            flex:1;
            padding:.4rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i{
              height: .48rem;
              margin-bottom: .18rem;
              &.sample{
                width: .38rem;
                background: url('./img/sample.png') no-repeat;
                background-size: contain;
              }
              &.addData{
                width: .48rem;
                background: url('./img/addData.png') no-repeat;
                background-size: contain;
              }
              &.sample-report{
                width: .48rem;
                background: url('./img/sample-report.png') no-repeat;
                background-size: contain;
              }
              &.my-report{
                width: .48rem;
                background: url('./img/my-report.png') no-repeat;
                background-size: contain;
              }
            }
            span{
              font-size: .24rem;
              color: #2A3540;
            }
          }
        }
      }
</style>
