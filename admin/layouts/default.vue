<template>
  <div class="default-layout">
    <side-bar :class="{'is-active': side_bar}" :navigations="navigations" @reset="reset">
      <template v-slot:logo>
        <Logo />
      </template>
    </side-bar>
    <div class="main-content flex flex-col " :class="{'has-side-bar': side_bar}">
      <header>
        <MainNav>
          <template v-slot:logo>
            <IconButton>
              <menu-icon @click="side_bar = !side_bar" style="width: 24px; height: 24px;" />
            </IconButton>
          </template>
          
          <template v-slot:link-block>
            <span v-if="loggedIn" @click="logOut" style="cursor: pointer;">Log Out</span>
            <nuxt-link v-else to="/login" style="cursor: pointer;">Sign In</nuxt-link>
          </template>
        </MainNav>
      </header>
      <div class="page-content">
        <nuxt />
      </div>
      
    </div>
    <div @click="side_bar = false" class="side-bar-overlay" :class="{'is-active': side_bar}" />
  </div>
</template>

<script lang="ts">
import MainNav from '@/components/Nav/MainNav.vue'
import Logo from '@/components/Nav/Logo/LogoHorizontal.vue'
import SideBar from '@/components/Nav/SideBar/index.vue'
import IconButton from '@/components/Button/IconButton.vue'
import MenuIcon from '@/assets/icons/menu.svg'
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({
  components: { MainNav, Logo, SideBar, IconButton, MenuIcon }
})
export default class layout extends Vue {

  mounted() {
    window.innerWidth > 750 ? this.side_bar = true : this.side_bar = false
  }
  side_bar: boolean = false
  navigations: Array<object> = [
    {
      type: 'group',
      name: 'administration',
    },
    {
      type: 'single',
      name: 'dashboard',
      path: '/dashboard'
    },
    {
      type: 'single',
      name: 'users',
      path: '/users'
    },
    {
      type: 'single',
      name: 'orders',
      path: '/orders'
    },
    {
      type: 'single',
      name: 'products',
      path: '/orders'
    },
    {
      type: 'single',
      name: 'emails',
      path: '/orders'
    },
    {
      type: 'single',
      name: 'posts',
      path: '/posts'
    },
    {
      type: 'group',
      name: 'inventory & traceability',
    },
    {
      type: 'single',
      name: 'farmers',
      path: '/dashboard'
    },
    {
      type: 'single',
      name: 'farms',
      path: '/users'
    },
    {
      type: 'single',
      name: 'extractors',
      path: '/orders'
    },
    {
      type: 'single',
      name: 'manufacturers',
      path: '/orders'
    },
    {
      type: 'single',
      name: 'drivers',
      path: '/orders'
    },
    {
      type: 'single',
      name: 'biomass',
      path: '/posts'
    },
    {
      type: 'single',
      name: 'batches',
      path: '/posts'
    },
    {
      type: 'single',
      name: 'bulk orders',
      path: '/posts'
    },
    {
      type: 'single',
      name: 'CPG inventory',
      path: '/posts'
    },
    /* {
      type: 'parent',
      name: 'hello',
      icon: '<svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>',
      items: [
        {
          name: 'goodbye',
          path: '/users'
        },
        {
          name: 'goodbye',
          path: '/users'
        },
        {
          name: 'goodbye',
          path: '/users'
        },
        {
          name: 'goodbye',
          path: '/users'
        },
        {
          name: 'goodbye',
          path: '/users'
        }
      ]
    },
    {
      type: 'single',
      name: 'single women',
      icon: '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4A6,6 0 0,1 18,10C18,12.97 15.84,15.44 13,15.92V18H15V20H13V22H11V20H9V18H11V15.92C8.16,15.44 6,12.97 6,10A6,6 0 0,1 12,4M12,6A4,4 0 0,0 8,10A4,4 0 0,0 12,14A4,4 0 0,0 16,10A4,4 0 0,0 12,6Z" /></svg>',
      path: '/users'
    } */
  ]

  @Watch('side_bar')
  setBody(newVal: boolean, oldVal: boolean) {
    if (window.innerWidth > 750) return
    newVal ? document.getElementsByTagName("body")[0].style.overflow = 'hidden' : document.getElementsByTagName("body")[0].style.overflow = ''
  }

  get loggedIn(): boolean {
    return this.$store.getters['auth/loggedIn']
  }

  reset() {
    window.innerWidth > 750 ? this.side_bar = true : this.side_bar = false
  }

  logOut() {
    return this.$store.dispatch('auth/logout')
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.default-layout {
  width: 100%;
  display: flex;

  .side-bar {
    z-index: 25;
  }

  .main-content {
    flex: 1;
    margin-left: 0;
    transition: margin-left 200ms ease;
    height: 100vh;
    &.has-side-bar {
      flex: 1;
      margin-left: 256px;
    }

    .page-content {
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      flex-grow: 1;
      padding: 2rem;
    }
  }

  .side-bar-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.15);
    transition: 0.25s;
    z-index: 20;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 749px) {
    .main-content {

      &.has-side-bar {
        margin-left: 0;
      }
    }

    .side-bar-overlay {
      &.is-active {
        opacity: 1;
        pointer-events: auto;
      }
    }
  }
}
</style>
