<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>billing</span>. payments</h2>
        </div>
        <div class="container-content">
            <div class="left-column">
                <div class="payment-method-content">
                    <h2>Payment Method</h2>
                    <p class="text-p">The minimum amount when adding credit is $25.00</p>
                    <label>AMOUNT, $</label>
                    <input type="text" class="amount-search" value="25">
                    <div class="check-paypal-content">
                        <div class="check-circle active"></div>
                        <div class="check-paypal-text">
                            <p>PayPal</p>
                            <span>All Paypal related fees will be deducted from your payment. Pay by credit card using <br />PayPal </span>
                        </div>
                    </div>
                    <div class="check-paypal-content">
                        <div class="check-circle"></div>
                        <div class="check-paypal-text">
                            <p>Credit Card</p>
                            <span>All Paypal related fees will be deducted from your payment. Pay by credit card using <br />PayPal </span>
                        </div>
                    </div>
                    <a href=""><button class="make-payment-btn">Make payment</button></a>
                </div>
                <div class="payment-method-content default-account-content">
                    <h2>Default Autopay Account</h2>
                    <label>SELECT DEFAULT PAYMENT ACCOUNT</label>
                    <div class="select-item-content select-account">
                        <div class="selected-item">
                            <div class="option first-option">
                                <input type="radio" name="group" class="input-select"/>
                                <p>Add new credit card</p>
                            </div>
                        </div>
                        <div class="option-wrap">
                            <div class="option">
                                <input type="radio" name="group" class="input-select" />
                                <p>Add new credit card</p>
                            </div>
                            <div class="option">
                                <input type="radio" name="group" class="input-select" />
                                <p>Add new credit card1</p>
                            </div>
                            <div class="option">
                                <input type="radio" name="group" class="input-select" />
                                <p>Add new credit card2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="payment-method-content default-account-content credit-card-content">
                    <h2>Credit card</h2>
                    <a href=""><p class="add-new-btn">Add new <span class="plus-img"></span></p></a>
                </div>
            </div>
            <div class="right-column">
                <div class="accept-payment-content">
                    <h2>$(1,035.99)</h2>
                    <p class="balance-p">Balance due</p>

                    <div class="checkboxes-content">
                        <div class="checkbox buy-number-checkbox">
                            <input type="checkbox" value="1" id="checkboxMon" name="" />
                            <label for="checkboxMon"></label>
                        </div>
                        <p class="check-p">Auto Recharge my Account when my balance falls below</p>
                        <div class="numbers-input-content">
                            <div class="select-number">
                                <input type="number" class="currency" min="0" value="25" />
                            </div>
                            <p class="recharge-for-p">recharge for</p>
                            <div class="select-number">
                                <input type="number" class="currency" min="0" value="25" />
                            </div>
                        </div>
                    </div>
                    <div class="checkboxes-content second-content">
                        <div class="checkbox buy-number-checkbox">
                            <input type="checkbox" value="1" id="checkboxMon1" name="" />
                            <label for="checkboxMon1"></label>
                        </div>
                        <p class="check-p">Send me Low Balance Notification</p>
                    </div>
                    <div class="refresh-settings-content">
                        <p>Refresh settings <span class="refresh-img"></span></p>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>
<script type="text/javascript">
	let payments = {}
	export default {
		data () {
			return payments
		}
	}
</script>
<style>
	@import './BillingPayments.scss';
</style>