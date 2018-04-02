<template>
	<div class="dashboard-main">
		<div class="main-content">
	        <div class="container-head">
	            <h2><span></span>dashboard.</h2>
	        </div>
	        <div class="statistic-notification-menu">
	            <div class="item statistics">
	                <div class="item-img"></div>
	                <p>statistics</p>
	            </div>
	            <div class="item notifications">
	                <div class="item-img"></div>
	                <p>notifications</p>
	            </div>
	            <div class="item arguments">
	                <div class="item-img"></div>
	                <p>arguments</p>
	            </div>
	            <div class="item ordering">
	                <div class="item-img"></div>
	                <p>ordering</p>
	            </div>
	            <div class="item invoices">
	                <div class="item-img"></div>
	                <p>invoices</p>
	            </div>
	            <div class="item edit">
	                <div class="item-img"></div>
	                <p></p>
	            </div>
	        </div>
	        <div class="row-content">
	            <div class="blue-item">
	                <span>Balance due</span>
	                <h2>$15.05</h2>
	                <div class="bottom-content">
	                    <p>top up balance</p>
	                </div>
	            </div>
	            <div class="blue-item">
	                <div class="buy-number-img"></div>
	                <h4>buy numbers</h4>
	            </div>
	            <div class="blue-item">
	                <div class="port-numbers"></div>
	                <h4>port numbers</h4>
	            </div>
	        </div>
	        <div class="row-content">
	            <div class="item add-ip-content">
	                <p>Setup Termination trunk</p>
	                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
	                <a href="" class="add-ip-a">Add your IP</a>
	            </div>
	            <div class="item conversation-content">
	                <p class="conversation-p">conversation decks  (<span>{{ conversationDeckCount }}</span>)</p>
	                <div class="conversation-div">
	                    <span v-for="deck in conversationDeck">+1 Conversational ({{ deck.code }})</span>
	                </div>
	                <p>dealer descks  (0)</p>
	                <p>Agreement library</p>
	            </div>
	            <div class="item view-coverage-content">
	                <div>
	                    <p class="view-coverage">View coverage</p>
	                </div>
	                <div>
	                    <p class="origination-rates">Origination rates</p>
	                </div>
	                <div>
	                    <p class="account-setup">Account setup</p>
	                </div>
	            </div>
	        </div>
	        <hr class="black-hr">
	        <div class="container-content">
	            <div class="first-column">
	                <h4 class="recrent-h4">Recent transactions <span>View all</span></h4>
	                <div class="filter-box">
	                    <div class="left-side-div">
	                        <p class="display-p">Display:</p>
	                       	<appoptions :optionData="transactionOptions"></appoptions>
	                        <p class="display-p">records</p>
	                    </div>
	                    <div class="csv-content">
	                    	<appoptions :optionData="actionOptions" :className="'action-select'"></appoptions>
	                    </div>
	                </div>
	                <div class="billing-activity-table-content">
	                    <table>
	                        <tr>
	                            <th>DATE</th>
	                            <th>ACTIVITY</th>
	                            <th>DEBIT</th>
	                            <th>CREDIT</th>
	                            <th>BALANCE</th>
	                        </tr>
	                        <tr v-for="data in recentTransactions">
	                            <td>{{ data.date }}</td>
	                            <td>{{ data.activity }}</td>
	                            <td>${{ data.debit }}</td>
	                            <td>${{ data.credit }}</td>
	                            <td>${{ data.balance }}</td>
	                        </tr>
	                    </table>
	                </div>
	                <div class="info-steps contact-table-steps">
	                    <a href=""><button class="arrow-left"></button></a>
	                    <button class="table-page-number">10</button>
	                    <a href=""><button class="arrow-right arrow-right-disabled"></button></a>
	                </div>
	            </div>
	            <div class="second-column">
	                <div class="inbound-outbound-calls">
	                    <h4>active inbound calls</h4>
	                    <p>(origination)</p>
	                    <span>{{ inBoundCalls }}</span>
	                </div>
	                <div class="inbound-outbound-calls">
	                    <h4>active inbound calls</h4>
	                    <p>(origination)</p>
	                    <span>{{ outBoundCalls }}</span>
	                </div>
	            </div>
	        </div>
	        <hr class="black-hr">
	        <div class="container-content statistic-content">
	            <h4 class="recrent-h4">Statistics</h4>
	            <div class="filter-box">
	                <div class="left-side-div">
	                    <p class="display-p">Display:</p>
	                   	<appoptions :optionData="statisticOptions"></appoptions>
	                    <p class="display-p">records</p>
	                </div>
	                <input type="text" placeholder="Search" class="search-input">
	            </div>
	            <div class="billing-activity-table-content">
	                <table>
	                    <tr>
	                        <th>DID NUMBER</th>
	                        <th>CALL COUNT</th>
	                        <th>MINUTES</th>
	                        <th>NON ZERO CALLS</th>
	                        <th>COST</th>
	                    </tr>
	                    <tr v-for="data in statistics">
	                        <td>{{ data.didNumber }}</td>
	                        <td>{{ data.callCount }}</td>
	                        <td>{{ data.minutes }}</td>
	                        <td>{{ data.nonZeroCalls }}</td>
	                        <td>${{ data.cost }}</td>
	                    </tr>
	                </table>
	            </div>
	            <div class="info-steps contact-table-steps">
	                <a href=""><button class="arrow-left"></button></a>
	                <button class="table-page-number">10</button>
	                <a href=""><button class="arrow-right arrow-right-disabled"></button></a>
	            </div>
	        </div>
	    </div>
	</div>
</template>
<script type="text/javascript">

	import { mapGetters } from 'vuex'
	import Option from '@/components/Option/Option'
	let dashboardMain = {
		statisticOptions: {
            selected: '10',
            options: ['10', '11', '12'],
            visible: false
       	},
       	transactionOptions: {
            selected: '10',
            options: ['10', '11', '12'],
            visible: false
        },
       	actionOptions: {
            selected: 'Actions',
            options: ['Actions', 'Actions', 'Actions'],
            visible: false
        }
	}

	export default {
		data () {
			return dashboardMain
		},
		computed: {
			...mapGetters({
				recentTransactions: 'getRecentTransactions',
				statistics: 'getDashboardStatistics',
				inBoundCalls: 'getInBoundCalls',
				outBoundCalls: 'getOutBoundCalls',
				conversationDeck: 'getConversationDecks',
				conversationDeckCount: 'getConversationDeckCount'
			})
		},
		components: {
			'appoptions': Option
		}
	}
</script>
<style>
	@import './DashboardMain.scss';
</style>