<template>
	<div class="register">
		<hr class="black-hr">
        <div class="register-account-content">
            <div class="col-10">
                <h4>register a new account.</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry's standard dummy text ever.</p>
                <form class="register-form">
                    <div class="form-row name-row">
                        <div class="person-img img-item"></div>
                        <input v-model="first_name" type="text" class="name-input" placeholder="First name">
                        <input v-model="last_name" type="text" class="name-input" placeholder="Last name">
                    </div>
                    <div class="form-row">
                        <div class="email-img img-item"></div>
                        <input v-model="email" type="text" placeholder="Your email">
                    </div>
                    <div class="form-row">
                        <div class="phone-number-img img-item"></div>
                        <input v-model="phone_number" type="text" placeholder="Your phone number">
                    </div>
                    <div class="form-row pass-row">
                        <div class="password-img img-item"></div>
                        <input v-model="password" type="password" class="name-input" placeholder="Password">
                        <input v-model="confirm_password" type="password" class="name-input" placeholder="Confirm password">
                    </div>
                    <div class="form-row">
                        <div class="img-item"></div>
                        <a><button @click.prevent="Register" class="register-btn">Register new account</button></a>
                    </div>
                </form>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
    import { mapGetters } from 'vuex'

	let registerData = {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_password: ''
    }

	export default {
		data () {
			return registerData
		},
        updated () {
        },
        methods: {
            Register () {
                this.$store.dispatch('Register', {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    username: 'George1235',
                    password: this.password,
                    email: this.email
                })
            }
        },
        computed: {
            ...mapGetters({
                registerData: 'getUserData'
            })
        },
        watch: {
           registerData (newVal) {
            console.log(newVal)
            if (newVal.success)
                this.$router.push('/dashboard')
           }
        }
	}
</script>
<style>
	@import './Register.scss'
</style>