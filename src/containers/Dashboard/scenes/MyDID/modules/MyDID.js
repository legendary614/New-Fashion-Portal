import types from './mutation-types'

const state = {
	myDIDData: [
		{
			did: '1089767',
			group: 'TZBP',
			callForward: 'add',
			orderNo: '918767',
			didMrc: '0.01',
			stats: 'view',
			trunkGroup: '.19_test 158.69.203.19',
			e991: 'view',
			activationDate: '2016-10-25 22:51:34',
			status: 'ALLOCATED'
		},
		{
			did: '1089767',
			group: 'TZBP',
			callForward: 'add',
			orderNo: '918767',
			didMrc: '0.01',
			stats: 'view',
			trunkGroup: '.19_test 158.69.203.19',
			e991: 'view',
			activationDate: '2016-10-25 22:51:34',
			status: 'ALLOCATED'
		},
		{
			did: '1089767',
			group: 'TZBP',
			callForward: 'add',
			orderNo: '918767',
			didMrc: '0.01',
			stats: 'view',
			trunkGroup: '.19_test 158.69.203.19',
			e991: 'view',
			activationDate: '2016-10-25 22:51:34',
			status: 'ALLOCATED'
		}
	]
}

export default {
	state,
	actions: {},
	mutations: {},
	getters: {
		getMyDIDData () {
			return state.myDIDData
		}
	}
}