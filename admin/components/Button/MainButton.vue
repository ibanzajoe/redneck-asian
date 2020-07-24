<template>
  <button class="main_button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none"
    :class="{'is_loading': loading}"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span><slot/></span>
    <LoadingSVG />
  </button>  
</template>

<script>
import LoadingSVG from '~/components/Utility/LoadingSVG'
export default {
  name: 'mainbutton',
  props: ['loading'],
  components: { LoadingSVG },
  inheritAttrs: false
}
</script>

<style scoped>
button {
  position: relative;
}
button svg {
  display: none;
}
button.is_loading span {
  color: transparent;
}
button.is_loading svg {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
</style>