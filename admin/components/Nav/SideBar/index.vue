<template>
  <div class="side-bar h-screen">

    <!-- top block - for logo use? -->
    <div @click="$router.push('/')" class="hidden logo-block sm:flex items-center justify-center">
      <slot name="logo" />
    </div>

    <div class="home">
      <ul>
        <template v-for="(item, index) in navigations">
          <side-bar-item 
            :key="`${item.type}-${index}`" 
            :icon="item.icon" 
            :name="item.name" 
            :items="item.items" 
            :type="item.type"
            :path="item.path"
            @reset="$emit('reset')"
          />
        </template>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import SideBarItem from './SideBarItem.vue'

@Component({
  components: { SideBarItem }
})
export default class SideBar extends Vue {
  @Prop({ required: true }) readonly navigations!: Array<object>
}
</script>

<style lang="scss" scoped>
  .side-bar {
    position: fixed;
    top: 0; bottom: 0;
    left: 0;

    width: 256px;
    background-color: #303C54;
    margin-left: -256px;
    transition: margin-left 200ms ease;
    .logo-block {
      height: 64px;
    }

    &.is-active {
      margin-left: 0;      
    }
  }
</style>