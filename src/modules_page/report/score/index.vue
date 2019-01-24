<template lang="">
  <div class='bgColor'>
    <div class="score-wrap">
      <div class="hint">{{type==1?"您目前的检测综合评分":"您的肠型检测结果"}}</div>
      <div class="score">
        <span class='points'>{{score}}</span>
        <span class='unit'>{{type==1?'分':'型'}}</span>
      </div>
    </div>
    <div class="result-wrap">
      <div class="result-title">{{type==1?"多层级评估结果":"您的肠型说明"}}</div>
      <div class="result-content">{{content}}</div>
      <div class="result-createTime">{{createTime}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: [String, Number],
      required: true
    },
    score: {
      type: [String, Number],
      required: true,
      default: 80
    },
    content: {
      type: String
    },
    createTime: {
      type: [String, Number]
    }
  }
}
</script>
<style lang="scss" scoped>
  .bgColor{
    height: 8.62rem;
    background-color: #4953CC;
    margin-left: -0.48rem;
    margin-right: -0.48rem;
    color:#fff;
    .score-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top:.32rem;
      padding-bottom: .57rem;
      .hint{
        font-size: .3rem;
      }
      .score{
        margin-top: .33rem;
        height: 1.21rem;
        display: flex;
        align-items: flex-end;
        .points{
          font-size: 1.5rem;
          height: 1.21rem;
          line-height: 1.21rem;
        }
        .unit{
          font-size: .3rem;
        }
      }
    }

    .result-wrap{
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      padding:.44rem .4rem;
      width: 6.54rem;
      height: 3rem;
      border-radius: .2rem;
      background: url('./img/result-bg.png') no-repeat;
      background-size: contain;
      .result-title{
        font-size: .3rem;
        height: .29rem;
        flex-shrink: 0;
      }
      .result-content{
        flex:1 1 auto;
        padding: .24rem 0;
        font-size: .24rem;
        line-height: .36rem;
        white-space: normal;
         word-break: break-all;
      }
      .result-createTime{
        font-size: .17rem;
        height: .17rem;
        flex-shrink: 0;
      }
    }
  }
</style>
