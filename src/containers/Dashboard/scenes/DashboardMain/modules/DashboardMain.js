import types from './mutation-types'

const state = {
	recentTransactions: [
		{
			date: '2017-04-02',
			activity: 'Invoice Applied - (Invoice#: 254612)',
			debit: '1.05',
			credit: '1.05',
			balance: '999.05'
		},
		{
			date: '2017-04-02',
			activity: 'Invoice Applied - (Invoice#: 254612)',
			debit: '1.05',
			credit: '1.05',
			balance: '999.05'
		},
		{
			date: '2017-04-02',
			activity: 'Invoice Applied - (Invoice#: 254612)',
			debit: '1.05',
			credit: '1.05',
			balance: '999.05'
		},
		{
			date: '2017-04-02',
			activity: 'Invoice Applied - (Invoice#: 254612)',
			debit: '1.05',
			credit: '1.05',
			balance: '999.05'
		},
		{
			date: '2017-04-02',
			activity: 'Invoice Applied - (Invoice#: 254612)',
			debit: '1.05',
			credit: '1.05',
			balance: '999.05'
		}
	],
	statistics: [
		{
			didNumber: '9807478257',
			callCount: '13',
			minutes: '01:04:51',
			nonZeroCalls: 'NA',
			cost: '890,51'
		},
		{
			didNumber: '9807478257',
			callCount: '13',
			minutes: '01:04:51',
			nonZeroCalls: 'NA',
			cost: '890,51'
		},
		{
			didNumber: '9807478257',
			callCount: '13',
			minutes: '01:04:51',
			nonZeroCalls: 'NA',
			cost: '890,51'
		},
		{
			didNumber: '9807478257',
			callCount: '13',
			minutes: '01:04:51',
			nonZeroCalls: 'NA',
			cost: '890,51'
		},
		{
			didNumber: '9807478257',
			callCount: '13',
			minutes: '01:04:51',
			nonZeroCalls: 'NA',
			cost: '890,51'
		}
	],
	inBoundCalls: 0,
	outBoundCalls: 0,
	conversationDeck: [
		{
			code: '8977'
		},
		{
			code: '8977'
		},
		{
			code: '8977'
		}
	]
}

export default {
	state,
	actions: {},
	mutations: {},
	getters: {
		getRecentTransactions () {
			return state.recentTransactions
		},
		getDashboardStatistics () {
			return state.statistics
		},
		getInBoundCalls () {
			return state.inBoundCalls
		},
		getOutBoundCalls () {
			return state.outBoundCalls
		},
		getConversationDecks () {
			return state.conversationDeck
		},
		getConversationDeckCount () {
			return state.conversationDeck.length
		}
	}
}