<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>origination</span>. my orders</h2>
            <p>Manage all order activity. LNP order status "approved" still requires the number to be activiated. You may cancel or modify orders anytime, but once a FOC date is issued, please make sure you communicate with us if the change required is on the same date.</p>
        </div>
        <div class="container-content">
            <div class="filter-box">
                <div class="left-side-div">
                    <p class="display-p">Display:</p>
                    <appoptions :optionData="myOrderOptions" :className="'export-select'"></appoptions>
                    <p class="display-p">records</p>
                    <appoptions :optionData="myOrderActionOptions" :className="'action-select export-select'"></appoptions>
                </div>
                <div class="csv-content">
                    <p>CSV</p>
                    <div class="csv-img"></div>
                </div>
                <input type="text" placeholder="Search" class="search-input">
            </div>
            <div class="billing-activity-table-content">
                <table>
                    <tr>
                        <th>
                            <div class="checkbox">
                                <input type="checkbox" id="checkAll" value="1" name="" />
                                <label for="checkAll"></label>
                            </div>
                        </th>
                        <th>ORDER NO</th>
                        <th>DATE/TIME <i class="fa fa-angle-up date-time-i" aria-hidden="true"></i></th>
                        <th>AMOUNT</th>
                        <th>TRUNK GROUP/RESOURCES</th>
                        <th>ORDER TYPE</th>
                        <th>DETAILS</th>
                        <th>STATUS</th>
                    </tr>
                    <tr v-for="(data, index) in myOrdersData">
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" value="1" id="checkboxMon1" name="" />
                                <label for="checkboxMon1"></label>
                            </div>
                        </td>
                        <td>
                            <a @click="myOrdersPopUp(index)" class="did-a">{{ data.orderNo }}</a>
                        </td>
                        <td>{{ data.dateTime }}</td>
                        <td>${{ data.amount }}</td>
                        <td>{{ data.trunkGroups }}</td>
                        <td>{{ data.orderType }}</td>
                        <td>
                            <div class="view-td"></div>
                        </td>
                        <td>
                            <a href=""><button class="allocated-btn">{{ data.status }}</button></a>
                        </td>
                    </tr>
                    
                </table>
            </div>
            <div class="info-steps contact-table-steps">
                <a href=""><button class="arrow-left"></button></a>
                <button class="table-page-number">10</button>
                <a href=""><button class="arrow-right arrow-right-disabled"></button></a>
            </div>
        </div>
        <div class="pop-up-window-background" v-if="myOrdersPopUpActivated"></div>
        <order :visible="myOrderVisible" :data="myOrdersSelectedNumber" :back="myOrdersBack"></order>
    </div>
</template>
<script type="text/javascript">

	import Order from './Order/Order'
    import Option from '@/components/Option/Option'

    import { mapGetters } from 'vuex'

	let myOrders = {
		myOrderVisible: false,
		myOrdersPopUpActivated: false,
        myOrderOptions: {
            selected: '10',
            options: ['11', '12'],
            visible: false
            
        },
        myOrderActionOptions: {
            selected: 'Actions',
            options: ['Actions1', 'Actions2'],
            visible: false
            
        }
	}
	export default {
		data () {
			return myOrders
		},
		mounted () {
			document.getElementById('dashboard-main').className = 'my-orders-main'
		},
        methods: {
            myOrdersPopUp (index) {
                this.$store.dispatch('myOrdersPopUp', { index: index })
                this.myOrderVisible = !this.myOrderVisible
                this.myOrdersPopUpActivated = !this.myOrdersPopUpActivated
            },
            myOrdersBack () {
                this.myOrderVisible = !this.myOrderVisible
                this.myOrdersPopUpActivated = !this.myOrdersPopUpActivated
            }
        },
		components: {
			'order': Order,
            'appoptions': Option
		},
        computed: {
            ...mapGetters({
                myOrdersData: 'getMyOrdersData',
                myOrdersSelectedNumber: 'getMyOrdersSelectedNumber'
            })
        }
	}
</script>
<style>
	@import './MyOrders.scss';
</style>