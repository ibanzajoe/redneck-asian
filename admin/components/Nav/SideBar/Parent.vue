<template>
  <div class="parent" :class="{'is-active': toggle}">
    <a @click.prevent="toggle = !toggle" class="dropdown-toggle flex items-center cursor-pointer capitalize transition-all duration-200 ease-linear">
      <span class="icon flex items-center justify-center transition-all duration-200 ease-linear" v-html="icon" />
      {{name}}
    </a>
    <ul v-if="items" class="children">
      <nuxt-link 
        @click.native="$emit('reset')"
        class="child flex items-center cursor-pointer capitalize transition-all duration-200 ease-linear"
        v-for="(item, index) in items" 
        :key="index" :to="item.path" 
        tag="li" 
      >
        {{item.name}}
      </nuxt-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Parent extends Vue {
  @Prop({ required: true }) readonly name!: string
  @Prop() readonly icon!: string
  @Prop() readonly items!: Array<object>
  toggle: boolean = false
}
</script>

<style lang="scss" scoped>

.parent {
  color: #fff;
  background-color: #3c4b64;
  transition: background-color 200ms ease-in-out;
  .dropdown-toggle {
    display: flex;
    padding: 0.8445rem 1rem;

    font-size: 14px;
    .icon {
      display: flex;
      width: 56px;
      margin-left: -1rem;
      color: hsla(0,0%, 100, 0.6);
    }

    &:after {
      content: '';
      margin-left: auto;
      display: block;
      flex: 0 8px;
      height: 8px;
      background-repeat: no-repeat;
      background-position: 50%;
      background-image: url(data:image/svg+xml;charset=utf8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMSAxNCc+PHBhdGggZmlsbD0ncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyBkPSdNOS4xNDggMi4zNTJsLTQuMTQ4IDQuMTQ4IDQuMTQ4IDQuMTQ4cTAuMTQ4IDAuMTQ4IDAuMTQ4IDAuMzUydC0wLjE0OCAwLjM1MmwtMS4yOTcgMS4yOTdxLTAuMTQ4IDAuMTQ4LTAuMzUyIDAuMTQ4dC0wLjM1Mi0wLjE0OGwtNS43OTctNS43OTdxLTAuMTQ4LTAuMTQ4LTAuMTQ4LTAuMzUydDAuMTQ4LTAuMzUybDUuNzk3LTUuNzk3cTAuMTQ4LTAuMTQ4IDAuMzUyLTAuMTQ4dDAuMzUyIDAuMTQ4bDEuMjk3IDEuMjk3cTAuMTQ4IDAuMTQ4IDAuMTQ4IDAuMzUydC0wLjE0OCAwLjM1MnonLz48L3N2Zz4=);
      transition: transform 200ms;
    }

    &:hover {
      background-color: #321fdb; 
      .icon {
        color: white;
      }
    }
  }

  .children {
    max-height: 0;
    overflow: hidden;
    transition: max-height 250ms ease-in-out;
    .child {
      font-size: 14px;
      padding: 0.8445rem 1rem;
      padding-left: 56px;
      background: 0 0;
      flex: 1;

      &.nuxt-link-active {
        background-color: hsla(0,0%,100%,.05);
      }


      &:hover {
        background-color: #321fdb;
      }
    }
  }

  &.is-active {
    background-color: #303C54;
    .dropdown-toggle {
      &:after {
        transform: rotate(-90deg);
        transition: transform 200ms;
      }
    }
    .children {
      max-height: 1500px;
    }
  }
}


</style>