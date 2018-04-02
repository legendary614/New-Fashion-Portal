<template>
	<div class="my-trunk-groups">
		<div class="container-head">
	         <h2><span>origination</span>. my trunk groups</h2>
	         <p>Create and manage trunks between our Network and yours. This is just for Origination, where we send you calls to your DIDs.</p>
	         <p class="account-level">Account Level Sessions: <span>0</span></p>
	         <a href=""><button class="add-number-btn">Add new</button></a>
	     </div>
	     <router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	let myTrunk = {}

	export default {
		data () {
			return myTrunk
		}
	}

</script>
<style>
	@import './MyTrunk.scss';
</style>