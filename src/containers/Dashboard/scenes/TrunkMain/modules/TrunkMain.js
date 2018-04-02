import types from './mutation-types'

const state = {
  trunkGroupsData: [
    {
      orderId: '1089767',
      title: '.19_test',
      primaryIp: '158.69.203.19',
      billingType: 'metered',
      payment: '',
      settings: '',
      status: 'ACTIVE'
    },
    {
      orderId: '1019767',
      title: '.11_test',
      primaryIp: '158.69.203.19',
      billingType: 'metered',
      payment: '',
      settings: '',
      status: 'ACTIVE'
    },
    {
      orderId: '1189767',
      title: '.15_test',
      primaryIp: '158.69.203.19',
      billingType: 'metered',
      payment: '',
      settings: '',
      status: 'ACTIVE'
    }
  ]
}

export default {
  state,
  actions: {},
  mutatuons: {},
  getters: {
    getTrunkGroupsData () {
      return state.trunkGroupsData
    }
  }
}
