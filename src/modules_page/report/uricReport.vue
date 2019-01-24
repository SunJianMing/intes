<template lang="">
  <div class='uricReport'>
     <v-navigate :title='data.title' :vDefault='true'></v-navigate>
     <div class="uricReport-wrap">
        <vScore
          :type='data.type'
          :score='data.score'
          :content='data.resultContent'
          :createTime='data.createTime'
        ></vScore>
        <div class="uric-wrap">
          <!-- //您的肠型结果图 -->
          <div class="pic-wrap">
            <div class="title">您的肠型结果图</div>
            <div class="pic">
              <img :src="advice.image" alt="">
            </div>
            <div class="advice">
              <div class="advice-title">针对您的肠型建议</div>
              <p>{{advice.content}}</p>
            </div>
          </div>
          <!-- 功能检测 -->
          <vIntesD :data='uricData'></vIntesD>
        </div>
     </div>

  </div>
</template>
<script>
import vNavigate from '@/components/navigate'
import vScore from './score'
import vIntesD from './indicators/intesD'
export default {
  data () {
    return {
      data: {
        title: '肠道微生物检测报告',
        type: 2,
        score: 'B',
        resultContent: 'B型肠型**************************************************。',
        createTime: '2018-12-27'
      },
      uricData: [
        {
          name: '黏蛋白阿12菌2',
          value: 80,
          prompt: '0',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '多形拟2杆菌',
          value: 80,
          prompt: '1',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '单3形2杆菌',
          value: 80,
          prompt: '2',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '木糖3拟杆菌',
          value: 80,
          prompt: '2',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '普拉梭菌',
          value: 80,
          prompt: '1',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '普拉梭菌',
          value: 80,
          prompt: '0',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '华德萨特菌',
          value: 80,
          prompt: '0',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }, {
          name: '华德萨特菌',
          value: 80,
          prompt: '2',
          content: '包括肠道微生物遗传物质的复制、修复等相关的功能，是维持一个肠道菌群稳定的基础，该功能在超重人群中往往偏低。'
        }
      ],
      advice: {
        image: require('./img/advicePic.png'),
        content: '根据我们最新的研究成果，该肠型在定期服用菊粉后，可以降低尿酸。菊粉********************************************。'
      }
    }
  },
  components: {
    vNavigate,
    vScore,
    vIntesD
  }
}
</script>
<style lang="scss" scoped>
  .uricReport{
    display: flex;
    flex-direction: column;
    height: 100%;
    .uricReport-wrap{
      flex:1 1 auto;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background-color: #f2f2f2;
      padding: 0 .48rem;
      .uric-wrap{
        margin-top: -2.52rem;
        position: relative;
        z-index: 100;
      }
      .pic-wrap{
        background-color: #fff;
        border-radius: .3rem;
        margin-bottom: .4rem;
        padding: 0 .32rem .36rem;
        .title{
            padding: .48rem 0 .44rem;
            font-size: .3rem;
            text-align: center;
            color:#2A3540;
            font-weight: 600;
        }
        .pic{
          height: 3.5rem;
          border-radius: .1rem;
          overflow: hidden;
          img{
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        .advice{
          margin-top: .45rem;
          .advice-title{
            margin-bottom: .21rem;
            font-size: .3rem;
            color: #2A3540;
            font-weight: 600;
          }
          p{
            font-size: .28rem;
            line-height: .4rem;
            color:#2A3540;
            word-break: break-all;
          }
        }
      }
    }
  }
</style>
