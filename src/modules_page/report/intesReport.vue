<template lang="">
  <div class='intesReport'>
    <v-navigate :title='data.title' :vDefault='true'></v-navigate>
    <div class="intes-wrap">
      <!-- 评分区域 -->
      <vScore
        :type='data.type'
        :score='data.score'
        :content='data.resultContent'
        :createTime='data.createTime'
        ></vScore>

        <div class="indic">
           <!-- 雷达图 -->
            <v-indc :data='data.fieldNames'></v-indc>
            <!-- 变胖vs变瘦 -->
            <v-fatVSthin :data='currData' @changeSwitch='changeCurrData'></v-fatVSthin>
            <!-- 功能检测 -->
            <v-detection :data='intesData'></v-detection>
        </div>

    </div>
  </div>
</template>
<script>
import vNavigate from '@/components/navigate'
import vScore from './score'
import vIndc from './indicators'
import vFatVSthin from './indicators/fatVSthin'
import vDetection from './indicators/intesD'

export default {
  data () {
    return {
      data: {
        id: 1,
        title: '肠道菌群检测-体重管理 示例报告',
        text: '22种相关检测展示',
        type: 1,
        score: 80,
        resultContent: '您目前的身体状况良好，请继续保持，建议您多食用蔬 菜保持XXX菌群的数量，更有助于您的健康。',
        createTime: '2018-12-27',
        fieldNames: [{
          name: '菌群多样性',
          value: 80,
          content: '根据问卷调查中信息综合生成。根据问卷调查中信息综合生成。根据问卷调查中信息综合生成。根据问卷调查中信息综合生成。',
          className: 'flora'
        }, {
          name: '变瘦菌群',
          value: 40,
          content: '根据问卷调查中信息综合生成。',
          className: 'thin'

        }, {
          name: '变胖菌群',
          value: 60,
          content: '根据问卷调查中信息综合生成。',
          className: 'fat'
        }, {
          name: '体型',
          value: 100,
          content: '根据问卷调查中信息综合生成。',
          className: 'size'
        }, {
          name: '生活习惯',
          value: 100,
          content: '根据问卷调查中信息综合生成。',
          className: 'life'
        }]
      },
      fatData: [
        {
          name: '黏蛋白阿克曼菌',
          value: 80,
          prompt: '0'
        }, {
          name: '多形拟杆菌',
          value: 80,
          prompt: '1'
        }, {
          name: '单形拟杆菌',
          value: 80,
          prompt: '2'
        }, {
          name: '木糖降解拟杆菌',
          value: 80,
          prompt: '1'
        }, {
          name: '普拉梭菌',
          value: 80,
          prompt: '1'
        }, {
          name: '普拉梭菌',
          value: 80,
          prompt: '1'
        }, {
          name: '华德萨特菌',
          value: 80,
          prompt: '1'
        }
      ],
      thinData: [
        {
          name: '黏蛋白阿12菌2',
          value: 80,
          prompt: '0'
        }, {
          name: '多形拟2杆菌',
          value: 80,
          prompt: '1'
        }, {
          name: '单3形2杆菌',
          value: 80,
          prompt: '2'
        }, {
          name: '木糖3拟杆菌',
          value: 80,
          prompt: '2'
        }, {
          name: '普拉梭菌',
          value: 80,
          prompt: '1'
        }, {
          name: '普拉梭菌',
          value: 80,
          prompt: '0'
        }, {
          name: '华德萨特菌',
          value: 80,
          prompt: '0'
        }, {
          name: '华德萨特菌',
          value: 80,
          prompt: '2'
        }
      ],
      currData: [],
      intesData: [
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
      ]
    }
  },
  components: {
    vNavigate,
    vScore,
    vIndc,
    vFatVSthin,
    vDetection
  },
  methods: {
    changeCurrData (type) {
      this.currData = []
      if (type === 'fat') {
        this.currData = this.fatData
      }
      if (type === 'thin') {
        this.currData = this.thinData
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .intesReport{
    display: flex;
    flex-direction: column;
    height: 100%;
    .intes-wrap{
      flex:1 1 auto;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background-color:#f2f2f2;
      padding: 0 .48rem;
      .indic{
        margin-top: -2.52rem;
        position: relative;
        z-index: 100;
      }
    }
  }
</style>
