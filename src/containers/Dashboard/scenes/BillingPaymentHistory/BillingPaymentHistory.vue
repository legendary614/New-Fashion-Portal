<template>
	 <div class="main-content">
        <div class="container-head">
            <h2><span>billing</span>. payments history</h2>
            <p>Manage all order activity. LNP order status "approved" still requires the number to be activiated. You may cancel or modify orders anytime, but once a FOC date is issued, please make sure you communicate with us if the change required is on the same date.</p>
        </div>
        <div class="container-content">
            <div class="filter-box">
                <div class="left-side-div">
                    <p class="display-p">Display:</p>
                    <div class="select-item-content export-select">
                        <div class="selected-item">
                            <div class="option first-option">
                                <input type="radio" name="group" class="input-select">
                                <p>10</p>
                            </div>
                        </div>
                        <div class="option-wrap">
                            <div class="option">
                                <input type="radio" name="group" class="input-select">
                                <p>10</p>
                            </div>
                            <div class="option">
                                <input type="radio" name="group" class="input-select">
                                <p>11</p>
                            </div>
                        </div>
                    </div>
                    <p class="display-p">records</p>
                </div>
                <input type="text" placeholder="Search" class="search-input">
            </div>
            <div class="billing-activity-table-content">
                <table>
                    <tr>
                        <th>PAYMENT DATE</th>
                        <th>REFERENCE</th>
                        <th>FUNDED AMOUNT</th>
                        <th>CHARGES</th>
                        <th>AMOUNT</th>
                        <th>METHOD</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                    <tr>
                        <td>No data available in table</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</template>
<script type="text/javascript">
	let paymentHistory = {}
	export default {
		data () {
			return paymentHistory
		}
	}
</script>
<style>
	@import './BillingPaymentHistory.scss';
</style>