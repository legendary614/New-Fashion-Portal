<template>
	<div class="order-new-number">
		<hr class="black-hr">
        <div class="buy-us-number-content orders-content order-did-number">
            <div class="col-10">
                <div class="container-head">
                    <h2>order new DID number. processed</h2>
                </div>
                <div class="container-content">
                    <div class="left-column">
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
                                    <th>SR#</th>
                                    <th>NUMBER</th>
                                    <th>PRICE / MRC</th>
                                    <th>STATUS</th>
                                </tr>
                                <tr v-for="data in orderNewNumbers">
                                    <td>{{ data.sr }}</td>
                                    <td>{{ data.number }}</td>
                                    <td>${{data.price}}</td>
                                    <td>
                                        <a href=""><button class="processed-btn">{{ data.status }}</button></a>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="right-column" v-if="right === 'Note'">
                       <div class="text-content">
                           <p>Note ...</p>
                           <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. <br />took a galley of type and scrambled it to make a type specimen book. </span>
                           <div class="bottom-content">
                               <a @click="continueStep"><button class="continue-btn">Continue</button></a>
                           </div>
                       </div>
                    </div>
                    <div class="right-column" v-if="right === 'activity'">
                        <div class="text-content">
                            <p>Set DID activity</p>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                            <div class="checkbox-content" v-for="title in activityCheckbox">
                                <div class="check-circle"></div>
                                <label>{{ title }}</label>
                            </div>
                            <a href=""><button class="apply-btn">Apply</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
    import Option from '@/components/Option/Option'
	let orderNewData = {
		optionVisible: false,
		right: 'Note',
		orderOptions: {
            selected: '10',
            options: ['10', '11', '12'],
            visible: false
        },
        activityCheckbox: ['Play IVR', 'Direct to SIP', 'Direct to phone number', 'Play voice mail'],
        orderNewNumbers : [
        	{
        		sr: '1',
        		number: '801189754',
        		price: '0,00',
        		status: 'PROCESSED'
        	},
        	{
        		sr: '1',
        		number: '801189754',
        		price: '0,00',
        		status: 'PROCESSED'
        	},
        	{
        		sr: '1',
        		number: '801189754',
        		price: '0,00',
        		status: 'PROCESSED'
        	},
        	{
        		sr: '1',
        		number: '801189754',
        		price: '0,00',
        		status: 'PROCESSED'
        	}
        ]
	}

	export default {
		data () {
			return orderNewData
		},
		methods: {
            optionToggle () {
                this.optionVisible = !this.optionVisible
            },
            selectOption (opt) {
                this.orderOptions.selected = opt
                this.optionVisible = false
            },
            continueStep () {
            	this.right = 'activity'
            }
        },
        components: {
            'appoptions': Option
        }
	}
</script>
<style>
	@import '../buyUsNumber/buyUsNumber.scss';
</style>