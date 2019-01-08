import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import FindGoods from '../pages/FindGoods/FindGoods.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Profile from '../pages/Profile/Profile.vue'


export default [
  {
    path: '/msite',
    component: Msite,
    meta:{
      isFooterShow: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta:{
      isFooterShow: true
    }
  },
  {
    path: '/findGoods',
    component: FindGoods,
    meta:{
      isFooterShow: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta:{
      isFooterShow: true
    }
  },
  {
    path: '/profile',
    component: Profile
  },

  {
    path: '/',
    redirect: '/msite'
  }
]
