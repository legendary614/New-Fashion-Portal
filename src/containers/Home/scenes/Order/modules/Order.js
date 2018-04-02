import types from './mutation-types'

const state = {
	orderNo: '189786',
	orderData: [
		{
			trunk: '.19test',
			primaryIp: '198.162.11.11',
			sessions: 'Open',
			billingType: 'Metered'
		},
		{
			trunk: '.19test',
			primaryIp: '198.162.11.11',
			sessions: 'Open',
			billingType: 'Metered'
		},
		{
			trunk: '.19test',
			primaryIp: '198.162.11.11',
			sessions: 'Open',
			billingType: 'Metered'
		}
	]
}

export default {
	state,
	actions: {},
	mutations: {},
	getters: {
		getOrderData () {
			return state.orderData
		}
	}
}