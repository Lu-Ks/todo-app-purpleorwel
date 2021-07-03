<template>
  <div class="flex items-center">
    <template v-if="$auth.user">
      <span class="ml-2 text-white">{{ $auth.user }}</span>
      <button class="mx-2 btn" @click="$auth.logout">Logout</button>
    </template>
    <form v-else @submit.prevent>
      <input v-model="username" class="ml-2" type="text" required />
      <button v-if="!$auth.user" class="mx-2 btn" type="submit" @click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    async login() {
      await this.$auth.login(this.username)
      this.username = ''
    },
  },
}
</script>
