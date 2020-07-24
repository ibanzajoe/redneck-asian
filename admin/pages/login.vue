<template>
  <div class="login_page min-h-screen flex items-center justify-center">
    <div class="container mx-auto px-5 flex items-center justify-center ">
      <Card class="max-w-lg p-4 pb-10">
        <img :src="Logo" alt="logo" class="mx-auto" />

        <!-- <h1 class="font-sans text-3xl text-center mb-5">Login</h1> -->
        <form @submit.prevent="login(action)" class="max-w-sm mx-auto">
          <DInput label="Email" id="email" v-model="email" />
          <DInput label="Password" id="password" type="password" v-model="password" />
          <MainButton type="submit" class="w-full my-3" :loading="false">
            <span v-if="action == 'Login'" >Login</span>
            <span v-if="action == 'Register'" >Register</span>
          </MainButton>
          <div class="error_box">
            <p v-if="error" class="error_message">{{error}}</p>
          </div>

          <div class="flex items-center justify-end">
            <span v-if="action == 'Login'" @click="action = 'Register'" style="cursor: pointer;">Register?</span>
            <span v-if="action == 'Register'" @click="action = 'Login'" style="cursor: pointer;">Sign In?</span>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card'
import DInput from '~/components/Form/DInput'
import Logo from '~/assets/images/logo_200x200.png'
import MainButton from '~/components/Button/MainButton'

export default {
  components: { Card, DInput, MainButton },
  data () {
    return {
      Logo: Logo,
      email: '',
      password: '',
      action: 'Login',
      error: null
    }
  },
  methods: {
    async login(action) {
      if (action == 'Login') {
        this.error = null;

        this.$store
          .dispatch("auth/login", {email: this.email, password: this.password})
          .then(res => {
            this.$router.push("/");
          })
          .catch(e => {
            this.error = e.response 
              ? e.response.data.message.join("\n")
              : e.message
          });
      } else {
        this.error = null;

        this.$store
          .dispatch("auth/register", {email: this.email, password: this.password})
          .then(res => {
            console.log('this is res: ', res)
          })
          .catch(e => {
            this.error = e.response 
              ? e.response.data.message.join("\n")
              : e.message
          });
      }
    },
    sendTo() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.error_box {
  min-height: 1.5rem;
}
.error_message {
  font-size: 0.95rem;
  text-align: center;
  color: red;
}
</style>