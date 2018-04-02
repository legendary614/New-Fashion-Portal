<template>
	 <div :class="['select-item-content', this.className]">
        <div class="selected-item">
            <div class="option first-option">
                <input @click="optionToggle" type="radio" name="group" class="input-select">
                <p>{{ optionData.selected }}</p>
            </div>
        </div>
        <div :class="['option-wrap', { 'option-wrap-visible': optionData.visible }]">
            <div @click="selectOption(opt)" class="option" v-for="opt in optionData.options">
                <input type="radio" name="group" class="input-select">
                <p>{{ opt }}</p>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	let optionData = {
		
	}
	export default {
		props: ['optionData', 'className'],
		data () {
			return optionData
		},
		methods: {
			optionToggle () {
                this.optionData.visible = !this.optionData.visible
            },
            selectOption (opt) {
                this.optionData.selected = opt
                this.optionData.visible = false
            }
		}
	}
</script>
<style>
	@import './Option.scss';
</style>