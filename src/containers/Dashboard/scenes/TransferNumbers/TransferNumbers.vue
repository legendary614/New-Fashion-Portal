<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>origination</span>. transfer numbers</h2>
            <div class="text-div">
                <p>To avoid any rejections, input all the information correctly EXACTLY as it is on your current phone bill. Example if your address is 123 Main Street and your bill states 123 Main St, input your address as it is written on your phone bill.</p>
            </div>
        </div>
        <div class="container-content">
            <div class="authorisation-transaction-content">
                <div class="first-column">
                    <div class="check-portability-content">
                        <label>SELECT TYPE</label>
                        <appoptions :optionData="transferNumberOptions" :className="'type-select'"></appoptions>
                        <div class="checkbox-content">
                            <div class="checkbox">
                                <input v-model="bulkDID" type="checkbox" id="checkAll" value="1" name="" />
                                <label for="checkAll"></label>
                            </div>
                            <p>Bulk DID Ordering: 20+ Numbers, Please use the upload csv method.</p>
                        </div>
                        <div class="enter-number-content">
                            <label>Enter Number to be transfered*</label>
                            <input v-model="transferedNumber" type="text">
                            <a @click="addTransferedNumber" class="add-more-a">Add more</a>
                        </div>
                    </div>
                    <div class="form-row-content">
                        <div class="left-column">
                            <label>current carrier*</label>
                            <input v-model="currentCarrier" type="text" class="trunk-input">
                            <label>owners name</label>
                            <input v-model="ownersName" type="text" class="trunk-input">
                            <label>address line 2</label>
                            <input v-model="addresLine2" type="text" class="trunk-input">
                            <label>state*</label>
                            <input v-model="state" type="text" class="trunk-input">
                            <label>preffered foc date</label>
                            <input v-model="focDate" type="text" class="trunk-input">
                            <div class="checkbox-content">
                                <div class="checkbox">
                                    <input v-model="unlimitedPlan" type="checkbox" id="checkAll1" value="1" name="" />
                                    <label for="checkAll1"></label>
                                </div>
                                <p>DID's for the Unlimited Plan Only</p>
                            </div>
                        </div>
                        <div class="right-column">
                            <label>carrier account number</label>
                            <input v-model="carrierAccountNumber" type="text" class="trunk-input">
                            <label>service address*</label>
                            <input v-model="serviceAdress" type="text" class="trunk-input">
                            <label>city*</label>
                            <input v-model="city" type="text" class="trunk-input">
                            <label>zip code*</label>
                            <input v-model="zipCode" type="text" class="trunk-input">
                            <div class="check-port">
                                <div class="check-port-content" v-for="(data, index) in checkPort">
                                    <div :class="['check-circle',{ 'active': data.active}]" @click="checkPortFunc(index)"></div>
                                    <div class="check-paypal-text">
                                        <p>{{ data.label }} <span></span></p>
                                    </div>
                                </div>
                                <p class="footer-p">**Full port is not available now**</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-row-content">
                        <h4>Recent transactions</h4>
                        <div class="checkbox-content check-if-billing">
                            <div class="checkbox">
                                <input v-model="checkBillingAddress" type="checkbox" id="checkAll2" value="1" name="" />
                                <label for="checkAll2"></label>
                            </div>
                            <p>Check if billing address is different than service address.</p>
                        </div>
                        <div class="left-column">
                            <label>address</label>
                            <input v-model="address"type="text" class="trunk-input">
                            <label>city</label>
                            <input v-model="transactionCity" type="text" class="trunk-input">
                            <label>zip code</label>
                            <input v-model="transactionZipCode" type="text" class="trunk-input">
                        </div>
                        <div class="right-column">
                            <label>address2</label>
                            <input v-model="transactionAddress2" type="text" class="trunk-input">
                            <label>state</label>
                            <input v-model="transactionState" type="text" class="trunk-input">
                        </div>
                    </div>
                    <a href=""><button class="check-portability-btn">Check portability</button></a>
                </div>
                <div class="second-column">
                    <div class="letter-of-authorisation">
                        <div class="checkbox-content">
                            <div class="checkbox">
                                <input v-model="haveLOADocument" type="checkbox" id="checkAll3" value="1" name="" />
                                <label for="checkAll3"></label>
                            </div>
                            <p>I have LOA Documnet</p>
                        </div>
                        <h4>letter of authorisation</h4>
                        <p>By signing below, I verify that I am, or represent a business with the above-named local service provider, authorized to change the primary carrier(s) for the telephone number(s) listed. I understand that I am authorizing changes of my primary carrier services, and that I may select only one primary carrier per service, per number. </p>
                        <p>I also authorize Vitcom LLC. or its designated agent to obtain billing information, customer service records and other network information required to provide me with Vitcom LLC. service. I understand that my current service provider may bill me a one-time charge for requested service changes for each telephone number.</p>
                        <label class="signature-label">Authorized Signature </label>
                        <input v-model="authorisationSignature" type="text" class="signature-input">
                        <a @click="clearAuthorisation" class="clear-a">Clear</a>
                        <p>Or upload file with your sign.</p>
                        <a href=""><button class="browse-btn">Browse</button></a>
                    </div>
                </div>
            </div>



            <hr>
            <div class="porting-process-content">
                <h2>porting process</h2>
                <p>As soon as we receive this form and a copy of your most recent phone bill, we will begin the process of porting your number which can take up to 30 business days.</p>
                <a href="">LNP How long does it take? How much does it cost?</a>
                <h2>porting disclaimer.</h2>
                <p>Due to the restrictions and requirements and regulations that are set forth by your current provider (each company has their own set of rules) we can only attempt to process your request. In no way, shape or form does Vitcom guarantee the successful porting of phone numbers. We provide this as a service to our customers with the understanding that the customer is responsible for the payment of their service under any circumstance no matter if the requested number ported or not.</p>
                <p>By signing this form, I acknowledge that I have read, I understand and I agree to be bound by all the terms and conditions as set forth in the Vitcom terms and conditions agreement. By submitting this application, I also authorize Vitcom to port my existing number to their service as well as certify that I read, understand and accept this disclaimer's terms and conditions, both expressed and implied, without exception. Vitcom makes no express warranty regarding the Service and disclaims any implied warranty including any warranty of merchant-ability or fitness for a particular purpose.</p>
                <span>Terms and Conditions</span>
                <p>By using this form and the port request information, you agree to port your telephone number you are entering to Vitcom LLC through its carriers or affiliates. You agree that Vitcom LLC will be your new provider for this number unless you decide to port it away from Vitcom LLC Communications, LLC.</p>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Option from '@/components/Option/Option'

	let transferNumbers = {
        bulkDID: '',
        transferedNumber: '',
        currentCarrier: '',
        ownersName: '',
        addresLine2: '',
        state: '',
        focDate: '',
        unlimitedPlan: '',
        carrierAccountNumber: '',
        serviceAdress: '',
        city: '',
        zipCode: '',
        checkBillingAddress: '',
        address: '',
        transactionCity: '',
        transactionZipCode: '',
        transactionAddress2: '',
        transactionState: '',
        haveLOADocument: '',
        authorisationSignature: '',
        transferNumberOptions: {
            selected: `Local number DID's`,
            options: [`Local number DID's`, `Local number DID's`],
            visible: false
        },
        checkPort: [
            {
                active: false,
                label: 'Partial Port'
            },
            {
                active: false,
                label: 'Full Port'
            }
        ],
        getCheckPortIndex: 0,

    }
	export default {
		data () {
			return transferNumbers
		},
		mounted () {
            this.checkPort[this.getCheckPortIndex].active = true
			document.getElementById('dashboard-main').className = 'transfer-numbers-main'
		},
        components: {
            'appoptions': Option
        },
        methods: {
            addTransferedNumber () {
                console.log(this.transferedNumber)
            },
            checkPortFunc (index) {
                this.getCheckPortIndex = index
            },
            clearAuthorisation () {
                this.authorisationSignature = ''
            }
        },
        watch: {

            getCheckPortIndex (newVal, oldVal) {
                console.log('new ' + newVal)
                console.log('old ' + oldVal)
                this.checkPort[oldVal].active = false
                this.checkPort[newVal].active = true
            }
        }
	}
</script>
<style>
	@import './TransferNumbers.scss';
</style>