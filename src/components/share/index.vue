<template lang="">
<transition name='show' >
  <div class='share-wrap' v-show='visible' @touchend='onShareClose'>
    <transition name='slide'>
      <div class="share-content" v-show='visible'>
          <div class="title">
            <span>分享至</span>
            <i class='close' @touchend='onShareClose'></i>
          </div>
          <div class="share-item">
            <div class="item" v-for='(share,ind) in shareData' :key='ind'>
              <img :src="share.icon" alt="">
              <span>{{share.name}}</span>
            </div>
          </div>
      </div>
    </transition>

  </div>
</transition>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      shareData: [{
        icon: require('./img/wx.png'),
        name: '微信'
      }, {
        icon: require('./img/py.png'),
        name: '朋友圈'
      }, {
        icon: require('./img/wb.png'),
        name: '微博'
      }]
    }
  },
  methods: {
    onShareClose () {
      this.$emit('on-share-close')
    }
  }
}
</script>
<style lang="scss" scoped>
  .share-wrap{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    background-color:rgba(0,0,0,0.2);
    .share-content{
      width: 100%;
      height: 3.6rem;
      position: absolute;
      bottom:0;
      left:0;
      border-radius: .2rem .2rem 0 0;
      background-color: #fff;
      transform: translateY(0);
      .title{
        height: 1.22rem;
        position: relative;
        span{
          width: 100%;
          line-height: 1.22rem;
          font-size: .3rem;
          text-align: center;
          color:#353F4A;
        }
        .close{
          position: absolute;
          width: .66rem;
          height: .66rem;
          top:50%;
          transform: translateY(-50%);
          right:.37rem;
          display: flex;
          justify-content: center;
          align-items: center;
          &:after{
            content: '';
            width: .48rem;
            height: .48rem;
            background: url('./img/close.png') no-repeat;
            background-size: contain;
          }
        }
      }

      .share-item{
        display: flex;
        padding: 0 .85rem;
        justify-content: space-between;
        .item{
          text-align: center;
          img{
            width: 1.19rem;
            height: 1.2rem;
            display: block;
            margin-bottom: .37rem;
          }
        }
      }
    }

    .slide-enter,.slide-leave-to{
      transform: translateY(3.6rem);
    }
    .slide-enter-to,.slide-leave{
      transform: translateY(0);
    }
    .slide-enter-active{
      transition: all .3s .1s;
    }
    .slide-leave-active{
       transition: all .3s;
    }
  }
  .show-enter,.show-leave-to{
    opacity: 0;
  }
  .show-enter-to,.show-leave{
    opacity: 1;
  }
  .show-enter-active{
    transition: all .2s;
  }
  .show-leave-active{
    transition: all .2s .3s;
  }
</style>
