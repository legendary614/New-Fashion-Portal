<template>
	<div class="main-menu-content col-10">
         <div class="row-content">
             <div class="call-logo">
                <div class="logo-img"></div>
                   <h1>CALL1800</h1>
             </div>
	        <div class="menu-category">
	             <ul>
	                <li v-for="item in menuitem">
	                  <a @click="scroll(item.scroll)">{{item.title}}</a>
	                </li>
	             </ul>
	         </div>
    	</div>
    </div>
</template>
<script type="text/javascript">
  let menuData = {}

  export default {
    props: [
      'menuitem'
    ],
    data () {
      return menuData
    },
    methods: {
      scroll (content) {
        let height = document.getElementById(`${content}`).offsetTop - 30
        console.log(height)
        let scroll = 0
        let step = 36

        let interval = setInterval(() => {
          scroll += step
          if (scroll >= height) {
            clearInterval(interval)
          }
          console.log(scroll)

          document.getElementsByTagName('body')[0].scrollTop = scroll
        }, 10)
      }
    }
  }

</script>

<style>
	@import './Menu.scss';
</style>
