<template>
	<div class="buyUs-number">
		<hr class="black-hr">
        <div class="buy-us-number-content">
            <div class="col-10">
                <div class="container-head">
                    <h2>buy <span>us</span> number.</h2>
                </div>
                <div class="container-content">
                    <div class="filter-box">
                        <div class="left-side-div">
                            <p class="display-p">Display:</p>
                            <appoptions :optionData="buyOptions" :className="'export-select'"></appoptions>
                            <p class="display-p">records</p>
                        </div>
                        <div class="select-btn">
                            <a @click="autoSelect"><button>Auto select</button></a>
                            <a @click="requestMore"><button>Request more</button></a>
                        </div>
                    </div>
                    <div class="billing-activity-table-content">
                        <table>
                            <tr>
                                <th>DID NUMBER</th>
                                <th>STATE</th>
                                <th>SETUP FEE</th>
                                <th>MONTHLY FEE</th>
                                <th>PER MINUTE FEE</th>
                                <th></th>
                            </tr>
                            <tr v-for="(buy, index) in buy">
                                <td>{{ buy.number }}</td>
                                <td>{{ buy.state }}</td>
                                <td>${{ buy.setupFee }}</td>
                                <td>${{ buy.monthlyFee }}</td>
                                <td>${{ buy.perMinuteFee }}</td>
                                <td>
                                    <div href="" class="add-to-card-a" @click="showAddCart(index)">add to card</div>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="info-steps contact-table-steps">
                        <a><button class="arrow-left"></button></a>
                        <button class="table-page-number">10</button>
                        <a><button class="arrow-right arrow-right-disabled"></button></a>
                    </div>
                </div>
            </div>
            <div class="pop-up-window-background" v-if="windowPopUp"></div>
            <div class="pop-up" v-if="showPupUp">
                <div class="pop-up-content" v-if="addCartVisible">
                    <div class="close-pop-up" @click="closePopUp"></div>
                    <div class="pop-up-header">
                        <h2>DID's were added to your cart</h2>
                        <p>Some text here, so uers feels pleased and happy.</p>
                    </div>
                    <div class="pop-up-text-content">
                        <p class="total">total: ${{ totalPrice }}</p>
                        <div class="buttons-content">
                            <router-link to="/buyUsNumber/orderReview"><p class="cancel-btn">Continue selection</p></router-link>
                            <a><button @click="showCheckout" class="save-btn proceed-btn">Proceed to checkout</button></a>
                        </div>
                    </div>
                </div>
                <div class="pop-up-content checkout-pop-up" v-if="checkoutVisible">
                    <div class="close-pop-up" @click="closePopUp"></div>
                    <div class="checkout-img"></div>
                    <div class="pop-up-header">
                        <h2>Checkout</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
                    </div>
                    <div class="pop-up-text-content">
                        <div class="buttons-content">
                            <a href=""><p class="set-call-btn">Set call forwarding <span></span></p></a>
                            <a href=""><button class="save-btn select-trunk-btn">Select trunk</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
    import { mapGetters } from 'vuex'
    import Option from '@/components/Option/Option'

	let numberData = {
        addCartVisible: false,
        showPupUp: false,
        windowPopUp: false,
        checkoutVisible: false,
        buyOptions: {
            selected: '10',
            options: ['10', '11', '12'],
            visible: false
        }
    }

	export default {
		data () {
			return numberData
		},
        methods: {
           
            showAddCart (index) {
                this.$store.dispatch('addToCart', { index: index })
                this.windowPopUp = !this.windowPopUp
                this.showPupUp = !this.showPupUp
                this.addCartVisible = !this.addCartVisible
            },
            showCheckout () {
                this.addCartVisible = false
                this.checkoutVisible = !this.checkoutVisible
            },
            closePopUp () {
                this.addCartVisible = false
                this.showPupUp = false
                this.windowPopUp = false
                this.checkoutVisible = false
            },
            autoSelect () {
                let buyLength = this.buy.length
                let randomIndex = Math.floor((Math.random() * buyLength) + 0)
                this.$store.dispatch('addToCart', { index: randomIndex })
                this.windowPopUp = !this.windowPopUp
                this.showPupUp = !this.showPupUp
                this.addCartVisible = !this.addCartVisible
            },
            requestMore () {

            }
        },
        computed: {
            ...mapGetters({
                buy: 'getBuyData',
                totalPrice: 'getTotalPrice'
            })
        },
        components: {
            'appoptions': Option
        }

	}
</script>
<style>
	@import './buyUsNumber.scss';
</style>