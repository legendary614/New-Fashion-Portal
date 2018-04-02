<template>
	<div class="home">
    <appheader></appheader>
    <appmodal :show="showModal" @close="showModal = false">
      <h2 slot="header">This is not a free number</h2>
      <p slot="body">You can pay 1 USD to dial the number</p>
      <div slot="body" class="buttons-content">
        <a href="" @click.prevent="showModal = false"><p class="cancel-btn">Cancel call</p></a>
        <a href=""><button class="save-btn proceed-btn">Proceed to checkout</button></a>
      </div>

    </appmodal>
    <appmenu :menuitem="menuData"></appmenu>
		<div class="row-slide-content">
           <div class="slide-background">
               <div class="slider-content">
                   <h2 class="header-text">We will save your time for you</h2>
                   <div class="search-number-content">
                       <div class="select-item-content">
                           <div class="selected-item">
                               <div class="option first-option">
                                   <input @click="slideToggle" type="radio" name="group" class="input-select"/>
                                   <p>{{ this.slide.selected }}</p>
                               </div>
                           </div>
                           <div :class="['option-wrap', { 'option-wrap-visible': this.slideVisible }]">
                               <div class="option" @click="selectSlide(opt)" v-for="opt in slide.options">
                                   <input type="radio" name="group" class="input-select" />
                                   <p>{{ opt }}</p>
                               </div>
                           </div>
                       </div>
                       <input @change="searchNumber" v-model="numberToCall" type="text" class="search-number-input" placeholder="Search the number to call">
                       <a @click="makeCall"><button class="call-for-free-btn" :disabled="!numberToCall" v-if="!calling">Call for FREE</button></a>
                       <a @click="endCall"><button class="call-for-free-btn" v-if="calling">{{(calling === 'connecting') ? 'Connecting' : 'Disconnect'}}</button></a>
                       <audio id="localAudio" autoplay style="display:none;"></audio>
                   </div>
                   <div class="clients-info-content">
                       <p>We saved for our clients</p>
                       <div class="client-counts">
                           <div class="column">
                               <h2>{{ years }}</h2>
                               <span>years</span>
                           </div>
                           <div class="column">
                               <h2>{{ days }}</h2>
                               <span>days</span>
                           </div>
                           <div class="column">
                               <h2>{{ hours }}</h2>
                               <span>hours</span>
                           </div>
                           <div class="column">
                               <h2>{{ minutes }}</h2>
                               <span>minutes</span>
                           </div>
                           <div class="column">
                               <h2>{{ seconds }}</h2>
                               <span>seconds</span>
                           </div>
                       </div>
                   </div>
                   <div class="how-it-work-content">
		               <h2>how it works.</h2>
		               <div class="work-steps">
		                   <div v-for="step in howItWorks" :class="`step-column ${step.className}`">
		                       <div class="logo-content">
		                           <a><button class="step-button">{{ step.name }}</button></a>
		                           <div class="logo-img"></div>
		                       </div>
		                       <div class="text-content">
		                           <p>{{ step.text1 }}<br />{{ step.text2 }}</p>
		                       </div>
		                   </div>
		               </div>
		           </div>
               <div class="category-zip-code">
                 <div class="row-content">
                   <div class="category-list">
                     <el-select v-model="selectedCategory" :style="{width: 100 + '%'}" filterable placeholder="Select category">
                       <el-option
                         v-for="cat in catList"
                         :key="cat"
                         :label="cat"
                         :value="cat">
                       </el-option>
                     </el-select>
                   </div>
                   <div class="zip-list">
                     <el-select v-model="selectedZip" :style="{width: 100 + '%'}" filterable placeholder="Select zip code">
                       <el-option
                         v-for="zip in zipList"
                         :key="zip"
                         :label="zip.match(/^\d*/)[0]"
                         :value="zip">
                       </el-option>
                     </el-select>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div class="popular-numbers-content" id="shop-by-category">
                <div class="col-10">
                    <div class="popular-numbers-header">
                        <h2>popular <span>toll free</span> numbers.</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                    <div class="categories-list-content">
                        <h2>categories</h2>
                        <div>
                            <div class="column" v-for="cat in categories">
                                <p v-for="title in cat.title">
                                  <router-link :to="{ name: 'category', params: { title: title }}">{{ title }}</router-link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="categories-list-content">
                        <h2>most recent companies</h2>
                        <div>
                            <div class="column" v-for="cat in recetCompany">
                                 <p v-for="title in cat.title">
                                  <router-link :to="{ name: 'category', params: { title: title }}">{{ title }}</router-link>
                                </p>
                            </div>
                        </div>
                     </div>
                 </div>
             </div>
           <div class="why-it-use-content">
                <div class="col-10">
                    <div class="why-it-use-header">
                        <h2>why use call1800.org?</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                    <div class="why-it-use-items">
                        <div class="column affordable-content">
                            <div class="item-img"></div>
                            <h2>Affordable</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div class="column accurate-content">
                            <div class="item-img"></div>
                            <h2>Accurate</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                        <div class="column simple-content">
                            <div class="item-img"></div>
                            <h2>Simple to use</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <div class="buy-number-content" id="buy-us-number">
                <div class="first-column">
                    <div class="column-content">
                        <div class="checkbox buy-number-checkbox">
                            <input @change="tollFreeNumber" type="checkbox" value="1" id="checkboxMon" name="" />
                            <label for="checkboxMon"></label>
                        </div>
                        <h2>buy <span>toll free</span> number.</h2>
                        <p class="buy-number-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    </div>
                </div>
                <div class="second-column">
                    <div class="column-content">
                        <div class="checkbox buy-number-checkbox">
                            <input type="checkbox" value="1" id="checkboxMon1" name="" checked />
                            <label for="checkboxMon1"></label>
                        </div>
                        <h2>buy <span>us</span> number.</h2>
                        <p class="buy-number-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                        <div class="unlimited-plan">
                            <div class="checkbox">
                                <input type="checkbox" value="1" id="checkboxMon2" name="" />
                                <label for="checkboxMon2"></label>
                            </div>
                            <p>DID's for the Unlimited Plan Only</p>
                        </div>
                        <div class="select-boxes-content">
                            <div class="select-item-content">
                                <div class="selected-item">
                                    <div class="option first-option">
                                        <input value="searchState" @click="buyUsNumberToggle" type="radio" name="group" class="input-select"/>
                                        <p>{{ searchState.selected }}</p>
                                    </div>
                                </div>
                                <div :class="['option-wrap', { 'option-wrap-visible': searchState.visible }]">
                                    <div class="option" v-for="opt in searchState.options">
                                        <input value="searchState" @click="e => { buyUsNumberSelect(e.target.value, opt) }" type="radio" name="group" class="input-select" />
                                        <p>{{ opt }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="select-item-content">
                                <div class="selected-item">
                                    <div class="option first-option">
                                        <input value="selectRateCenter" @click="buyUsNumberToggle" type="radio" name="group" class="input-select"/>
                                        <p>{{ selectRateCenter.selected }}</p>
                                    </div>
                                </div>
                                <div :class="['option-wrap', { 'option-wrap-visible': selectRateCenter.visible }]">
                                    <div class="option" v-for="opt in selectRateCenter.options">
                                        <input value="selectRateCenter" @click="e => { buyUsNumberSelect(e.target.value, opt) }" type="radio" name="group" class="input-select" />
                                        <p>{{ opt }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="select-item-content">
                                <div class="selected-item">
                                    <div class="option first-option" >
                                        <input value="npAnxx" @click="buyUsNumberToggle" type="radio" name="group" class="input-select"/>
                                        <p>{{ npAnxx.selected }}</p>
                                    </div>
                                </div>
                                <div :class="['option-wrap', { 'option-wrap-visible': npAnxx.visible }]">
                                    <div class="option" v-for="opt in npAnxx.options">
                                        <input value="npAnxx" @click="e => { buyUsNumberSelect(e.target.value, opt) }" type="radio" name="group" class="input-select" />
                                        <p>{{ opt }}</p>
                                    </div>
                                </div>
                            </div>
                            <router-link to="/buyUsNumber"><button class="search-btn">Search</button></router-link>
                        </div>
                    </div>
                </div>
            </div>
        <appfooter></appfooter>
    </div>
</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex'
  import Header from '@/components/Header/Header'
  import Footer from '@/components/Footer/Footer'
  import Menu from '@/components/Menu/Menu'
  import Modal from '@/components/Modal/Modal'
  import SIP from 'sip.js/dist/sip-0.7.8.min'
  import data from './data/data.json'
  import Vue from 'vue'
  import {Select, Option} from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'

  Vue.use(Select)
  Vue.use(Option)

  let homeData = {
    slideVisible: false,
    years: 127,
    days: 87,
    hours: 14,
    minutes: 20,
    seconds: 0,
    searchState: {
      visible: false,
      selected: 'Search state',
      options: ['Search state', 'Search state1', 'Search state2']
    },
    selectRateCenter: {
      visible: false,
      selected: 'Select Rate center',
      options: ['Select Rate center', 'Select Rate center1', 'Select Rate center2']
    },
    npAnxx: {
      visible: false,
      selected: 'NP ANX',
      options: ['NP ANX', 'NP ANX1', 'NP ANX2']
    },
    sipConfig: {
//      uri: '7183334444@free.denovolab.com',
      uri: '7887055225@webrtc.call1800.org',
//      wsServers: ['wss://free.denovolab.com:7443'],
      wsServers: ['wss://webrtc.call1800.org:7443'],
      hackWssInTransport: true,
      traceSip: true,
      hackIpInContact: true,
      rtcpMuxPolicy: 'negotiate'
    },
    numberToCall: null,
    calling: false,
    ua: null,
    callOptions: null,
    session: null,
    catList: [],
    selectedCategory: null,
    zipList: [],
    selectedZip: null,
    showModal: false
  }

  export default {
    data () {
      return homeData
    },
    mounted () {
      this.catList = data.categories.filter(function (item, pos) {
        return data.categories.indexOf(item) === pos
      })
      this.zipList = data.zip
      this.ua = new SIP.UA(this.sipConfig)
      this.callOptions = {
        media: {
          constraints: {
            audio: true
          },
          render: {
            local: {
              audio: document.createElement('audio')
            }
          }
        }
      }
    },
    methods: {
      makeCall () {
        if (this.numberVerify) {
          this.calling = 'connecting'
          if (this.numberToCall) {
//          this.session = this.ua.invite('sip:' + this.numberToCall + '@158.69.220.125', this.callOptions)
            this.session = this.ua.invite('sip:' + this.numberToCall + '@151.80.37.10', this.callOptions)
            let $this = this
            this.session.on('accepted', function (data) {
              console.log('ASD accepted', data)
              $this.calling = 'accepted'
              let element = document.getElementById('localAudio')
              let stream = this.mediaHandler.getRemoteStreams()[0]
              if (typeof element.srcObject !== 'undefined') {
                element.srcObject = stream
              } else if (typeof element.mozSrcObject !== 'undefined') {
                element.mozSrcObject = stream
              } else if (typeof element.src !== 'undefined') {
                element.src = URL.createObjectURL(stream)
              } else {
                console.log('Error attaching stream to element.')
              }
            })

            this.session.on('failed', function (data) {
              console.log('failed')
              this.calling = false
              this.session = null
            })

            this.session.on('rejected', function (data) {
              console.log('rejected')
              this.calling = false
              this.session = null
            })

            this.session.on('cancel', function (data) {
              console.log('cancel')
              this.calling = false
              this.session = null
            })

            this.session.on('bye', function (data) {
              console.log('bye')
              if (this.calling === 'accepted') {
                this.calling = false
              }
              this.session = null
            }.bind(this))
          }
        } else {
          this.showModal = true
        }
      },
      endCall () {
        if (this.calling === 'accepted') {
          this.session.bye()
        } else {
          console.log('cancel connecting')
          this.session.terminate()
          this.calling = false
          this.session = null
        }
      },
      buyUsNumberToggle (e) {
        this[e.target.value].visible = !this[e.target.value].visible
      },
      buyUsNumberSelect (value, selected) {
        this[value].selected = selected
        this[value].visible = false
      },
      slideToggle () {
        this.slideVisible = !this.slideVisible
      },
      selectSlide (slide) {
        this.$store.dispatch('selectSlide', {slide: slide})
        this.slideVisible = false
      },
      tollFreeNumber (e) {
        console.log(e.target.checked)
      },
      searchNumber (e) {
        console.log(e.target.value)
      }
    },
    computed: {
      ...mapGetters({
        slide: 'getSlideData',
        howItWorks: 'howItWorksSteps',
        categories: 'getCategories',
        recetCompany: 'getRecentCompany',
        menuData: 'getMenuData'
      }),
      numberVerify () {
        let re = /(^1800\d*)/i
        return this.numberToCall.match(re)
      }
    },
    components: {
      'appheader': Header,
      'appmenu': Menu,
      'appfooter': Footer,
      'appmodal': Modal
    }
  }
</script>

<style>
	@import './Home.scss';

  .category-zip-code {
    margin-top: 78px;
    margin-left: 63px;
  }

  .category-list {
    display: inline-block;
    width: 49%;
    vertical-align: top;
  }

  .zip-list {
    display: inline-block;
    width: 49%;
    vertical-align: top;
  }
</style>
