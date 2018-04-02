import Vue from 'vue'
import Vuex from 'vuex'
import * as Cookies from 'js-cookie'

import Home from './containers/Home/modules/Home'
import ShopByCategory from './containers/Home/scenes/ShopByCategory/modules/ShopByCategory'
import BuyUsNumber from './containers/Home/scenes/buyUsNumber/modules/BuyUsNumber'
import OrderReview from './containers/Home/scenes/OrderReview/modules/OrderReview'
import Order from './containers/Home/scenes/Order/modules/Order'

import DashboardMain from './containers/Dashboard/scenes/DashboardMain/modules/DashboardMain'
import MyOrders from './containers/Dashboard/scenes/MyOrders/modules/MyOrders'
import TrunkMain from './containers/Dashboard/scenes/TrunkMain/modules/TrunkMain'
import EditTrunk from './containers/Dashboard/scenes/EditTrunk/modules/EditTrunk'
import MyDID from './containers/Dashboard/scenes/MyDID/modules/MyDID'

import Login from './components/Login/modules/Login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: Home,
    shopByCategory: ShopByCategory,
    buyUsNumber: BuyUsNumber,
    orderReview: OrderReview,
    order: Order,
    dashboardMain: DashboardMain,
    myOrders: MyOrders,
    trunkMain: TrunkMain,
    editTrunk: EditTrunk,
    myDID: MyDID,
    login: Login
  }

})
