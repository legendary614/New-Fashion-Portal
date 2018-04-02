<template>
	<div class="pop-up" v-if="visible === 'details'">
    	<div class="left-column">
    		<div class="pop-up-content">
            <div class="close-pop-up"></div>
            <div class="pop-up-header">
                <h2>DID Number Details</h2>
                <p>Some text here, so uers feels pleased and happy.</p>
            </div>
            <div class="pop-up-text-content">
                <div class="did-number-details-content">
                    <table>
                        <tr>
                            <td>DID NUMBER</td>
                            <td>2013004567</td>
                        </tr>
                        <tr>
                            <td>DID RATE</td>
                            <td>$0.00000</td>
                        </tr>
                        <tr>
                            <td>ORDER NO</td>
                            <td>975771</td>
                        </tr>
                        <tr>
                            <td>TRUNK GROUP</td>
                            <td>19_test</td>
                        </tr>
                        <tr>
                            <td>SESSIONS</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>DID TYPE</td>
                            <td>MATERED</td>
                        </tr>
                        <tr>
                            <td>ORDER TYPE</td>
                            <td>NEW</td>
                        </tr>
                        <tr>
                            <td>CNAM</td>
                            <td>
                                <div class="cnam-td">
                                    <div class="select-item-content export-select">
                                        <div class="selected-item">
                                            <div class="option first-option">
                                                <input type="radio" name="group" class="input-select">
                                                <p>10</p>
                                            </div>
                                        </div>
                                        <div class="option-wrap">
                                            <div class="option">
                                                <input type="radio" name="group" class="input-select">
                                                <p>10</p>
                                            </div>
                                            <div class="option">
                                                <input type="radio" name="group" class="input-select">
                                                <p>11</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Per Dip (0.0060)</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>STATUS</td>
                            <td>
                                <a href=""><button class="processed-btn">PROCESSED</button></a>
                            </td>
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
	let didDetails = {}
	export default {
		props: ['visible', 'cancel'],
		data () {
			return didDetails
		}
	}
</script>
<style>
	@import '../MyDIDPopUp.scss';
</style>