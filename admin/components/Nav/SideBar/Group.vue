<template>
  <div class="group uppercase">
    {{name}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Group extends Vue {
  @Prop({required: true}) readonly name!: String
}
</script>

<style lang="scss" scoped >

.group {
  color: hsla(0,0%, 100, 0.6);
  background-color: #3c4b64;
  padding: 0.75rem 1rem;
  padding-top: 1.75rem;

  font-size: 80%;
  font-weight: 700;
}
</style>