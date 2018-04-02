<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>origination</span>. check portability</h2>
        </div>
        <div class="container-content">
            <div class="check-portability-content">
                <label>SELECT TYPE</label>
                <appoptions :optionData="checkPortabilityOptions" :className="'type-select'"></appoptions>
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
                <a href=""><button class="check-portability-btn">Check portability</button></a>
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
	let checkPortabiliy = {
        bulkDID: '',
        transferedNumber: '',
        checkPortabilityOptions: {
            selected: `Local number DID's`,
            options: [`Local number DID's`, `Local number DID's`],
            visible: false
        },
    }
    import Option from '@/components/Option/Option'

	export default {
		data () {
			return checkPortabiliy
		},
        components: {
            'appoptions': Option
        },
        methods: {
            addTransferedNumber () {
                console.log(this.transferedNumber)
            },
        },
        watch: {
            
        }
	}
</script>
<style>
	@import './CheckPortability.scss';
</style>