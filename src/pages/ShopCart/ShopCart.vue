<template>
  <div class="shopCart">
    <!--头部-->
    <header class="header">
      <div class="header-title">
        购物车
      </div>
      <div class="header-text">领券</div>
    </header>
    <!--内容区-->
    <section class="section">
      <!--品质保证-->
      <div class="service-policies">
        <ul class="policies-list">
          <li class="policies-item">
            <span class="policy-icon"></span>
            <span class="policy">30天无忧退货</span>
          </li>
          <li class="policies-item">
            <span class="policy-icon"></span>
            <span class="policy">48小时快速退款</span>
          </li>
          <li class="policies-item">
            <span class="policy-icon"></span>
            <span class="policy">满88元免邮费</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*头部*/
  .header
    width 100%
    height 88px
    background #fff
    border-bottom 1px solid #d9d9d9
    position fixed
    top 0
    left 0
    z-index 50
    .header-title
      width 100%
      height 100%
      text-align center
      line-height 88px
      font-size .48rem
    .header-text
      position absolute
      top 50%
      right .8rem
      font-size .4rem
      transform translateY(-50%)
      color #B4282D

  .section
    width 100%
    background-color #f4f4f4
    margin-top 88px
    .service-policies
      width 100%
      height .93333rem
      padding 0 .4rem
      .policies-list
        width 100%
        height 100%
        display flex
        justify-content space-between
        align-items center
        .policies-item
          font-size .32rem
          color #666
          display flex
          justify-content space-between
          align-items center
          .policy-icon
            display block
            width .13333rem
            height .13333rem
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-1d7541974f.png")
            background-repeat no-repeat
            background-size cover
            margin-right 5px
</style>
