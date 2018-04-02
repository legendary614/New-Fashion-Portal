<template>
	<div class="container-content" v-if="settingActivated">
            <div class="edit-trunks-content">
                <div class="check-portability-content left-column">
                    <label>TITLE*</label>
                    <input v-model="title" type="text" class="trunk-input">
                    <label>Primary IP / Sub Domain *</label>
                    <input v-model="primaryIp" type="text"  class="trunk-input">
                    <label>Secondary IP / Sub Domain </label>
                    <input v-model="secondaryIp" type="text" class="trunk-input">
                    <label>status</label>
                    <appoptions :optionData="trunkGoupOptions" :className="'type-select'"
                    <div class="natnum-check-content">
                        <div class="check-paypal-content">
                            <div class="check-circle active"></div>
                            <div class="check-paypal-text">
                                <p>Natnum (10 digits)</p>
                            </div>
                        </div>
                        <div class="check-paypal-content">
                            <div class="check-circle"></div>
                            <div class="check-paypal-text">
                                <p>Natnum (11 digits)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right-column">
                    <label>TYPE*</label>
                    <appoptions :optionData="trunkGoupTypeOptions" :className="'type-select'"
                    <div class="prefix-port-content">
                        <div class="first-column">
                            <label>Primary Prefix</label>
                            <input v-model="primaryPrefix" type="text" class="trunk-input">
                            <label>Secondary Prefix</label>
                            <input v-model="secondaryPrefix" type="text" class="trunk-input">
                        </div>
                        <div class="second-column">
                            <label>Primary Port</label>
                            <input v-model="primaryPort" type="text" value="5060" class="trunk-input">
                            <label>Secondary Port </label>
                            <input v-model="secondaryPort" type="text" class="trunk-input">
                        </div>
                    </div>
                </div>
            </div>
            <div class="check-btn-content">
                <a href=""><button class="edit-trunk-btn">Edit Trunk</button></a>
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
</template>
<script type="text/javascript">

    import Option from '@/components/Option/Option'
    import { mapGetters } from 'vuex'

	let editTrunk = {
        title: '',
        primaryIp: '',
        secondaryIp: '',
        primaryPrefix: '',
        secondaryPrefix: '',
        primaryPort: '',
        secondaryPort: '',
        trunkGoupOptions: {
            selected: 'Active',
            options: ['Active', 'Not Active'],
            visible: false
        },
        trunkGoupTypeOptions: {
            selected: 'UNLIMITED',
            options: ['UNLIMITED', 'UNLIMITED12'],
            visible: false
        }
    }

	export default {
		data () {
			return editTrunk
		},
		mounted () {
			document.getElementById('dashboard-main').className = "edit-trunk-main"
		},
        updated () {
            console.log(this.settings)
            
        },
        components: {
            'appoptions': Option
        },
        computed: {
            ...mapGetters({
                settingActivated: 'getSettingActivated',
                settings: 'getSettings'
            })
        },
        watch: {
            
        }
	}
</script>
<style>
    @import './EditTrunk.scss';
</style>