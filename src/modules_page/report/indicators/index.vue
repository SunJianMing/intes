<template lang="">
  <div class='indica-wrap'>
    <div class="indica-title">您目前的肠道多层级评估身体情况</div>
    <div class="svg"></div>
    <div class="indica-item">
        <v-item v-for='(item,ind) in data' :key='ind' :data='item' :currInd.sync='currOpen' :targetInd='ind'></v-item>
    </div>
  </div>
</template>
<script>
import vItem from './indItem'
export default {
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {
      currOpen: 0
    }
  },
  components: {
    vItem
  }
}
</script>
<style lang="scss" scoped>
  .indica-wrap{
    border-radius: .3rem;
    background-color: #fff;
    padding-bottom:.3rem;
    margin-bottom: .4rem;
    .svg{
      width: 100%;
      height: 5.27rem;
    }
    .indica-title{
      padding: .47rem 0 .33rem;
      font-size: .3rem;
      text-align: center;
      color:#2A3540;
    }
    .indica-item{
      padding:0 .3rem 0 .35rem;
    }
  }
</style>
