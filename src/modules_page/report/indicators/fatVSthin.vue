<template>
  <div class='fatVSthin'>
      <div class="title">您目前更胖 / 更瘦菌群对比图</div>
      <div class="vs-wrap">
          <div class="pay">
              <div class="score">
                <span class='progress'>
                  <span>50%</span>
                </span>
              </div>
              <span class='points'><span>变胖</span></span>
          </div>
          <div class="vs">
            <div class="icon"></div>
            <span>菌群对比图</span>
          </div>
          <div class="thin">
              <span class='points'><span>变胖</span></span>
            <div class="score">
                <span class='progress'>
                  <span>50%</span>
                </span>
              </div>
          </div>
      </div>
      <div class="switchTagButton" :class='switchClass'>
        <span @touchend='switchTag("fat")' class='fat-text'>更胖菌群</span>
        <span @touchend='switchTag("thin")' class='thin-text'>更瘦菌群</span>
        <i class="icon"></i>
      </div>
      <vIndicatorItem :data='data'></vIndicatorItem>
  </div>
</template>
<script>
import vIndicatorItem from './indicatorItem'
export default {
  props: {
    data: {
      type: Array
    }
  },
  data () {
    return {
      switchClass: 'fat'
    }
  },
  components: {
    vIndicatorItem
  },
  activated () {
    this.switchTag(this.switchClass)
  },
  methods: {
    switchTag (type) {
      this.switchClass = type
      this.$emit('changeSwitch', type)
    }
  }
}
</script>
<style lang="scss" scoped>
  .fatVSthin{
    border-radius: .3rem;
    background-color: #fff;
    padding-bottom: .3rem;
    margin-bottom: .4rem;
    .title{
      padding: .47rem 0;
      font-size: .3rem;
      text-align: center;
      color:#2A3540;
    }
    .vs-wrap{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-bottom: .8rem;
      .pay,.thin{
        width: 2rem;
        height: .4rem;
        display: flex;
        .score{
           width: 1.4rem;
           height: .37rem;
        }
        .points{
          width: .6rem;
          text-align: center;
          line-height: .4rem;
          height: .38rem;
          font-size: .18rem;
          border-bottom: 1px solid rgba(25,25,28,0.15);
          span{
            text-align: center;
            line-height: .4rem;
          }
        }
      }
      .thin{
        border-width: 1px;
        border-style: solid;
        border-top-color:#FFDA37;
        border-left-color:#FFDA37;
        border-bottom-color: transparent;
        border-right-color: transparent;
        transform: skewX(-45deg);

        .score{
          border: 1px solid #01A0E9;
          height: .37rem;
          margin-top: .02rem;
          margin-right: -2px;
          text-align: left;
          .progress{
            width: 50%;
            height: 100%;
            background-color: #01A0E9;
            text-align: center;
            span{
              font-size: .18rem;
              color:#fff;
              transform: skewX(45deg);
              line-height: .37rem;
            }
          }
        }
        .points{
          color:#01A0E9;
          span{
             transform: skewX(45deg);
          }
        }
      }
      .pay{
        border-width: 1px;
        border-style: solid;
        border-top-color:#FFDA37;
        border-right-color:#FFDA37;
        border-bottom-color: transparent;
        border-left-color: transparent;
        transform: skewX(45deg);
        .score{
          border: 1px solid #E56479;
          height: .37rem;
          margin-top: .02rem;
          margin-left: -2px;
          text-align: right;
          .progress{
            width: 50%;
            height: 100%;
            background-color: #E56479;
            text-align: center;
            span{
              font-size: .18rem;
              color:#fff;
              transform: skewX(-45deg);
              line-height: .37rem;
            }
          }
        }
        .points{
          color:#E56479;
          span{
             transform: skewX(-45deg);
          }
        }

      }
      .vs{
        border-bottom: 1px solid #FFDA37;
        margin: 0 .18rem;
          width: 1.4rem;
           height: .76rem;
        position: relative;
        .icon{
          height: 2.96rem;
          width: 2.41rem;
          background: url('./img/vs.png') no-repeat;
          background-size: contain;
          position: absolute;
          left:-0.4rem;
          top:-.6rem;
        }
        span{
          position: absolute;
          bottom:-0.32rem;
          border:1px solid  #000;
          background-color: #ffe23b;
          border-radius: .05rem;
          font-size: .18rem;
          width: 1.24rem;
          height: .28rem;
          text-align: center;
          line-height: .28rem;
          color:#2A3540;

        }
      }
    }
    .switchTagButton{
      margin:0 .33rem;
      height: .66rem;
      border-radius: .33rem;
      background-color: #6575E6;
      border:1px solid #6575E6;
      display: flex;
      position: relative;

      &.fat{
        i{
          transform:translateX(0);
        }
        .fat-text{
          color: #4953CC;
        }
        .thin-text{
          color:#fff;
        }
      }
      &.thin{
        i{
          transform: translateX(100%);
          margin-left: -2px;
        }
        .thin-text{
           color: #4953CC;
        }
        .fat-text{
          color: #fff;
        }
      }
      span{
        flex:1 1 50%;
        text-align: center;
        position: relative;
        z-index: 1;
        line-height: .66rem;
        font-size: .24rem;
        transition: all .3s;
      }
      .icon{
        position: absolute;
        width: 50%;
        height: .62rem;
        border-radius: .31rem;
        background-color: #fff;
        left:1px;
        top:0;
        transition: all .3s;
      }
    }

  }
</style>
