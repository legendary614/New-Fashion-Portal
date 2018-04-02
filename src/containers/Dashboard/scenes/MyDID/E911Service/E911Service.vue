<template>
	<div class="pop-up" v-if="visible === 'e991service'">
    	<div class="right-column">
			<div class="pop-up-content">
		         <div class="close-pop-up"></div>
		         <div class="pop-up-header">
		             <h2>Call Forward Number</h2>
		             <p>Some text here, so uers feels pleased and happy.</p>
		         </div>
		        <div class="pop-up-text-content">
		            <div class="add-card-content">
		                <form>
		                    <label>CALL FORWARD NUMBER</label>
		                    <input type="text">
		                </form>
		            </div>
		            <div class="buttons-content">
		                <a @click="cancel"><p class="cancel-btn">Cancel</p></a>
		                <a href=""><button class="save-btn">Save</button></a>
		            </div>
		        </div>
		    </div>
		 </div>
	</div>
</template>
<script type="text/javascript">
	let e911Service = {}
	export default {
		props: ['visible', 'cancel'],
		data () {
			return e911Service
		}
	}
</script>
<style>
	@import '../MyDIDPopUp.scss';
</style>