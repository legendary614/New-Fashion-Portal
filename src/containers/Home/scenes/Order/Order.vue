<template>
	<div class="Order">
		<hr class="black-hr">
        <div class="buy-us-number-content order-number-content">
            <div class="col-10">
                <div class="container-head">
                    <h2>order No: {{ this.$store.state.order.orderNo }}</h2>
                </div>
                <div class="container-content">
                    <div class="filter-box">
                        <div class="left-side-div">
                            <p class="display-p">Display:</p>
                            <appoptions :optionData="orderOptions" :className="'export-select'"></appoptions>
                            <p class="display-p">records</p>
                        </div>
                        <input type="text" placeholder="Search" class="search-input">
                    </div>
                    <div class="billing-activity-table-content">
                        <table>
                            <tr>
                                <th></th>
                                <th>TRUNK</th>
                                <th>PRIMARY IP</th>
                                <th>SESSIONS</th>
                                <th>BILLING TYPE</th>
                            </tr>
                            <tr v-for="data in orderData">
                                <td>
                                    <div class="check-circle"></div>
                                </td>
                                <td>{{ data.trunk }}</td>
                                <td>{{ data.primaryIp }}</td>
                                <td>{{ data.sessions }}</td>
                                <td>{{ data.billingType }}</td>
                            </tr>
                        </table>
                    </div>
                    <div class="bottom-content-total">
                        <p class="total-p">DID numbers total: <strong>$31,27</strong></p>
                        <p class="total-p setup-charges-p">Setup charges: <strong>$0,10</strong></p>
                        <a href=""><p class="cancel-btn">Continue selection</p></a>
                        <a href=""><button class="checkout-btn">Process order</button></a>
                    </div>
                </div>
            </div>
        </div>

	</div>
</template>
<script type="text/javascript">

    import { mapGetters } from 'vuex'
    import Option from '@/components/Option/Option'

	let orderData = {
		optionVisible: false,
		orderOptions: {
            selected: '10',
            options: ['10', '11', '12']
        }
	}

	export default {
		data () {
			return orderData
		},
		mounted () {
			document.getElementsByClassName('check-circle')[1].className = 'check-circle active'
		},
		methods: {
            optionToggle () {
                this.optionVisible = !this.optionVisible
            },
            selectOption (opt) {
                this.orderOptions.selected = opt
                this.optionVisible = false
            }
        },
        components: {
            'appoptions': Option
        },
        computed: {
            ...mapGetters({
                orderData: 'getOrderData'
            })
        }
	}
</script>
<style>
	@import '../buyUsNumber/buyUsNumber.scss';
</style>