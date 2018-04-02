<template>
	<div class="pop-up" v-if="visible === 'stats'">
    	<div class="left-column">
			<div class="pop-up-content">
            <div class="close-pop-up"></div>
            <div class="pop-up-header">
                <h2>DID Number Stats</h2>
                <p>Some text here, so uers feels pleased and happy.</p>
            </div>
            <div class="pop-up-text-content">
                <div class="did-number-details-content">
                    <table>
                        <tr>
                            <td>CALLS PROCESSED</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>CALLS COMPLETED</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>CALLS FAILED</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>ACD</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>MOU</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>PEAK</td>
                            <td>0</td>
                        </tr>
                    </table>
                </div>
                <div class="buttons-content">
                    <a @click="cancel"><p class="cancel-btn">Back</p></a>
                </div>
            </div>
        </div>
		 </div>
	</div>
</template>
<script type="text/javascript">
	let didStats = {}
	export default {
		props: ['visible', 'cancel'],
		data () {
			return didStats
		}
	}
</script>
<style>
	@import '../MyDIDPopUp.scss';
</style>