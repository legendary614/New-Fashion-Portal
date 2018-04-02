import types from './mutation-types'

const state = {
	categoriesData: [
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
        {
            name: 'UPS Inc',
            state: 'DE',
            number: '829789786',
            categories: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered',
            description: 'In the web phone, we need to let user to press ## to get out of the call flow, and  when the other side answered'
        },
          
    ],

    // category free call slide
    freeCall: {}


}


export default {
	state,
	actions: {
	  	callForFree({ commit }, payload) {
	  		commit (types.CALL_FOR_FREE, { ...payload })
	  	}
	},
	mutations: {
	  	[types.SELECT_SLIDE] (state, action) {
	  		state.slide.selected = action.slide
	  	},
        [types.CALL_FOR_FREE] (state, action) {
            state.freeCall = state.categoriesData[action.index]
        }
	},
	getters: {
		getCategoriesData () {
	  		return state.categoriesData
	  	},
        getFreeCallNumber () {
            return state.freeCall
        }
	}
}
