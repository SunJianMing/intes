<template lang="">
  <div class='logo' :class='{line:showLine}'>
    <span>肠道LOGO</span>
  </div>
</template>
<script>
export default {
  props: {
    showLine: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .logo{
    width: 100%;
    height: .88rem;
    text-align: center;
    background-color: #fff;
    flex-shrink:0;
    &.line{
      padding:0 .4rem;
      span{
        border-bottom: 1px solid #e8e8e8;
      }
    }
    span{
      width:100%;
      height: 100%;
      line-height: .88rem;
      font-size: .36rem;
      color:#5A6DE6;
      font-weight: 600;

    }
  }
</style>
