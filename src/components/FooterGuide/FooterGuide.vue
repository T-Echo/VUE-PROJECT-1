<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/msite'}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye1"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-drawer2chouti"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/findgoods'}" @click="goTo('/findgoods')">
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/shopcart'}" @click="goTo('/shopcart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/profile'}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-icon-"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   @import "../../common/stylus/mixins.styl"
   .footer_guide
     top-border-1px(#e4e4e4)
     position fixed
     z-index 40
     left 0
     right 0
     bottom 0
     background-color #fff
     width 100%
     height 1.30667rem
     display flex
     .guide_item
       display flex
       flex 1
       text-align center
       flex-direction column
       align-items center
       margin 5px
       color #999999
       &.on
         color #b4282d
       span
         font-size .32rem
         margin-top 2px
         margin-bottom 2px
         .iconfont
           font-size .53333rem
</style>
