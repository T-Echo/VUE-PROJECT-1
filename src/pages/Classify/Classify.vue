<template>
  <div>
    <!--头部-->
    <header class="header">
      <div class="header-top">
        <div class="header-search">
        <span class="search-icon">
          <i class="iconfont icon-icon8"></i>
        </span>
          <span class="search-title">搜索商品, 共20056款好物</span>
        </div>
      </div>
    </header>
    <!--内容区-->
    <section class="section">
      <div class="goods-classify">
        <ul class="goods-classify-list">
          <li class="goods-classify-item" :class="{active: addActive === index}" @click="addActive=index" v-for="(category,index) in classify" :key="index">{{category.name}}</li>
        </ul>
      </div>
      <div class="goods-list">
        <div class="banner"></div>
        <div class="goods">
          <ul class="goods-ul">
            <li class="goods-item" v-for="(goodsList,index) in classifyGoods.subCateList" :key="index">
              <div class="goods-item-pic">
                <img class="pic" :src="goodsList.bannerUrl" alt="">
              </div>
              <div class="goods-item-text">
                <span class="text">{{goodsList.name}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        addActive: 0 // 分类列表动态样式
      }
    },
    mounted(){
      this.$store.dispatch('getClassify')
    },
    computed: {
      ...mapState({
        classify: state => state.classify.classify
      }),
      classifyGoods(){
        return this.classify.find((item,index) => index === this.addActive)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
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
    .header-top
      position relative
      z-index 60
      width 100%
      height 87.97px
      padding .21333rem .4rem
      display flex
      align-items center
      .header-search
        width 100%
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
  /*内容区*/
  .section
    width 100%
    //height 100%
    position absolute
    top 88px
    display flex
    &::after
      display block
      content ''
      width 100%
      height 1.30667rem
    .goods-classify
      width 2.16rem
      .goods-classify-list
        width 2.16rem
        padding-top .53333rem
        .goods-classify-item
          display block
          color #333
          width 100%
          height .66667rem
          line-height .66667rem
          font-size .37333rem
          text-align center
          margin-top .53333rem
          &:nth-child(1)
            margin-top 0
          &.active
            color #b4282d
            position relative
            &::before
              display block
              content ''
              position absolute
              left 0
              top 0
              width 4px
              height .66667rem
              background-color #b4282d
    .goods-list
      width 588px
      padding .4rem .4rem .28rem
      .banner
        width 588px
        height 2.56rem
        background-image url("http://yanxuan.nosdn.127.net/38b49a2863971efec7ec9b6ad3c0f96a.png?imageView&thumbnail=0x196&quality=75")
        background-repeat no-repeat
        background-size padding
        margin-bottom .42667rem
        border-radius 4px
      .goods
        width 100%
        .goods-ul
          width 100%
          display flex
          flex-wrap wrap
          justify-content space-between
          padding-right .4rem
          .goods-item
            width 1.92rem
          .goods-item-pic
            width 100%
            height 1.92rem
            .pic
              width 100%
              height 100%
          .goods-item-text
            width 100%
            height .96rem
            font-size .32rem
            text-align center
            line-height .48rem
</style>
