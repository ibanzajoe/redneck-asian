<template>
  <button
    class="focus:outline-none rounded-lg w-8 h-8 text-black flex items-center justify-center"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>  
</template>

<script>
export default {
  name: 'iconbutton',
  inheritAttrs: false
}
</script>