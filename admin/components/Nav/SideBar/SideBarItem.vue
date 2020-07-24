<template>
  <li class="side-bar-item">
    <component v-bind:is="type" :name="name" :items="items" :icon="icon" :path="path" @reset="$emit('reset')"  />
  </li>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import Group from './Group.vue'
import Parent from './Parent.vue'
import Single from './Single.vue'

@Component({
  components: { group: Group, parent: Parent, single: Single }
})
export default class SideBarItem extends Vue {
  @Prop() readonly icon!: string
  @Prop({ required: true }) readonly name!: string
  @Prop({ required: true }) readonly type!: string
  @Prop() readonly items!: Array<object>
  @Prop() readonly path!: string
}
</script>

<style lang="scss" scoped>

</style>