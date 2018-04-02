<template>
	<div class="shop-by-category">
		<hr class="black-hr">
        <div class="buy-us-number-content shop-by-category">
            <div class="col-10">
                <div class="container-head">
                    <h2>shop by category. search results</h2>
                </div>
                <div class="container-content">
                    <div class="filter-box">
                        <div class="left-side-div">
                            <p class="display-p">Display:</p>
                            <appoptions :optionData="categoryOptions" :className="'export-select'"></appoptions>
                            <p class="display-p">records</p>
                        </div>
                    </div>
                    <div class="billing-activity-table-content">
                        <table>
                            <tr>
                                <th>COMPANY NAME</th>
                                <th>STATE</th>
                                <th>NUMBER</th>
                                <th>CATEGORIES</th>
                                <th>DESCRIPTION</th>
                                <th></th>
                            </tr>
                            <tr v-for="(cat, index) in categories">
                                <td>{{ cat.name }}</td>
                                <td>{{ cat.state }}</td>
                                <td>{{ cat.number }}</td>
                                <td class="text-td">{{ cat.categories }}</td>
                                <td class="text-td">{{ cat.description }}</td>
                                <td>
                                    <a><button @click.stop="showCallPopUp(index)" class="call-for-free-btn">CALL FOR FREE</button></a>
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
            </div>
        </div>
    <div class="right-side-content" v-if="callPopUp" @click.stop="">
            <div class="call-content-right">
                <p><span></span>CALL IN PROGRESS</p>
                <div class="phone-number">
                    <div class="phone-number-header">
                        <h2>{{ freeCallNumber.number }}</h2>
                        <p class="ups-inc-p">UPS inc</p>
                    </div>
                    <div class="pause-hang-up-content">
                        <div class="pause-img"></div>
                        <div class="call-img"></div>
                        <p class="hangup-p">HANGUP</p>
                    </div>
                </div>
                <div class="rows-right-content">
                    <p>DIALPAD <i class="fa fa-angle-up arrow-btn active" aria-hidden="true"></i></p>
                    <div class="right-content-row">
                        <div class="dialpad-content">
                            <table>
                                <tr v-for="phone in phoneKeys">
                                    <td v-for="key in phone.keys" @click.stop="selectNumber(key)">
                                        <span>{{ key }}</span>
                                    </td>
                                </tr>
                            </table>
                            <div class="clear">
                                <a  @click="clearPhoneNumber">clear</a>
                                <div class="clear-img"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import Option from '@/components/Option/Option'
	let categoryData = {
        optionVisible: false,
        callPopUp: false,
        phoneNumber: '',
        phoneKeys: [
            {
                keys: ['1', '2', '3']
            },
            {
                keys: ['4', '5', '6']
            },
            {
                keys: ['7', '8', '9']
            },
            {
                keys: ['*', '0', '#']
            }
        ],
        categoryOptions: {
            selected: '10',
            options: ['10', '11', '12'],
            visbile: false
        }
    }

	export default {
		data () {
			return categoryData
		},
        mounted () {
            document.addEventListener('click', () => {
                this.callPopUp = false
            })
        },
        computed: {
            ...mapGetters({
                categories: 'getCategoriesData',
                freeCallNumber: 'getFreeCallNumber'
            })
        },
        methods: {
            optionToggle () {
                this.optionVisible = !this.optionVisible
            },
            selectOption (opt) {
                this.categoryOptions.selected = opt
                this.optionVisible = false
            },
            showCallPopUp (index) {
                this.callPopUp = true
                this.$store.dispatch('callForFree', { index: index })
            },
            selectNumber(key) {
                this.phoneNumber += key
            },
            clearPhoneNumber () {
                this.phoneNumber = ''
            }
        },
        components: {
            'appoptions': Option
        }
	}
</script>
<style >
	@import './ShopByCategory.scss';
	@import '../buyUsNumber/buyUsNumber.scss';
</style>