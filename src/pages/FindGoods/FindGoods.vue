<template>
  <div class="findgoods">
    <!--头部-->
    <header class="header">
      <div class="header-top">
        <div class="home" @click="$router.replace('/msite')">
          <i class="iconfont icon-shouye1"></i>
        </div>
        <div class="header-title">
          <p class="find active">发现</p>
          <p class="find">甄选家</p>
        </div>
        <div class="header-more">
          <span class="search">
            <i class="iconfont icon-icon8"></i>
          </span>
          <span class="cart">
            <i class="iconfont icon-gouwuche"></i>
          </span>
        </div>
      </div>
      <div class="header-bottom">
        <ul class="nav-list">
          <li class="nav-item" :class="{active:addActive === index}" @click="addActive = index" v-for="(tab,index) in shiwuTab" :key="index">{{tab.tabName}}</li>
        </ul>
      </div>
    </header>
    <!--内容区-->
    <section class="section">
      <div class="find" v-for="(shiwuItem,index) in shiwuList" :key="index">
        <!--选妹-->
        <div class="find-shops">
          <div class="find-top">
            <span class="avarta">
              <img class="avarta-pic" src="https://yanxuan.nosdn.127.net/a911393b603a87e74824290f54b37b24.png?imageView&quality=65&thumbnail=56y56" alt="">
            </span>
            <span class="username">选妹</span>
          </div>
          <p class="find-title">网易CEO丁磊的年度好货推荐，全场超低三石福利价！低至50%Off</p>
          <div class="find-middle">
            <img class="find-middle-pic" src="https://yanxuan.nosdn.127.net/d4b80051264bd13dac9e9f07a77f46ff.jpg?imageView&quality=65&thumbnail=690y376" alt="">
          </div>
          <div class="find-bottom">
          <span class="visited-icon">
            <i class="iconfont icon-yidu"></i>
          </span>
            <span class="title">25.7k人看过</span>
          </div>
        </div>
        <!--推荐商家-->
        <div class="find-person">
          <div class="person-info">
            <div class="person-text">
              <div class="user">
              <span class="avarta">
                <img class="avarta-pic" src="https://yanxuan.nosdn.127.net/3afb99e4d185d522d32a6642c9cafb3d.png?imageView&quality=65&thumbnail=56y56" alt="">
              </span>
                <span class="u-name">海外组：小嗨</span>
              </div>
              <div class="title">满19元就有赠品，这份<br/>来自严选海外的新年礼物请查收</div>
              <p class="desc">严选海外超走心新年礼</p>
              <div class="visited">
              <span class="visited-icon">
                <i class="iconfont icon-yidu"></i>
              </span>
                <span class="visited-title">25.7k人看过</span>
              </div>
            </div>
            <div class="person-pic">
              <img class="person-img" src="https://yanxuan.nosdn.127.net/c6dcc217368331eee66a5de630fbe0a8.jpg?imageView&quality=65&thumbnail=272y272" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    data(){
      return {
        addActive: 0
      }
    },
    mounted(){
      this.$store.dispatch('getShiwuTab')
      this.$store.dispatch('getShiwuList')
    },
    computed: {
      ...mapState({
        shiwuTab: state => state.shiwu.shiwuTab,
        shiwuList: state => state.shiwu.shiwuList
      }),
      shiwuXuanmei(){

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .findgoods
    width 100%
    position relative
    .header
      position fixed
      top 0
      left 0
      width 100%
      height 172px
      background #fafafa
      .header-top
        position relative
        width 100%
        height 100px
        padding 0 26px 0 24px
        border-bottom 1px solid #d9d9d9
        text-align center
        display flex
        color #7F7F7F
        .home
          width 46px
          height 100px
          text-align center
          .icon-shouye1
            font-size 46px
        .header-title
          width 320px
          height 100%
          display flex
          font-size 28px
          margin 0 auto
          line-height 100%
          justify-content center
          align-items center
          .find
            padding 0 16px
            &.active
              font-size 40px
              color #b4282d
              font-weight bold
        .header-more
          width 141px
          height 100%
          position absolute
          right 24px
          top 0
          text-align center
          .search
            width 62px
            height 100%
            .icon-icon8
              font-size 46px
          .cart
            width 62px
            height 100%
            .icon-gouwuche
              font-size 46px

      .header-bottom
        width 100%
        height 92px
        border-bottom 1px solid #d9d9d9
        padding-bottom 20px
        .nav-list
          width 100%
          height 100%
          display flex
          justify-content space-around
          .nav-item
            height 100%
            line-height 72px
            font-size 28px
            color #7F7F7F
            padding 0 8px
            margin 0 20px
            &.active
              color #B4282D
              border-bottom 4px solid #B4282D
    .section
      width 100%
      height 100%
      margin-top 172px
      padding-top .5px
      background #eee
      .find
        width 100%
        .find-shops
          width 100%
          height 677.78px
          padding 36px 30px
          background #fff
          margin 20px 0
          .find-top
            width 100%
            height 56px
            margin-bottom 24px
            font-size 28px
            color #333
            line-height 36px
            display flex
            .avarta
              width 56px
              height 56px
              border 1px solid #d9d9d9
              margin-right 12px
              .avarta-pic
                width 100%
                height 100%
                border-radius 50%
            .username
              line-height 56px
          .find-title
            width 100%
            font-size 36px
            color #333
            line-height 52px
            margin -8px 0 16px 0
          .find-middle
            width 100%
            height 376px
            margin-bottom 20px
            .find-middle-pic
              width 100%
              height 100%
              border-radius 8px
          .find-bottom
            width 100%
            height 33.78px
            display flex
            color #999
            text-align center
            align-items center
            .visited-icon
              display block
              width 28px
              height 20px
              line-height 20px
              .icon-yidu
                font-size 16px
            .title
              font-size 24px
              line-height 32px
        .find-person
          width 100%
          height 336px
          padding 32px 30px
          background #fff
          margin 20px 0
          .person-info
            width 100%
            height 100%
            display flex
            justify-content space-between
            .person-text
              width 400px
              height 100%
              .user
                display flex
                width 100%
                height 56px
                font-size 28px
                color #333
                line-height 36px
                .avarta
                  width 56px
                  height 56px
                  margin-right 12px
                  .avarta-pic
                    width 100%
                    height 100%
                    border-radius 50%
                .u-name
                  line-height 56px

              .title
                padding-top 32px
                width 100%
                height 122px
                line-height 44px
                font-size 36px
                color #333
                overflow hidden
                white-space nowrap
                text-overflow ellipsis

              .desc
                width 100%
                height 48px
                padding-top 8px
                line-height 44px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                font-size 28px
                color #7f7f7f
              .visited
                width 100%
                height 33.78px
                margin-top 18px
                display flex
                .visited-icon
                  display block
                  width 28px
                  height 20px
                  line-height 20px
                  .icon-yidu
                    font-size 16px
                .visited-title
                  font-size 24px
                  line-height 32px
                  color #999

            .person-pic
              width 272px
              height 272px
              .person-img
                width 100%
                height 100%
                border-radius 8px
</style>
