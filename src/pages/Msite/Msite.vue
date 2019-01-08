<template>
  <div>
    <!--头部-->
    <header class="header">
      <div class="header-top">
        <h1 class="logo">
          <a href="javascript:;" class="logo-a"></a>
        </h1>
        <div class="header-search">
          <span class="search-icon">
            <i class="iconfont icon-icon8"></i>
          </span>
          <span class="search-title">搜索商品, 共20056款好物</span>
        </div>
        <div class="login">登录</div>
      </div>
      <nav class="nav-wrap">
        <div class="goodsNav">
          <ul class="goodsNavList">
            <li class="goodsNavItem" :class="{active:addActive === index}" @click="setActive(index)" v-for="(item,index) in navList.kingKongList" :key="index">{{item.text}}</li>
          </ul>
        </div>
        <div class="toggleNav">
          <div class="linear"></div>
          <div class="toggle">
              <span class="toggle-rotate" :class="{on:isShowMask}" @click="isShowMask=!isShowMask"></span>
          </div>
        </div>
        <!--全部频道-->
        <div class="whole" v-show="isShowMask">
          <div class="whole-title">
            <span>全部频道</span>
          </div>
          <div class="whole-type">
            <ul class="whole-type-list">
              <li class="whole-type-item active">推荐</li>
              <li class="whole-type-item">居家</li>
              <li class="whole-type-item">鞋包配饰</li>
              <li class="whole-type-item">服装</li>
              <li class="whole-type-item">电器</li>
              <li class="whole-type-item">洗护</li>
              <li class="whole-type-item">饮食</li>
              <li class="whole-type-item">餐厨</li>
              <li class="whole-type-item">婴宣</li>
              <li class="whole-type-item">文体</li>
              <li class="whole-type-item">特色区</li>
            </ul>
          </div>
        </div>
        <!--遮罩层-->
        <div class="nav-mask" v-show="isShowMask" @click="isShowMask=!isShowMask"></div>
      </nav>
    </header>
    <!--内容区-->
    <div class="content">
      <!--轮播区域-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in msite.focusList" :key="index">
            <div class="carousel-wrap">
              <img :src="item.picUrl" alt="">
            </div>
          </div>
        </div>
        <!--分页器-->
        <div class="swiper-pagination"></div>
      </div>
      <!--<div class="carousel-wrap">轮播图</div>-->
      <!--品质保证-->
      <div class="service-policies">
        <ul class="policies-list">
          <li class="policies-item" v-for="(item,index) in msite.policyDescList" :key="index">
            <span class="item-icon"></span>
            <span class="item-text">{{item.desc}}</span>
          </li>
        </ul>
      </div>
      <!--商品区-->
      <div class="goods-wrap">
        <!--商品分类-->
        <div class="goods-classify">
          <ul class="classify-list">
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
              </div>
              <div class="item-title">居家</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" alt="">
              </div>
              <div class="item-title">鞋包配饰</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" alt="">
              </div>
              <div class="item-title">服装</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" alt="">
              </div>
              <div class="item-title">电器</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" alt="">
              </div>
              <div class="item-title">婴童</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" alt="">
              </div>
              <div class="item-title">饮食</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" alt="">
              </div>
              <div class="item-title">洗护</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" alt="">
              </div>
              <div class="item-title">餐厨</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" alt="">
              </div>
              <div class="item-title">文体</div>
            </li>
            <li class="classify-item">
              <div class="item-pic">
                <img class="pic" src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" alt="">
              </div>
              <div class="item-title">特色区</div>
            </li>
          </ul>
        </div>
        <!--CEO-->
        <div class="ceo">
          <img class="ceo-pic" src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
        </div>
        <!--购物导航-->
        <div class="shopping-guide-modules">
          <ul class="guide-list">
            <li class="guide-item" v-for="(shoppingGuide,index) in msite.sceneLightShoppingGuideModule" :key="index">
              <span class="guide-item-title">{{shoppingGuide.styleItem.title}}</span>
              <span class="guide-item-text">{{shoppingGuide.styleItem.desc}}</span>
              <div class="guide-item-pics">
                <div class="guide-item-leftpic">
                  <img class="leftpic" :src="shoppingGuide.styleItem.picUrlList[0]" alt="leftpic">
                </div>
                <div class="guide-item-rightpic">
                  <img class="rightpic" :src="shoppingGuide.styleItem.picUrlList[1]" alt="rightpic">
                </div>
              </div>
            </li>
          </ul>
        </div>
        <!--私人定制-->
        <div class="personal-tailor">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        addActive: 0, // 头部导航动态样式
        isShowMask: false, // 遮罩层是否显示
      }
    },
    mounted(){
      this.$store.dispatch('getNavList',() => {
        this.$nextTick(() => {
          new BScroll('.goodsNav',{
            click: true,
            scrollX: true
          })
        })
      })

      this.$store.dispatch('getMsite',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true, // 循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            },
            autoplay: true,//可选选项，自动滑动
          })
        })
      })
    },
    computed: {
      ...mapState({
        navList: state => state.msite.navList,
        msite: state => state.msite.msite
      })
    },
    methods: {
      setActive(index){
        this.addActive = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  /*内容区头部*/
  .header
    width 100%
    height 148px
    background #fff
    border-bottom 1px solid #d9d9d9
    position fixed
    top 0
    left 0
    z-index 50
    .header-top
      position relative
      z-index 60
      width 100%
      height 87.97px
      padding .21333rem .4rem
      display flex
      align-items center
      .logo
        width 1.84rem
        height .53333rem
        margin-right .26667rem
        .logo-a
          display block
          background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-size cover
          width 1.84rem
          height .53333rem
      .header-search
        width 442.02px
        height .74667rem
        border-radius .10667rem
        background-color #ededed
        font-size .37333rem
        display flex
        justify-content center
        align-items center
        .search-icon
          // display block
          width .37333rem
          height .37333rem
          margin-right .13333rem
          line-height 31px
          .icon-icon8
            font-size .45rem
        .search-title
          color #666
      .login
        width .98667rem
        height .53333rem
        line-height .53333rem
        text-align center
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        margin-left .21333rem
        font-size .32rem
    .nav-wrap
      position relative
      width 100%
      height 60px
      background #fff
      padding-right 1.33333rem
      .goodsNav
        width 100%
        height 100%
        .goodsNavList
          width 1312px
          height 100%
          padding 0 .4rem
          clearFix()
          .goodsNavItem
            float left
            font-size .37333rem
            text-align center
            padding 0 .21333rem
            line-height .8rem
            color #333
            margin-left .26667rem
            &:nth-child(1)
              margin-left 0
            &.active
              position relative
              color #b4282d
              &:after
                content ''
                position absolute
                left 0
                bottom 0
                width 100%
                height 4px
                background-color #b4282d
      .toggleNav
        position absolute
        right 0
        top 0
        z-index 150
        width 159.98px
        height 100%
        display flex
        .linear
          width .8rem
          height .8rem
          background linear-gradient(90deg,rgba(255,255,255,0),#fff)
        .toggle
          width 1.33333rem
          height .8rem
          text-align center
          background #fff
          .toggle-rotate
            display block
            width .4rem
            height .4rem
            margin .2rem auto 0
            background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png")
            background-repeat no-repeat
            transition transform 0.3s
            &.on
              transform rotate(180deg)
      .whole
        width 100%
        height 371.95px
        position absolute
        top 0
        left 0
        z-index 100
        background #fff
        &.active
          display none
        .whole-title
          width 100%
          height .8rem
          line-height .8rem
          padding-left .4rem
          font-size .37333rem
        .whole-type
          width 100%
          height 287.953px
          padding-top .32rem
          .whole-type-list
            width 100%
            height 100%
            clearFix()
            .whole-type-item
              float left
              width 2rem
              height .74667rem
              line-height .74667rem
              text-align center
              margin-bottom .53333rem
              margin-left .4rem
              background #FAFAFA
              border 1px solid #CCC
              border-radius .05333rem
              font-size 24px
              &.active
                border 1px solid #b4282d
                color #b4282d
      .nav-mask
        position fixed
        z-index 45
        background rgba(0,0,0,.5)
        top 0
        left 0
        right 0
        bottom 0
        margin-top 87.97px
        &.active
          display none
  .content
    width 100%
    background-color #eee
    position absolute
    top 148px
    left 0
    &::after
      display block
      content ''
      width 100%
      height 1.30667rem
    /*轮播区域*/
    .carousel-wrap
      width 100%
      height 4.93333rem
      img
        width 100%
        height 100%
    /*品质保证*/
    .service-policies
      width 100%
      height .96rem
      color #B4282D
      background-color #fff
      .policies-list
        width 100%
        height .96rem
        padding 0 .4rem
        display flex
        align-items center
        .policies-item
          flex 1
          font-size 0
          .item-icon
            display inline-block
            vertical-align middle
            background-image url("http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png")
            background-repeat no-repeat
            background-size cover
            width .42667rem
            height .42667rem
          .item-text
            display inline-block
            vertical-align middle
            font-size .32rem
            margin-left .10667rem
            line-height .42667rem

    /*商品区*/
    .goods-wrap
      .goods-classify
        width 100%
        height 5.22667rem
        background #fff
        .classify-list
          width 100%
          height 5.22667rem
          display flex
          flex-wrap wrap
          padding-bottom .69333rem
          .classify-item
            flex 1
            width 1.46667rem
            height 2.08rem
            margin .13333rem .26667rem .12rem
            .item-pic
              width 1.46667rem
              height 1.46667rem
              .pic
                width 1.46667rem
                height 1.46667rem
                border-radius 18px
            .item-title
              font-size .32rem
              margin-top .13333rem
              text-align center
              line-height .48rem
              color #333333
      .ceo
        width 100%
        height 2.13333rem
        background-color #fff
        margin -1px 0
        .ceo-pic
          width 100%
          heihgt 100%
      .shopping-guide-modules
        width 100%
        height 575.95px
        padding .13333rem .4rem .4rem .34667rem
        margin-bottom .26667rem
        background #fff
        .guide-list
          width 100%
          height 100%
          display flex
          flex-wrap wrap
          .guide-item
            width 4.57333rem
            height 3.52rem
            margin .05333rem 0 0 .05333rem
            padding .26667rem 0 0 .26667rem
            border-radius .05333rem
            background-image url("https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png?imageView&thumbnail=343x264&quality=75")
            background-repeat no-repeat
            background-size cover
            .guide-item-title
              display block
              height 48px
              line-height 48px
              color #333333
              padding-left .13333rem
              font-size .42667rem
              font-family PingFangSC-Medium
            .guide-item-text
              display block
              height 36px
              line-height 36px
              color #7f7f7f
              padding-left .13333rem
              font-size .32rem

            .guide-item-pics
              display flex
              .guide-item-leftpic
                width 2rem
                height 2rem
                margin-right .05333rem
                .leftpic
                  width 2rem
                  height 2rem
              .guide-item-rightpic
                width 2rem
                height 2rem
                margin-right .05333rem
                .rightpic
                  width 2rem
                  height 2rem


</style>
