<template lang="">
  <div class='indicator-wrap' :class='{detection:isDetection}'>
    <div class="item"
    :class='Color(item.prompt)'
     v-for='(item,ind) in data'
     :key='ind'
     @touchend='currOpen=ind'
     >
      <div class="title" :class='{active:ind==currOpen}'>
        <div class="name">{{item.name}}</div>
        <div class="progress">
          <span :style="{width:item.value+'%'}"></span>
        </div>
        <div class="prompt">
          <span>{{item.prompt | FILTER_PROMPT}}</span>
          <i class='drop_icon'></i>
        </div>
      </div>
      <transition name='silde'>
        <div class="content-wrap" v-if='isDetection' v-show='ind == currOpen'>
          <p>
            {{item.content}}
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array
    },
    isDetection: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currOpen: 0
    }
  },
  methods: {
    Color (value) {
      if (value === 0 || value === '0') {
        return 'low'
      } else if (value === 1 || value === '1') {
        return 'normal'
      } else if (value === 2 || value === '2') {
        return 'high'
      } else {
        return 'abnormal'
      }
    }
  },
  activated () {
    console.log(this.data)
  }
}
</script>
<style lang="scss" scoped>
  .indicator-wrap{
    padding: .46rem .3rem 0 .35rem;
    .item{
      &.low{
        .progress{
          span{
            background-color:#8868F2;
          }
        }
        .prompt{
          color:#8868F2;
        }
      }
      &.normal{
        .progress{
          span{
            background-color:#01D2B3;
          }
        }
        .prompt{
          color:#2A3540;
        }
      }
      &.high{
        .progress{
          span{
            background-color:#E56479;
          }
        }
        .prompt{
          color:#E56479;
        }
      }
      &:last-child{
      border-bottom: none;

      }

      .title{
        padding: .35rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
         border-bottom: 1px solid #e8e8e8;
        .name{
          font-size: .24rem;
          color:#2A3540;
          width: 1.7rem;
          text-align: right;
        }
        .progress{
          height: .16rem;
          width: 3.24rem;
          border-radius: .08rem;
          background-color: #f2f2f2;
          overflow: hidden;
          span{
            height: 100%;
            border-radius: 0  .08rem .08rem 0;
          }

        }
        .prompt{
          font-size: .24rem;
          margin-right: .12rem;

        }
      }
    }
    &.detection{
      .title{
        &.active{
          .name{
            font-weight: 600;
          }
          .prompt{
            span{
              font-weight: 600;
            }
            .drop_icon{
              transform-origin: center;
              transform: rotate(90deg);
              margin-right: .05rem;
            }
          }
        }
        .name{
          width: 1rem;
        }
        .prompt{
         margin-right: 0;
        .drop_icon{
          width: .14rem;
          height: .25rem;
          background:url('./img/close.png') no-repeat;
          background-size: contain;
          margin-left: .42rem;
        }
      }
      }
    }
    //  内容
    .content-wrap{
      font-size: .2rem;
      p{
        padding: .2rem .06rem .43rem .23rem;
         line-height: .3rem;
         color:#2A3540;
      }
    }
    .silde-enter,.silde-leave-to{
      height: 0;
      opacity: 0;
    }
    .silde-enter-to,.silde-leave{
      height: auto;
      opacity: 1;
    }
    .silde-enter-active,.silde-leave-active{
      transition: .3s all;
    }
  }
</style>
