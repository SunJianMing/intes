<template>
  <div class='news'>
      <div class="news-type">{{data.type}}</div>
      <div class="news-body">
        <div class="news-content">
            <div class="news-title">
              {{data.title}}
            </div>
            <div class="news-introduce">
              {{data.content}}
            </div>
        </div>
        <div class="news-pic">
          <img :src="data.image" alt="">
        </div>
      </div>
      <div class="news-time">
        <span class="createTime">
          {{data.createTime}}
        </span>
        <div class="share"></div>
      </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
  .news{
    border-bottom: 1px solid #e8e8e8;
    padding: 0 .27rem;
    .news-type{
      margin-top: .46rem;
      margin-bottom: .34rem;
      font-size: .22rem;
      color:#2A3540;
    }
    .news-body{
      height: 1.08rem;
      display: flex;
      justify-content: space-between;
      .news-content{
        display: flex;
        flex-direction: column;
        .news-title{
          width: 3.47rem;
          font-size: .28rem;
          line-height: .35rem;
          vertical-align: top;
          font-weight: 600;
          color:#2A3540;
        }
        .news-introduce{
          width: 3.6rem;
          font-size: .22rem;
          color:#2A3540;
          margin-top: .16rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .news-time{
      margin: .45rem 0 .3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .share{
        width: .43rem;
        height: .47rem;
        background: url(./img/share.png) no-repeat;
        background-size: contain;
        margin-right: .02rem;
      }
    }
    img{
      display: block;
      width: 1.96rem;
      height: 1.08rem;
    }
  }
</style>
