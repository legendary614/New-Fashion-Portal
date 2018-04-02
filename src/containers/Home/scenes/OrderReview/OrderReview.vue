<template>
	<div class="buy-us-number-order-review">
		<hr class="black-hr">
        <div class="buy-us-number-content orders-content">
            <div class="col-10">
                <div class="container-head">
                    <h2>buy <span>us</span> number/ order review</h2>
                </div>
                <div class="container-content">
                    <div class="left-column">
                        <div class="filter-box">
                            <div class="left-side-div">
                                <p class="display-p">Display:</p>
                                <appoptions :orderData="orderOptions" :className="'export-select'"></appoptions>
                                <p class="display-p">records</p>
                            </div>
                            <input type="text" placeholder="Search" class="search-input">
                        </div>
                        <div class="billing-activity-table-content">
                            <table>
                                <tr>
                                    <th>DID NUMBER</th>
                                    <th>PRICE</th>
                                    <th></th>
                                </tr>
                                <tr v-for="(data, index) in orderData">
                                    <td>{{ data.number }}</td>
                                    <td>${{ data.price }}</td>
                                    <td>
                                        <a @click="deleteNumber(index)" class="delete-btn">delete</a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="bottom-content-total">
                            <p class="total-p">DID number total: <strong>$31,27</strong></p>
                            <router-link to="/buyUsNumber/orderReview/order"><p class="cancel-btn">Continue selection</p></router-link>
                            <a href=""><button class="checkout-btn">Checkout</button></a>
                        </div>
                    </div>
					<div class="right-column">
                        <div class="accept-payment-content">
                            <h2>payment options</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                            <p>since the 1500s, when an unknown printer took a galley of type and scram- bled it to make a type specimen book. </p>
                            <div class="acept-btn-content">
                                <a href=""><button class="google-img"></button></a>
                                <a href=""><button class="skrill-img"></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	</div>
</div>
</template>
<script type="text/javascript">
    import { mapGetters } from 'vuex'
    import Options from '@/components/Option/Option'

	let orderReviewData = {
		optionVisible: false,
		orderOptions: {
            selected: '10',
            options: ['10', '11', '12'],
            visible: false
        }
	}
	export default {
		data () {
			return orderReviewData
		},
		methods: {
            optionToggle () {
                this.optionVisible = !this.optionVisible
            },
            selectOption (opt) {
                this.orderOptions.selected = opt
                this.optionVisible = false
            },
            deleteNumber(index) {
                this.$store.dispatch('deleteNumber', { index: index })
            }
        },
        computed: {
            ...mapGetters({
                orderData: 'getOrderReviewData'
            })
        },
        components: {
            'appoptions': Option
        }
	}
</script>
<style>
	@import '../buyUsNumber/buyUsNumber.scss';
</style>