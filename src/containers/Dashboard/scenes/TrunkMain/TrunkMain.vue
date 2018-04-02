<template>
	<div class="container-content">
            <div class="filter-box">
                <div class="left-side-div">
                    <p class="display-p">Display:</p>
                    <appoptions :optionData="trunkGroupOptions" :className="'export-select'"></appoptions>
                    <p class="display-p">records</p>
                    <appoptions :optionData="trunkGroupFilterOptions" :className="'export-select action-select'"></appoptions>
                </div>
                <input type="text" placeholder="Search" class="search-input">
            </div>
            <div class="billing-activity-table-content">
                <table>
                    <tr>
                        <th>ORDER ID</th>
                        <th>TITLE <i class="fa fa-angle-up date-time-i" aria-hidden="true"></i></th>
                        <th>PRIMARY IP/CALL FORWARD</th>
                        <th>BILLING TYPE</th>
                        <th>PAYMENT</th>
                        <th>SETTINGS</th>
                        <th>STATUS</th>
                    </tr>
                    <tr v-for="(data, index) in trunkGroupsData">

                        <td>{{ data.orderId }}</td>
                        <td>
                            <a href="" class="did-a">{{ data.title }}</a>
                        </td>
                        <td>{{ data.primaryIp }}</td>
                        <td>{{ data.billingType }}</td>
                        <td></td>
                        <td>
                            <div @click="editTrunk(index)" class="download-td"></div>
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
</template>
<script type="text/javascript">

    import Option from '@/components/Option/Option'

    import { mapGetters } from 'vuex'

	let trunkMain = {
        trunkGroupOptions: {
            selected: '10',
            options: ['12', '11'],
            visible: false
        },
        trunkGroupFilterOptions: {
            selected: 'Select Filter',
            options: ['Select Filter', 'Select Filter'],
            visible: false
        }
    }

	export default {
		data () {
			return trunkMain
		},
		mounted () {
			document.getElementById('dashboard-main').className = 'trunk-main'
		},
        components: {
            'appoptions': Option
        },
        methods: {
            editTrunk (index) {
                let currentItem = this.trunkGroupsData[index]
                this.$store.dispatch('getSettings', { settings: currentItem })
                this.$router.push({ path: '/dashboard/my-trunk-groups/edit-trunk' })
            }
        },
        computed: {
            ...mapGetters({
                trunkGroupsData: 'getTrunkGroupsData'
            })
        }
	}
</script>
<style>
    @import './TrunkMain.scss';
</style>