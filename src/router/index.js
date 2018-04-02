import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/containers/Home/Home'

import Dashboard from '@/containers/Dashboard/Dashboard'
import DashboardMain from '@/containers/Dashboard/scenes/DashboardMain/DashboardMain'
import CheckPortability from '@/containers/Dashboard/scenes/CheckPortability/CheckPortability'
import CallRecords from '@/containers/Dashboard/scenes/CallRecords/CallRecords'
import MyTrunk from '@/containers/Dashboard/scenes/MyTrunk/MyTrunk'
import TrunkMain from '@/containers/Dashboard/scenes/TrunkMain/TrunkMain'
import EditTrunk from '@/containers/Dashboard/scenes/EditTrunk/EditTrunk'
import MyDID from '@/containers/Dashboard/scenes/MyDID/MyDID'
import E991Numbers from '@/containers/Dashboard/scenes/E991Numbers/E991Numbers'
import MyOrders from '@/containers/Dashboard/scenes/MyOrders/MyOrders'
import TransferNumbers from '@/containers/Dashboard/scenes/TransferNumbers/TransferNumbers'
import BillingCheckout from '@/containers/Dashboard/scenes/BillingCheckout/BillingCheckout'
import BillingInvoices from '@/containers/Dashboard/scenes/BillingInvoices/BillingInvoices'
import BillingPaymentHistory from '@/containers/Dashboard/scenes/BillingPaymentHistory/BillingPaymentHistory'
import BillingPayments from '@/containers/Dashboard/scenes/BillingPayments/BillingPayments'
import BillingActivity from '@/containers/Dashboard/scenes/BillingActivity/BillingActivity'

import Register from '@/components/Register/Register'
import Login from '@/components/Login/Login'

import ShopByCategory from '@/containers/Home/scenes/ShopByCategory/ShopByCategory'

import OrderReview from '@/containers/Home/scenes/OrderReview/OrderReview'
import Order from '@/containers/Home/scenes/Order/Order'
import OrderNewNumber from '@/containers/Home/scenes/OrderNewNumber/OrderNewNumber'
import BuyUsNumber from '@/containers/Home/scenes/buyUsNumber/buyUsNumber'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          component: DashboardMain
        },
        {
          path: '/dashboard/check-portability',
          component: CheckPortability
        },
        {
          path: '/dashboard/call-records',
          component: CallRecords
        },
        {
          path: '/dashboard/my-trunk-groups',
          component: MyTrunk,
          children: [
            {
              path: '/',
              component: TrunkMain
            },
            {
              path: '/dashboard/my-trunk-groups/edit-trunk',
              component: EditTrunk
            }
          ]
        },
        {
          path: '/dashboard/my-did-numbers',
          component: MyDID
        },
        {
          path: '/dashboard/e991numbers',
          component: E991Numbers
        },
        {
          path: '/dashboard/my-orders',
          component: MyOrders
        },
        {
          path: '/dashboard/transfer-numbers',
          component: TransferNumbers
        },
        {
          path: '/dashboard/billing-invoices',
          component: BillingInvoices
        },
        {
          path: '/dashboard/billing-checkout',
          component: BillingCheckout
        },
        {
          path: '/dashboard/billing-activity',
          component: BillingActivity
        },
        {
          path: '/dashboard/payment-history',
          component: BillingPaymentHistory
        },
        {
          path: '/dashboard/payments',
          component: BillingPayments
        }
      ]
    },
    {
      path: '/buyUsNumber',
      name: 'buyUsNumber',
      component: BuyUsNumber
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/category/:title',
      name: 'category',
      component: ShopByCategory
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/buyUsNumber/orderReview',
      name: 'orderReview',
      component: OrderReview
    },
    {
      path: '/buyUsNumber/orderReview/order',
      name: 'order',
      component: Order
    },
    {
      path: '/orderNewNumber',
      name: 'orderNewNumber',
      component: OrderNewNumber
    },
    {
      path: '/billingCheckout',
      name: 'billingCheckout',
      component: BillingCheckout
    },
  ]
})
