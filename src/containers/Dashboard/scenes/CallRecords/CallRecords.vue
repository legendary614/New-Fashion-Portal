<template>
	<div class="main-content">
        <div class="container-head">
            <h2><span>origination</span>. call records</h2>
            <p>Manage all order activity. LNP order status "approved" still requires the number to be activiated. You may cancel or modify orders anytime, but once a FOC date is issued, please make sure you communicate with us if the change required is on the same date.</p>
        </div>
        <div class="container-content">
            <div class="download-view-btns-content">
                <a href=""><button class="download-cdr-btn">Download CDR's</button></a>
                <a href=""><button class="view-calls-btn">View failed calls</button></a>
                <div class="select-item-content trunk-groups-select">
                    <div class="selected-item">
                        <div class="option first-option">
                            <input type="radio" name="group" class="input-select">
                            <p>All Trunk groups</p>
                        </div>
                    </div>
                    <div class="option-wrap">
                        <div class="option">
                            <input type="radio" name="group" class="input-select">
                            <p>All Trunk groups</p>
                        </div>
                        <div class="option">
                            <input type="radio" name="group" class="input-select">
                            <p>All Trunk groups1</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calls-sms-choose-content">
                <div class="successful-calls active-success-attemps">
                    <p>Successful calls attemps</p>
                </div>
                <div class="successful-sms">
                    <p>Successful SMS attemps</p>
                </div>
                <hr>
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
                    <input type="text" placeholder="Search" class="search-input">
                </div>
                <div class="billing-activity-table-content">
                    <table>
                        <tr>
                            <th>TG IP</th>
                            <th>START TIME</th>
                            <th>ANS TIME</th>
                            <th>CALLING NUMBER</th>
                            <th>DIALER NUMBER</th>
                            <th>ACCOUNT TYPE</th>
                            <th>BILLING</th>
                            <th>NUMBER TYPE</th>
                        </tr>
                        <tr>
                            <td>108.165.2.98</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>19492840850</td>
                            <td>19492840850</td>
                            <td>NA</td>
                            <td>Postpay</td>
                            <td>Metered</td>
                        </tr>
                        <tr>
                            <td>108.165.2.98</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>19492840850</td>
                            <td>19492840850</td>
                            <td>NA</td>
                            <td>Postpay</td>
                            <td>Metered</td>
                        </tr>
                        <tr>
                            <td>108.165.2.98</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>19492840850</td>
                            <td>19492840850</td>
                            <td>NA</td>
                            <td>Postpay</td>
                            <td>Metered</td>
                        </tr>
                        <tr>
                            <td>108.165.2.98</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>19492840850</td>
                            <td>19492840850</td>
                            <td>NA</td>
                            <td>Postpay</td>
                            <td>Metered</td>
                        </tr>
                        <tr>
                            <td>108.165.2.98</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>2017-04-03 16:19:19</td>
                            <td>19492840850</td>
                            <td>19492840850</td>
                            <td>NA</td>
                            <td>Postpay</td>
                            <td>Metered</td>
                        </tr>
                    </table>
                </div>
                <div class="info-steps contact-table-steps">
                    <a href=""><button class="arrow-left"></button></a>
                    <button class="table-page-number">10</button>
                    <a href=""><button class="arrow-right arrow-right-disabled"></button></a>
                </div>

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	let callRecords = {}
	export default {

	}
</script>
<style>
	@import './CallRecords.scss';
</style>