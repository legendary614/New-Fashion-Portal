<template>
  <div class="dashboard" v-if="logged">
    <header>
      <div class="header-content dashboard-header col-10">
        <div class="header-menu-btn"></div>
      </div>
    </header>
    <aside>
      <div class="aside-content">
        <div class="user-info">
          <p>{{ data.first_name }} {{ data.last_name }}</p>
          <div>
            <a href="" class="logout">logout</a>
            <a @click="logOut">
              <button class="log-out-btn"></button>
            </a>
          </div>
        </div>
        <ul>
          <li>
            <div class="li-content">
              <div class="dashboard-item">dashboard</div>
              <div>
                <p class="origination-item">ORIGINATION</p>
                <div class="arrow-content">
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </div>
              </div>
              <span>Order new numbers</span>
              <span><router-link to="/dashboard/transfer-numbers">Transfer numbers</router-link></span>
              <span><router-link to="/dashboard/check-portability">Check portability</router-link></span>
              <span><router-link to="/dashboard/my-orders">My orders</router-link></span>
              <span><router-link to="/dashboard/my-trunk-groups">Trunk groups</router-link></span>
              <span><router-link to="/dashboard/my-did-numbers">My DID's</router-link></span>
              <span><router-link to="/dashboard/call-records">Call records</router-link></span>
              <span><router-link to="/dashboard/e991numbers">E911 numbers</router-link></span>
              <span>Reports</span>
              <span>Developers API</span>
            </div>
          </li>
          <li>
            <div class="li-content">
              <div class="billing-item">billing</div>
              <div class="arrow-content billing-arrow">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
    <main id="dashboard-main">
      <router-view></router-view>
    </main>
  </div>
</template>
<script type="text/javascript">

  import store2 from 'store2'
  import {mapGetters} from 'vuex'

  let dashboardData = {
    logged: false,
    data: {}
  }

  export default {
    data () {
      return dashboardData
    },
    mounted () {
      let {isLogged} = this.$store.state.login
      let {user_id} = store2.get('token')
      if (isLogged) {
        this.$store.dispatch('getUserData', {
          user_id: user_id
        })
      } else {
        this.$router.push('/login')
      }
    },
    methods: {
      logOut () {

      }
    },
    computed: {
      ...mapGetters({
        userData: 'getUserData'
      })
    },
    watch: {
      userData (newVal) {
        console.log(newVal)
        if (newVal.success) {
          this.logged = newVal.success
          this.data = newVal.data
        }
      }
    }
  }
</script>
<style>
  @import './Dashboard.scss';
</style>
