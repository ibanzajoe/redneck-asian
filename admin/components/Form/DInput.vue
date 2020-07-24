<template>
  <div class="dinput text-left">
    <label class="text-xl" :for="id">
      {{label}}:
    </label>
    <input class="appearance-none border rounded w-full my-1 py-2 px-2 focus:outline-none focus:shadow"
      :id="id"
      :name="id"
      :type="type ? type : 'text'"
      v-bind="$attrs"
      v-bind:value="value"
      v-on="inputListeners"
    />
  </div>
</template>

<script>
export default {
  name: 'DInput',
  inheritAttrs: false,
  props: ['id', 'value', 'label', 'type'],
  computed: {
    inputListeners () {
      let vm = this
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.dinput {
  margin-bottom: 0.5rem;
}
</style>