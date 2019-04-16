<template>
  <li
    class="hooper-slide"
    :class="{
      'is-clone': isClone, 
      'is-active': isActive,
      'is-prev': isPrev,
      'is-next': isNext,
      'is-current': isCurrent
    }"
    :aria-hidden="isActive"
    :style="style"
  >
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'HooperSlide',
    inject: ['$hooper'],
    props: {
      isClone: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: 0
      }
    },
    computed: {
      style() {
        const { config, slideHeight, slideWidth } = this.$hooper || {};

        if (config.vertical) {
          return `height: ${slideHeight}px`;
        }
        return `width: ${slideWidth}px`;
      },
      lower() {
        const { config, currentSlide, slidesCount } = this.$hooper || {};
        const siblings = config.itemsToShow;
        return config.centerMode
          ? Math.ceil(currentSlide - siblings / 2)
          : currentSlide;
      },
      upper() {
        const { config, currentSlide, slidesCount } = this.$hooper || {};
        const siblings = config.itemsToShow;

        return config.centerMode
          ? Math.floor(currentSlide + siblings / 2)
          : Math.floor(currentSlide + siblings - 1);
      },
      isActive() {
        return this.correctIndex >= this.lower  && this.correctIndex <= this.upper;
      },
      isPrev() {
        return this.correctIndex <= this.lower - 1;
      },
      isNext() {
        return this.correctIndex >= this.upper + 1;
      },
      isCurrent() {
        return this.correctIndex === this.$hooper.currentSlide;
      },
      correctIndex() {
        let index = 0;
        
        if (this.$attrs.index) {
          index = this.$attrs.index - 1;
        } else {
          index = this.index
        }

        return index
      }
    },
  }
</script>

<style>
.hooper-slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
