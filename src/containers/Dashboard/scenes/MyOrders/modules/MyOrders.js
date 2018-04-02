import types from './mutation-types'

const state = {
	myOrdersData: [
		{
			orderNo: '1089767',
			dateTime: '2017-01-04 18:04:13',
			amount: '0.27',
			trunkGroups: 'opentact/149.56.96.236',
			orderType: 'new',
			details: '',
			status: 'APPROVED'
		},
		{
			orderNo: '1089767',
			dateTime: '2017-01-04 18:04:13',
			amount: '0.27',
			trunkGroups: 'opentact/149.56.96.236',
			orderType: 'new',
			details: '',
			status: 'APPROVED'
		},
		{
			orderNo: '1089767',
			dateTime: '2017-01-04 18:04:13',
			amount: '0.27',
			trunkGroups: 'opentact/149.56.96.236',
			orderType: 'new',
			details: '',
			status: 'APPROVED'
		},
		{
			orderNo: '1089767',
			dateTime: '2017-01-04 18:04:13',
			amount: '0.27',
			trunkGroups: 'opentact/149.56.96.236',
			orderType: 'new',
			details: '',
			status: 'APPROVED'
		},
		{
			orderNo: '1089767',
			dateTime: '2017-01-04 18:04:13',
			amount: '0.27',
			trunkGroups: 'opentact/149.56.96.236',
			orderType: 'new',
			details: '',
			status: 'APPROVED'
		}
	],
	myOrdersSelectedNumber: []
}

export default {
	state,
	actions: {
		myOrdersPopUp({ commit }, payload) {
			
			commit(types.MY_ORDERS_POPUP, { ...payload })
		}
	},
	mutations: {
		[types.MY_ORDERS_POPUP] (state, action) {
			state.myOrdersSelectedNumber = state.myOrdersData[action.index]
		}
	},
	getters: {
		getMyOrdersData () {
			return state.myOrdersData
		},
		getMyOrdersSelectedNumber () {
			return state.myOrdersSelectedNumber
		}
	}
}