<template>
  <nav class="flex items-center justify-between flex-wrap p-4 shadow">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <slot name="logo" />
    </div>


    <div class="inline-block flex-grow">
      <div class="hidden sm:flex sm:items-center sm:justify-end">
        <slot name="link-block" />
      </div>
      <div class="flex items-center justify-end sm:hidden">
        <IconButton>
          <menu-icon style="width: 24px; height: 24px;" />
        </IconButton>
      </div>
    </div>

    <!-- <a href="#responsive-header" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white">
          Blog
        </a> -->
    <!-- <div class="block sm:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 sm:mt-0">Download</a>
      </div>
    </div> -->
  </nav>  
</template>

<script>
import IconButton from '~/components/Button/IconButton'
import MenuIcon from '@/assets/icons/menu.svg'
export default {
  components: { IconButton, MenuIcon }
}
</script>

<style scoped>

</style>