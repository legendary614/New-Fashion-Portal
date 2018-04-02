<template>
  <div class="login">
    <hr class="black-hr">
    <div class="register-account-content login-account-content">
      <div class="col-10">
        <h4>login to your account</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <form class="register-form">
          <div class="form-row">
            <div class="person-img img-item"></div>
            <input v-model="email" type="text" placeholder="Your email">
          </div>
          <div class="form-row">
            <div class="password-img img-item"></div>
            <input v-model="password" type="password" placeholder="Password">
          </div>
          <div class="form-row">
            <div class="img-item"></div>
            <a>
              <button @click.prevent="Login" class="register-btn login-btn">Login</button>
            </a>
          </div>
        </form>
      </div>
    </div>
    <div class="login-with-social-content">
      <div class="col-10">
        <p>Or you may login with your social account</p>
        <div>
          <a href="">
            <button class="facebook-btn">facebook</button>
          </a>
          <a href="">
            <button class="google-plus-btn">Google Plus</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">

  import {mapGetters} from 'vuex'
  import * as store from 'store2'

  let loginData = {
    email: '',
    password: ''
  }

  export default {
    data () {
      return loginData
    },
    mounted () {
      this.$store.dispatch('resetStore', {})
      // if (this.isLoggedIn) {
      //     this.$router.push('/dashboard')
      // }
    },
    updated () {

      // console.log(this.isLoggedIn)
    },
    methods: {
      Login () {
        let loginData = {
          username: 'George',
          password: this.password
        }
        this.$store.dispatch('auth', loginData)
      }
    },
    computed: {
      ...mapGetters({
        authenticate: 'getAuthData',
        userData: 'getUserData',
        isLoggedIn: 'isLoggedIn'
      })
    },
    watch: {
      authenticate (newVal) {
        if (newVal.success) {
          this.$store.dispatch('getUserData', newVal.data)
          // this.$router.push('/dashboard')
        }
      },
      userData (newVal) {
        if (newVal.success) {
          this.$router.push('/dashboard')
        }
      }
    }
  }

</script>
<style>
  @import './Login.scss';
  @import '../Register/Register.scss';
</style>
