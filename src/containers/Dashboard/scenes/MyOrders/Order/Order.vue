<template>
	<div class="pop-up" v-if="visible">
    <div class="pop-up-content">
        <div class="close-pop-up"></div>
        <div class="pop-up-header">
            <h2>Order No: {{ data.orderNo}}</h2>
            <p>Some text here, so uers feels pleased and happy.</p>
        </div>
        <div class="pop-up-text-content">
            <div class="pop-up-table-content">
                <table>
                    <tr>
                        <th>SR#</th>
                        <th>DID NUMBER</th>
                        <th>PRICE</th>
                        <th>ACTIVATION DATE</th>
                        <th>STATUS</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{{ data.orderNo }}</td>
                        <td>${{ data.amount }}</td>
                        <td>{{ data.dateTime }}</td>
                        <td>
                            <a href=""><button class="active-btn">ACTIVE</button></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="buttons-content">
                <a @click="back"><p class="cancel-btn">Back</p></a>
            </div>
        </div>
    </div>
</div>
</template>
<script type="text/javascript">
	let orderData = {}
	export default {
		props: ['visible', 'data', 'back'],
		data () {
			return orderData
		}
	}
</script>
<style>
	@import '../MyOrdersPopUp.scss';
</style>