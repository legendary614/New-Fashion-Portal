<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>billing</span>. invoices</h2>
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
                        <th>SR#</th>
                        <th>INVOICE/ CM#</th>
                        <th>DATE</th>
                        <th>DUE DATE</th>
                        <th>DURATION</th>
                        <th>AMOUNT</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td class="invoice-td">
                            <div class="invoice-div">
                                <p>INV-144757</p>
                                <span>DID-ORDER-144757.pdf</span>
                            </div>
                            <div class="file-img"></div>
                        </td>
                        <td>2017-04-02</td>
                        <td></td>
                        <td></td>
                        <td>$0.01</td>
                        <td><a href=""><button class="pay-now-btn">Pay now</button></a></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td class="invoice-td">
                            <div class="invoice-div">
                                <p>INV-144757</p>
                                <span>DID-ORDER-144757.pdf</span>
                            </div>
                            <div class="file-img"></div>
                        </td>
                        <td>2017-04-02</td>
                        <td></td>
                        <td></td>
                        <td>$0.01</td>
                        <td><a href=""><button class="paid-btn">Paid</button></a></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td class="invoice-td">
                            <div class="invoice-div">
                                <p>INV-144757</p>
                                <span>DID-ORDER-144757.pdf</span>
                            </div>
                            <div class="file-img"></div>
                        </td>
                        <td>2017-04-02</td>
                        <td></td>
                        <td></td>
                        <td>$0.01</td>
                        <td><a href=""><button class="pay-now-btn">Pay now</button></a></td>
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

</template>
<script type="text/javascript">
	let billingInvoices = {}
	export default {
		data () {
			return billingInvoices
		}
	}
</script>
<style>
	@import './BillingInvoices.scss';
</style>