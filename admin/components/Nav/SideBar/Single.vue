<template>
  <nuxt-link @click.native="$emit('reset')" class="single flex items-center capitalize" :class="{'no-icon': !icon}" :to="path">
    <span v-if="icon" class="icon flex items-center justify-center transition-all duration-200 ease-linear" v-html="icon" />
    {{name}}
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Single extends Vue {
  @Prop() readonly icon!: string
  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly path!: string
}
</script>

<style lang="scss" scoped>
.single {
  color: #fff;
  background-color: #3c4b64;
  transition: background-color 200ms ease-in-out;

  padding: 0.8445rem 1rem;
  font-size: 14px;

  .icon {
    display: flex;
    width: 56px;
    margin-left: -1rem;
    color: hsla(0, 0%, 100, 0.6);
  }

  &.no-icon {
    padding-left: 2rem;
  }

  &:hover {
    background-color: #321fdb;
    .icon {
      color: white;
    }
  }
}
</style>