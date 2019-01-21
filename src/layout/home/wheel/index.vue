<template>
    <div class='wheel'>
      <div class="pic-wrap">
          <ul class='pic' ref='pic'>
            <li v-for='(pic,ind) in dataImg' :key='ind'>
              <img :src="pic" alt="">
            </li>
          </ul>
      </div>
      <div class="sub-list" ref='subList'>
        <span v-for='(sub,ind) in dataImg' :key='ind' :class='{active:currentSub==ind}'></span>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      currentSub: 0
    }
  },
  props: {
    dataImg: {
      type: Array
    }
  },
  mounted () {
    let pic = this.$refs.pic
    pic.style.width = this.dataImg.length * '100' + '%'
  }
}
</script>
<style lang="scss" scoped>
  .wheel{
    width: 100%;
    .pic-wrap{
      height: 3.76rem;
      overflow: hidden;
    }
    .pic{
      display: flex;
      li{
        img{
          height: 3.76rem;
          display: block;
        }
      }
    }
    .sub-list{
      height: .5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        width:.24rem;
        height: .06rem;
        border-radius: .04rem;
        background-color: #E8E8E8;
        margin: 0 .03rem;
        &.active{
          background-color: #5A6DE6;
        }
      }
    }
  }
</style>
