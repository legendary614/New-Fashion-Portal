<template>
	<div class="pop-up" v-if="visible === 'callforward'">
    	<div class="right-column">
			<div class="pop-up-content">
	            <div class="close-pop-up"></div>
	            <div class="pop-up-header">
	                <h2>Enable E911 Service on 2013004567</h2>
	                <p>Some text here, so uers feels pleased and happy.</p>
	            </div>
	            <div class="pop-up-text-content">
	                <div class="add-card-content">
	                    <form>
	                        <label>CALLER NAME</label>
	                        <input type="text">
	                        <label>CITY</label>
	                        <input type="text">
	                        <label>STATE</label>
	                        <input type="text">
	                        <label>ZIP CODE</label>
	                        <input type="text">
	                        <label>address</label>
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
	let callForward = {}
	export default {
		props: ['visible', 'cancel'],
		data () {
			return callForward
		}
	}
</script>
<style>
	@import './CallForward.scss';
</style>