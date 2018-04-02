import types from './mutation-types'

const state = {
	orderData: [
		{
			number: '3024446910',
			price: '1.05'
		},
		{
			number: '3024446911',
			price: '1.05'
		},
		{
			number: '3024446912',
			price: '1.05'
		}	
	]
}

export default {
	state,
	actions: {
		deleteNumber({ commit }, payload) {
			commit(types.DELETE_NUMBER, { ...payload })
		}
	},
	mutations: {
		[types.DELETE_NUMBER] (state, action) {
			let selectedNumber = state.orderData[action.index]
			let arrIndex = state.orderData.indexOf(selectedNumber)
			state.orderData.splice(arrIndex, 1)
		}
	},
	getters: {
		getOrderReviewData () {
			return state.orderData
		}
	}
}