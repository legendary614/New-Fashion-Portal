<template>
    <div class="main-content">
        <div class="container-head">
            <h2><span>billing</span>. payment checkout</h2>
        </div>
        <div class="container-content">
            <div class="left-column">
                <p class="text-p">The minimum amount when adding credit is $25.00</p>
                <div class="billing-activity-table-content">
                    <table>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>CHARGES</th>
                        </tr>
                        <tr>
                            <td>Entered Amount (Paypal)</td>
                            <td>$1.05</td>
                        </tr>
                        <tr>
                            <td>Paypal Fee</td>
                            <td>$1.05</td>
                        </tr>
                    </table>
                </div>
                <div class="bottom-content">
                    <p class="total-p">Total: <strong>$31,27</strong></p>
                    <a href=""><p class="cancel-btn">Cancel</p></a>
                    <a href=""><button class="checkout-btn">Checkout</button></a>
                </div>
            </div>
            <div class="right-column">
                <div class="accept-payment-content">
                    <h2>we accept payment</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
                    <p>since the 1500s, when an unknown printer took a galley of type and scram- bled it to make a type specimen book. </p>
                    <div class="acept-btn-content">
                        <a href=""><button class="google-img"></button></a>
                        <a href=""><button class="skrill-img"></button></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="text/javascript">
    let billingCheckout = {}
    export default {
        data () {
            return billingCheckout
        }
    }
</script>
<style>
    @import './BillingCheckout.scss';
</style>