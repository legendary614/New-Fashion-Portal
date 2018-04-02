import types from './mutation-types'

const state = {
	buy: [
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '1.05',
            monthlyFee: '1.05',
            perMinuteFee: '1.05'
        },
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '1.05',
            monthlyFee: '1.05',
            perMinuteFee: '1.05'
        },
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '1.25',
            monthlyFee: '1.25',
            perMinuteFee: '1.2'
        },
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '1.15',
            monthlyFee: '1.15',
            perMinuteFee: '1.15'
        },
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '1',
            monthlyFee: '4',
            perMinuteFee: '5'
        },
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '12',
            monthlyFee: '33',
            perMinuteFee: '12'
        },
        {
            number: '3024446910',
            state: 'DE',
            setupFee: '1.05',
            monthlyFee: '1.05',
            perMinuteFee: '1.5'
        }
        
    ],
    totalPrice: ''
}

export default {
	state,
	actions: {
		addToCart({ commit }, payload) {
			commit(types.ADD_TO_CART, { ...payload })
		}
	},
	mutations: {
		[types.ADD_TO_CART] (state, action) {
			let selectedNumber = state.buy[action.index]

			state.totalPrice = parseFloat(selectedNumber.setupFee) + parseFloat(selectedNumber.monthlyFee) + parseFloat(selectedNumber.perMinuteFee)
		}
	},
	getters: {
		getBuyData () {
			return state.buy
		},
		getTotalPrice () {
			return state.totalPrice
		}
	}
}