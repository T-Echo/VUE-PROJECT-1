import Mock from 'mockjs'
import cateList from './cateList.json'
import fenlei from './fenlei_zhuanqu.json'
import shouye_data from './shouye_data.json'
import shiwuTab from './shiwuTab.json'
import shiwuList from './shiwuList.json'

// 首页导航条
Mock.mock('/kingKongModule', {code:0,data:shouye_data.kingKongModule})
Mock.mock('/msite',{code:0,data:shouye_data})
Mock.mock('/fenlei',{code:0,data:fenlei.categoryL1List})
Mock.mock('/shiwutab',{code:0,data:shiwuTab.data})
Mock.mock('/shiwulist',{code:0,data:shiwuList.data})
