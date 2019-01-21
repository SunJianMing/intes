<template lang="">
  <div class='buy'>
    <v-logo></v-logo>
    <div class="buy-wrap">
      <v-list v-for='(item,ind) in buyList' :data='item' :key='ind'></v-list>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vLogo from '@/components/logo'
import vFooter from '@/components/footer'
import vList from './list'

export default {
  data () {
    return {
      buyList: [{
        type: '华大营养',
        title: '肠道菌群检测-体重管理',
        content: '无创居家检测。您可以通过您的 肠道菌群，了解所有关于您体重 的秘密。',
        money: 888,
        image: require('./img/pro-pic.png')
      }, {
        type: '华大营养',
        title: '肠道菌群检测-体重管理',
        content: '无创居家检测。您可以通过您的 肠道菌群，了解所有关于您体重 的秘密。',
        money: 888,
        image: require('./img/pro-pic.png')
      }, {
        type: '华大营养',
        title: '肠道菌群检测-体重管理',
        content: '无创居家检测。您可以通过您的 肠道菌群，了解所有关于您体重 的秘密。',
        money: 888,
        image: require('./img/pro-pic.png')
      }, {
        type: '华大营养',
        title: '肠道菌群检测-体重管理',
        content: '无创居家检测。您可以通过您的 肠道菌群，了解所有关于您体重 的秘密。',
        money: 888,
        image: require('./img/pro-pic.png')
      }]
    }
  },
  components: {
    vLogo,
    vFooter,
    vList
  }
}
</script>
<style lang="scss" scoped>
  .buy{
    display: flex;
    flex-direction: column;
    height:100%;
    .buy-wrap{
      flex: 1 1 auto;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      padding:0 .55rem;
      background-color: #fff;
    }
  }
</style>
