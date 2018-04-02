<template>
    <div class="main-content">
        <div class="container-head">
            <h2><span>origination</span>. E911 numbers</h2>
            <p>Manage all order activity. LNP order status "approved" still requires the number to be activiated. You may cancel or modify orders anytime, but once a FOC date is issued, please make sure you communicate with us if the change required is on the same date.</p>
            <a href=""><button class="add-number-btn">Add number</button></a>
        </div>
        <div class="container-content">
            <div class="filter-box">
                <div class="left-side-div">
                    <p class="display-p">Display:</p>
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
                    <p class="display-p">records</p>
                    <div class="select-item-content export-select action-select">
                        <div class="selected-item">
                            <div class="option first-option">
                                <input type="radio" name="group" class="input-select">
                                <p>Actions</p>
                            </div>
                        </div>
                        <div class="option-wrap">
                            <div class="option">
                                <input type="radio" name="group" class="input-select">
                                <p>Actions</p>
                            </div>
                            <div class="option">
                                <input type="radio" name="group" class="input-select">
                                <p>Actions1</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="csv-content">
                    <p>CSV</p>
                    <div class="csv-img"></div>
                </div>
                <input type="text" placeholder="Search" class="search-input">
            </div>
            <div class="billing-activity-table-content">
                <table>
                    <tr>
                        <th>
                            <div class="checkbox">
                                <input type="checkbox" value="1" id="checkboxMon" name="" />
                                <label for="checkboxMon"></label>
                            </div>
                        </th>
                        <th>DID</th>
                        <th>ORDER NO</th>
                        <th>MRC</th>
                        <th>E911</th>
                        <th>STATUS</th>
                    </tr>
                    <tr>
                        <td>No data available in table</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    let e991Numbers = {}
    export default {
        data () {
            return e991Numbers
        },
        mounted () {
            document.getElementById('dashboard-main').className = 'e991numbers-main'
        }
    }
</script>
<style>
    @import './E991Numbers.scss';
</style>