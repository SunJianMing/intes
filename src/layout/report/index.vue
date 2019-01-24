<template>
  <div class="report">
    <vLogo :showLine='false'></vLogo>
    <div class="report-warp">
      <div class="report-list">
          <v-item v-for='(item,ind) in reportData' :data='item' :key='ind'></v-item>
      </div>
      <span class="help">如何更好的理解这份报告？</span>
    </div>
    <vFooter></vFooter>
  </div>
</template>
<script>
import vLogo from '@/components/logo'
import vFooter from '@/components/footer'
import vItem from './list/item'

export default {
  data () {
    return {
      reportData: [
        {
          id: 1,
          title: '肠道菌群检测-体重管理 示例报告',
          text: '22种相关检测展示'
        }, {
          id: 2,
          title: '肠道菌群检测-体重管理 示例报告11',
          text: '22种相关检测展示'
        }
      ]
    }
  },
  components: {
    vLogo,
    vFooter,
    vItem
  }
}
</script>
<style lang="scss" scoped>
.report{
  display: flex;
  flex-direction: column;
  height: 100%;
  .report-warp{
    flex:1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #F2F2F2;
    .report-list{
      flex:1 1 auto;
       padding:.3rem .4rem 0;
       overflow-y: auto;
       -webkit-overflow-scrolling: touch;
    }
    .help{
      flex-shrink: 0;
      width: 100%;
      height: .8rem;
      line-height: .8rem;
      border-radius: .06rem;
      font-size: .28rem;
      text-align: center;
      color:#fff;
      background-color: #5CADFF;
    }
  }
}
</style>
