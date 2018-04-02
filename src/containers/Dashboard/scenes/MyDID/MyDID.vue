<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>origination</span>. my DID numbers</h2>
            <p>Manage all order activity. LNP order status "approved" still requires the number to be activiated. You may cancel or modify orders anytime, but once a FOC date is issued, please make sure you communicate with us if the change required is on the same date.</p>
        </div>
        <div class="container-content">
            <div class="filter-box">
                <div class="left-side-div">
                    <p class="display-p">Display:</p>
                    <appoptions :optionData="myDIDOptions" :className="'export-select'"></appoptions>
                    <p class="display-p">records</p>
                    <appoptions :optionData="myDIDActionOptions" :className="'export-select action-select'"></appoptions>
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
                        <th>DID</th>
                        <th>GROUP</th>
                        <th>CALL FORWARD</th>
                        <th>ORDER NO</th>
                        <th>DID MRC</th>
                        <th>STATS</th>
                        <th>TRUNK GROUP/SESSION</th>
                        <th>E911</th>
                        <th>ACTIVATION DATE</th>
                        <th>STATUS</th>
                    </tr>
                    <tr v-for="data in myDIDData ">
                        <td>
                            <div class="checkbox">
                                <input type="checkbox" value="1" id="checkboxMon1" name="" />
                                <label for="checkboxMon1"></label>
                            </div>
                        </td>
                        <td>
                            <a @click="showPopUps('details')" class="did-a">1089767</a>
                        </td>
                        <td>TZBP</td>
                        <td>
                            <a @click="showPopUps('callforward')" class="did-a">add</a>
                        </td>
                        <td>918767</td>
                        <td>$0.01</td>
                        <td>
                            <a @click="showPopUps('stats')" class="did-a">view</a>
                        </td>
                        <td>.19_test 158.69.203.19</td>
                        <td>
                            <a @click="showPopUps('e991service')" class="did-a">view</a>
                        </td>
                        <td>2016-10-25 22:51:34</td>
                        <td>
                            <a ><button class="allocated-btn">ALLOCATED</button></a>
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
         <div class="pop-up-window-background" v-if="popUpActivated"></div>
    	<diddetails :visible="popUpVisible" :cancel="cancelPopUps"></diddetails>
    	<callforward :visible="popUpVisible" :cancel="cancelPopUps"></callforward>
    	<e911service :visible="popUpVisible" :cancel="cancelPopUps"></e911service>
    	<didstats :visible="popUpVisible" :cancel="cancelPopUps"></didstats>
    </div>
   
</template>
<script type="text/javascript">
	import Details from '@/containers/Dashboard/scenes/MyDID/Details/Details'
	import CallForward from '@/containers/Dashboard/scenes/MyDID/CallForward/CallForward'
	import E911Service from '@/containers/Dashboard/scenes/MyDID/E911Service/E911Service'
	import Stats from '@/containers/Dashboard/scenes/MyDID/Stats/Stats'

    import Option from '@/components/Option/Option'
    import { mapGetters } from 'vuex'

	let myDID = {
		popUpVisible: '',
		popUpActivated: false,
        myDIDOptions: {
            selected: '10',
            options: ['11', '12'],
            visible: false
        },
        myDIDActionOptions: {
            selected: 'Actions',
            options: ['Action1', 'Actions2'],
            visible: false
        }
	}
	export default {
		data () {
			return myDID
		},
		mounted () {
			document.getElementById('dashboard-main').className = 'my-DID-main'
		},
        methods: {
            showPopUps (active) {
                this.popUpVisible = active
                this.popUpActivated = true
            },
            cancelPopUps () {
                 this.popUpVisible = ''
                 this.popUpActivated = false
            }
        },
        computed: {
            ...mapGetters({
                myDIDData: 'getMyDIDData'
            })
        },
		components: {
			'diddetails': Details,
			'callforward': CallForward,
			'e911service': E911Service,
			'didstats': Stats,
            'appoptions': Option
		}
	}
</script>
<style>
	@import './MyDID.scss';
</style>