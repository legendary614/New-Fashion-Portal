<template>
  <transition name="modal">
  <div :class="['select-item-content', this.className]" v-if="show">

      <div class="pop-up-window-background">
        <div class="pop-up">
          <div class="pop-up-content">
            <div class="close-pop-up" @click="$emit('close')"></div>
            <div class="pop-up-header">
              <slot name="header">
                default header
              </slot>
            </div>

            <div class="pop-up-text-content">
              <slot name="body">
                default body
              </slot>
            </div>
          </div>
        </div>
      </div>
  </div>
  </transition>
</template>

<script>
  export default {
    props: ['show', 'optionData', 'className']
  }
</script>

<style>
  @import './Modal.scss';

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .pop-up-content,
  .modal-leave-active .pop-up-content {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

</style>
