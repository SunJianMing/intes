<template lang="">
  <div class='navigate' :class='{"default":vDefault}'>
    <i class="back" @touchend='navigateBack'></i>
    <span>{{title}}</span>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    vDefault: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigateBack () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.navigate{
  height: .88rem;
  flex-shrink: 0;
  padding: 0 .4rem;
  position: relative;
  &.default{
    background-color: #4953CC;
    box-shadow:0 .03rem .11rem 0.02rem rgba(25,25,28,0.15);
    span{
      border-bottom: none;
      color:#fff;
    }
    .back{
      &::before{
        background: url('./img/back_default.png') no-repeat;
        background-size: contain;
      }
    }
  }
  .back{
    width: .88rem;
    height: .88rem;
    position: absolute;
    left:.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before{
      content: '';
      width: .26rem;
      height: .47rem;
      display: block;
      background: url('./img/back.png') no-repeat;
      background-size: contain;
    }
  }
  span{
    width: 100%;
    height: 100%;
    line-height: .86rem;
    border-bottom: 1px solid #e8e8e8;
    font-size: .36rem;
    text-align: center;
    color:#2A3540;
  }
}
</style>
