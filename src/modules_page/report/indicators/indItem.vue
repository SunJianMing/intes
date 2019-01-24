<template lang="">
  <div class='item'>
    <div class="item-title" @touchend='switchItem'>
      <div class="title">
        <i class="icon" :class='data.className'></i>
        <span>{{data.name}}</span>
      </div>

        <i class='drop_icon' :class='{active:currInd == targetInd}'></i>

    </div>
    <transition name='silde'>
      <div class="item-wrap" v-show='currInd == targetInd'>
        <div class="item-content">
            {{data.content}}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    },
    currInd: {
      type: [Number],
      required: true
    },
    targetInd: {
      type: Number,
      required: true
    }
  },
  methods: {
    switchItem () {
      this.$emit('update:currInd', this.targetInd)
    }
  }
}
</script>
<style lang="scss" scoped>
  .item{
    .item-title{
      display: flex;
      justify-content: space-between;
      height: .86rem;
      align-items: center;
      border-bottom: .02rem solid #e8e8e8;
      .title{
        display: flex;
        align-items: center;
        .icon{
          margin-right: .24rem;
        }
        // 菌群
        .flora{
          width: .48rem;
          height: .48rem;
          background: url('./img/flora.png') no-repeat;
          background-size: contain;
        }
        // 变瘦
        .thin{
          width: .48rem;
          height: .47rem;
          background: url('./img/thin.png') no-repeat;
          background-size: contain;
        }
        // 变胖
        .fat{
          width: .52rem;
          height: .38rem;
          background: url('./img/fat.png') no-repeat;
          background-size: contain;
          margin-left: -0.04rem;
        }
        // 变瘦
        .size{
          width: .48rem;
          height: .47rem;
          background: url('./img/size.png') no-repeat;
          background-size: contain;
        }
        // 变瘦
        .life{
          width: .48rem;
          height: .46rem;
          background: url('./img/life.png') no-repeat;
          background-size: contain;
        }
      }
      .drop_icon{
        width: .14rem;
        height: .25rem;
        background: url('./img/close.png') no-repeat;
        background-size: contain;
        transition: .3s all;
        &.active{
          transform-origin: center;
          transform: rotate(90deg);
          margin-right: .05rem;
        }
      }
    }

    .item-wrap{
      max-height: 500rem;
      transition: .3s all;
      .item-content{
        padding:.2rem .7rem .82rem;
        line-height: 1.6;
      }
    }
    .silde-enter,
    .silde-leave-to{
      opacity: 0;
      height: 0;
    }
    .silde-leave,.silde-levter-to{
      opacity: 1;
      height: auto;
    }
    .silde-enter-active,.silde-leave-active{
      transition: all .3s;
    }

  }
</style>
