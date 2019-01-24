<template>
  <div class='news-details'>
      <v-navigate :title='news.type'></v-navigate>
      <div class="news-wrap">
          <div class="news-title">{{news.title}}</div>
          <div class="news-author">
            <div class="author-info">
              <img :src="news.icon" alt="">
              <div class="author-text">
                <h4>{{news.author}}</h4>
                <span class='timer'>{{news.createTime}}</span>
              </div>

            </div>
            <button class='collection'>收藏</button>
          </div>
          <div class="news-content" v-html='news.content'></div>
      </div>
  </div>
</template>
<script>
import vNavigate from '@/components/navigate'
export default {
  data () {
    return {
      news: {
        id: '1',
        type: '最新消息',
        title: '肠道报告,什么样的报告才算合理的报告？',
        content: '<p>当你长时间肥胖却无法久病成医时。运动却坚持不下来，节食却反复反弹的时候。你是否考虑过可能是你的肠道菌群还没有“瘦”下来，你怎么可能会先瘦下来呢？</p><p>肥胖肠道菌群检测，通过观测你的肠道菌群情况，平衡你的饮食习惯，寻找出你的专属菌群解决配方，寻找你的肥胖的真正原因！！</p>',
        createTime: '2019年1月15日',
        icon: require('./img/portrait.png'),
        author: '华大家人新闻网'
      }
    }
  },
  components: {
    vNavigate
  }
}
</script>
<style lang="scss" scoped>
  .news-details{
    display: flex;
    flex-direction: column;
    .news-wrap{
      flex:1 1 auto;
      -webkit-overflow-scrolling: touch;
      padding:0 .4rem;
      .news-title{
        padding: .4rem 0;
        font-size: .36rem;
        color:#2A3540;
        line-height: 1.5;
      }
      .news-author{
        height: .8rem;
        margin-bottom: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .author-info{
          display: flex;
          align-items: center;
          .author-text{
            color:#2A3540;
            h4{
              font-size: .28rem;
            }
            .timer{
              margin-top: .12rem;
              font-size: .18rem;
            }
          }
          img{
            width: .8rem;
            height: .8rem;
            margin-right: .28rem;
          }
        }
        .collection{
          width: 1rem;
          height: .48rem;
          line-height: .48rem;
          border-radius: .05rem;
          font-size: .24rem;
          text-align: center;
          color:#fff;
          background-color: #FF6581;

        }
      }
      .news-content{
        font-size: .28rem;
        p{
          line-height: .4rem
        }
      }
    }
  }
</style>
