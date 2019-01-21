<template>
  <div class='my'>
    <div class="my-wrap">
      <div class="uesr">
        <div class="user-img">
          <img :src="userData.image" alt="">
        </div>
        <div class="user-info">
          <div class="user-name">{{userData.username}}</div>
          <div class="user-eamil">{{userData.eamil}}</div>
        </div>
      </div>
      <v-my-focus></v-my-focus>
      <v-setting></v-setting>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import vFooter from '@/components/footer'
import vMyFocus from './focus'
import vSetting from './setting'
export default {
  data () {
    return {
      userData: {
        image: require('./img/portrait.png'),
        username: '肠道君',
        eamil: 'Changdaojun@genomics.cn'
      }
    }
  },
  components: {
    vFooter,
    vMyFocus,
    vSetting
  }
}
</script>
<style lang="scss" scoped>
  .my{
    display: flex;
    flex-direction: column;
    height: 100%;
    .my-wrap{
      flex:1 1 auto;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      background:#f2f2f2 url('./img/bg.png') no-repeat;
      background-size: 9.96rem 5.55rem;
      background-position: center -1.6rem;
      padding:1.28rem .4rem 0;
      // 个人信息
      .uesr{
        display: flex;
        align-items: center;
        margin-bottom: .4rem;
        .user-img{
          width: 1.2rem;
          height: 1.2rem;
          background: url('./img/portrait.png') no-repeat;
          background-size: contain;
          border-radius: 50%;
          overflow: hidden;
          margin-right: .3rem;
          img{
            width: 100%;
            height: 100%;
            display: block;
            border-radius: 50%;
            overflow: hidden;
          }
        }
        .user-info{
          color: #fff;
          .user-name{
            font-size: .36rem;
          }
          .user-eamil{
            font-size: .24rem;
            margin-top: .12rem;
          }
        }
      }
    }
  }
</style>
