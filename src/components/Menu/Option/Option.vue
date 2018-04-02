<template>
	 <div class="select-item-content export-select">
        <div class="selected-item">
            <div class="option first-option">
                <input @click="optionToggle" type="radio" name="group" class="input-select">
                <p>{{ optionData.selected }}</p>
            </div>
        </div>
        <div :class="['option-wrap', { 'option-wrap-visible': optionVisible }]">
            <div @click="selectOption(opt)" class="option" v-for="opt in optionData.options">
                <input type="radio" name="group" class="input-select">
                <p>{{ opt }}</p>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	let optionData = {
		optionVisible: false,
	}
	export default {
		props: ['optionData'],
		data () {
			return optionData
		},
		methods: {
			optionToggle () {
                this.optionVisible = !this.optionVisible
            },
            selectOption (opt) {
                this.optionData.selected = opt
                this.optionVisible = false
            }
		}
	}
</script>
<style>
	@import './Option.scss';
</style>