<template lang="">
  <div class='collection'>
    <v-news v-for='(news,ind) in newsData' :data='news' :key='ind' :isShareDialog.sync='isShareDialog'></v-news>
    <!-- 分享 -->
    <v-share :visible.sync='isShareDialog' @on-share-close='isShareDialog = false'></v-share>
  </div>
</template>
<script>
import vNews from '@/components/news'
import vShare from '@/components/share'
export default {
  data () {
    return {
      newsData: [{
        id: '1',
        type: '最新消息',
        title: '肠道报告,什么样的报告才算合理的报告？',
        content: '喝口凉水胖三斤，肥胖基因了解一下！',
        createTime: '2019年1月15日',
        image: require('./img/news1.png')
      }, {
        id: '2',
        type: '行业新闻',
        title: '肠道报告,什么样的报告才算合理的报告？',
        content: '喝口凉水胖三斤，肥胖基因了解一下！',
        createTime: '2019年1月15日',
        image: require('./img/news2.png')
      }, {
        id: '3',
        type: '健康知识',
        title: '肠道报告,什么样的报告才算合理的报告？',
        content: '喝口凉水胖三斤，肥胖基因了解一下！',
        createTime: '2019年1月15日',
        image: require('./img/news3.png')
      }],
      isShareDialog: false
    }
  },
  components: {
    vNews,
    vShare
  }
}
</script>
<style lang="scss" scoped>
.collection{
  padding: 0 .55rem;
}
</style>
