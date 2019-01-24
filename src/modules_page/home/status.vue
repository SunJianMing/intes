<template lang="">
  <div class='status'>
    <v-navigate title='检测' :v-default='false'></v-navigate>
    <div class="status-wrap">
      <div class="userInfo">
          <span class='name'>Hello,{{userInfo.userName}}</span>
          <span class='code'>您的样本编号为{{userInfo.code}}</span>
      </div>
      <v-status-thrr :data='statusData'></v-status-thrr>
    </div>
  </div>
</template>
<script>
import vNavigate from '@/components/navigate'
import vStatusThrr from './tree'
export default {
  data () {
    return {
      userInfo: {
        userName: '肠道君',
        code: '4655465489713'
      },
      statusData: [
        {
          timer: '12月25日',
          title: '样本提取成功',
          content: '您的样本于1小时前成功提取，将准备进行下一步检测，该步骤需要耗时约3 ~ 8天。我们将会在进行下一步操作的时候通过邮件通知您。',
          status: 1
        }, {
          timer: '12月25日',
          title: '样本提取成功',
          content: '您的样本于1小时前成功提取，将准备进行下一步检测，该步骤需要耗时约3 ~ 8天。我们将会在进行下一步操作的时候通过邮件通知您。',
          status: 1
        }, {
          timer: '12月25日',
          title: '样本入库',
          content: '您的样本于1小时前成功提取，将准备进行下一步检测，该步骤需要耗时约3 ~ 8天。我们将会在进行下一步操作的时候通过邮件通知您。',
          status: 1
        }, {
          timer: '12月25日',
          title: '收到样本',
          content: '您的样本于1小时前成功提取，将准备进行下一步检测，该步骤需要耗时约3 ~ 8天。我们将会在进行下一步操作的时候通过邮件通知您。',
          status: 1
        }, {
          timer: '12月25日',
          title: '绑定成功',
          content: '您的样本于1小时前成功提取，将准备进行下一步检测，该步骤需要耗时约3 ~ 8天。我们将会在进行下一步操作的时候通过邮件通知您。',
          status: 1
        }
      ]
    }
  },
  components: {
    vNavigate,
    vStatusThrr
  },
  activated () {
    console.log(1212)
  }
}
</script>
<style lang="scss" scoped>
 .status{
   display: flex;
   flex-direction: column;
   height: 100%;
  .status-wrap{
    flex:1 1 auto;
    padding:0 .3rem 0 .72rem;
    .userInfo{
      display: flex;
      flex-direction: column;
      padding: .9rem 0 .97rem;
      .name{
        font-size: .6rem;
        color:#2A3540;
      }
      .code{
        font-size: .3rem;
        margin-top: .17rem;
        color:#2A3540;
      }
    }
  }
 }
</style>
