<template lang="">
  <div class='detection-wrap'>
    <div class="title">肠道微生物相关生化功能检测</div>
    <vItem :data='data' :isDetection='true'></vItem>
  </div>
</template>
<script>
import vItem from './indicatorItem'
export default {
  props: {
    data: {
      type: Array
    }
  },
  components: {
    vItem
  }
}
</script>
<style lang="scss" scoped>
  .detection-wrap{
    border-radius: .3rem;
    background-color: #fff;
    margin-bottom: .4rem;
    padding-bottom: .3rem;
    .title{
      color:#2A3540;
      padding-top:.48rem;
      font-size: .3rem;
      text-align: center;
      color:#2A3540;
    }
  }
</style>
