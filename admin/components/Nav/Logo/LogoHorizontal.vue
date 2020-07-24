<template>
  <div class="flex items-center h-10 overflow:hidden">
    <img :src="logo" alt="logo" />
  </div>
</template>

<script lang='ts'>
import * as LogoHorizontalImage from '@/assets/images/logo_horizontal.png'
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LogoHorizontal extends Vue {
  logo: string = LogoHorizontalImage
}
</script>