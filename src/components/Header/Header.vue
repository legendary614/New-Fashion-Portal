<template>

	<header>
	   <div class="header-content col-10">
	       <router-link  to="/login" class="login-account">Login into account</router-link>
	   </div>
	</header>

</template>
<script type="text/javascript">
  let headerData = {}

  export default {
    data () {
      return headerData
    }
  }
</script>
<style>
	@import './Header.scss';
</style>
