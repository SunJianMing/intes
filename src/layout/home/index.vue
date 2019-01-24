<template>
  <div class='home'>
    <v-logo></v-logo>
    <div class="home-wrap">
      <v-wheel :dataImg='dataImg'></v-wheel>
      <div class="status-hint" @touchend='toStatus'>
        <div class="hint-body">
          <i></i>
          <div class="text">
            <h4>你的检测盒状态</h4>
            <p>检测盒在寄回的路上</p>
          </div>
        </div>
        <span class='more'></span>
      </div>
      <div class="news-wrap">
        <v-news v-for='(news,ind) in newsData' :data='news' :key='ind' :isShareDialog.sync='isShareDialog'></v-news>
      </div>
      <v-dropLoad></v-dropLoad>
    </div>
    <v-footer></v-footer>

    <!-- 分享 -->
    <v-share :visible.sync='isShareDialog' @on-share-close='isShareDialog = false'></v-share>
  </div>
</template>
<script>
import vLogo from '@/components/logo'
import vWheel from './wheel'
import vNews from '@/components/news'
import vFooter from '@/components/footer'
import vDropLoad from '@/components/drop-load'

import vShare from '@/components/share'

export default {
  data () {
    return {
      dataImg: [require('./img/1.png'), require('./img/1.png')],
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
    vLogo,
    vWheel,
    vNews,
    vFooter,
    vDropLoad,
    vShare
  },
  methods: {
    toStatus () {
      this.$router.push('/status')
    }
  },
  activated () {
    console.log(1111)
  }
}
</script>
<style lang="scss" scoped>
  .home{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    height:100%;
    .home-wrap{
      padding: .3rem .4rem 0;
      flex:1 1 auto;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
    .status-hint{
      display:flex;
      height: 1.5rem;
      justify-content: space-between;
      align-items: center;
      padding:0 .25rem;
      border-top:1px solid #e8e8e8;
      border-bottom:1px solid #e8e8e8;
      .hint-body{
        display: flex;
        align-items: center;
        i{
          width: .48rem;
          height: .48rem;
          background: url(./img/status.png) no-repeat;
          background-size: contain;
          margin-right: .24rem;
        }
        .text{
          h4{
            font-size: .28rem;
          }
          p{
            font-size: .22rem;
            margin-top: .12rem;
          }
        }
      }
      .more{
        width: .21rem;
        height: .38rem;
        background: url(./img/more.png) no-repeat;
        background-size: contain;
      }
    }
  }
</style>
