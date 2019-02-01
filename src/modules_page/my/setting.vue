<template lang="">
  <div class='setting'>
      <div class="item" v-for='(item,ind) in setting' :key='ind'>
        <span class="name">{{item.name}}</span>
        <div class="value">
          <span v-show='item.type == "text"'>{{item.value}}</span>
          <i class='more' v-show='item.type == "icon"'></i>
          <div class="radio" v-show='item.type == "radio"'>
            <span>是</span>
            <span class='radio-wrap' @touchend='switchRadio(item)'><i :class='{active:item.value}'></i></span>
            <span>否</span>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      setting: [{
        name: '邮箱',
        type: 'text',
        value: 'liuxiang1@genomics.cn'
      }, {
        name: '手机号码',
        type: 'text',
        value: '17746852459'
      }, {
        name: '微信号',
        type: 'text',
        value: '17746852459'
      }, {
        name: '推送设置',
        type: 'radio',
        value: true
      }, {
        name: '修改信息',
        type: 'icon'
      }]
    }
  },
  methods: {
    switchRadio (item) {
      this.setting.forEach(val => {
        if (val.name === item.name) {
          val.value = !val.value
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .setting{
    padding: .4rem .4rem 0;
    .item{
      border-bottom: 1px solid #e8e8e8;
      height: 1.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color:#2A3540;
      .name{
        font-size: .28rem;
      }
      .value{
        margin-right: .44rem;
        font-size: 0;
        span{
           font-size: .28rem;
        }
        .more{
          width: .21rem;
          height: .38rem;
          background: url('./img/more.png') no-repeat;
          background-size: contain;
        }

        .radio{

         .radio-wrap{
           width: .7rem;
           height: .35rem;
           border-radius: .18rem;
           background-color: #f2f2f2;
           margin: 0 .25rem;
           position: relative;
           i{
             position: absolute;
             left:0;
             width: .35rem;
             height: .35rem;
             border-radius: 50%;
             background-color: #5a6de7;
             transform: translateX(0);
             transition:transform .2s;
             &.active{
               transform: translateX(100%);
             }
           }

         }
        }
      }
    }
  }
</style>
