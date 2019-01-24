<template lang="">
  <div class='item' >
    <h3>{{data.title}}</h3>
    <p>{{data.text}}</p>
    <button type='button' @touchend='toReportDetails'>查看报告</button>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    toReportDetails () {
      let {id} = this.data
      if (id === 1 || id === '1') {
        this.$router.push(`/intesReport/${id}`)
      }
      if (id === 2 || id === '2') {
        this.$router.push(`/uricReport/${id}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .item{
    width: 6.7rem;
    height: 3.76rem;
    padding:.4rem .35rem;
    margin-bottom: .42rem;
    border-radius: .2rem;
    background-color: #fff;
    h3{
      width: 3.84rem;
      font-size: .36rem;
      color:#2A3540;
      line-height: .42rem;
    }
    p{
      margin-top: .43rem;
      margin-bottom: .6rem;
      font-size: .28rem;
      color:#2A3540;
    }
    button{
      width: 100%;
      height: .8rem;
      background-color: #5A6DE6;
      border-radius: .4rem;
      font-size: .28rem;
      color:#fff;
    }
  }
</style>
