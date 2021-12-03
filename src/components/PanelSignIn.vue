<template>
  <div>
    <center>
      <h1 class="title is-centered">Zaloguj się</h1>
    </center>
    <div v-if="error" class="notification is-danger mt-2">
      <button class="delete" @click="error = ''"></button>
      {{ error }}
    </div>
    <form action="#" @submit.prevent="submit">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            class="input"
            name="email"
            type="email"
            placeholder="np. alex@example.com"
            v-model="email"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Hasło</label>
        <div class="control">
          <input
            class="input"
            name="password"
            type="password"
            placeholder="********"
            v-model="password"
          />
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <button class="button is-primary is-fullwidth" type="submit">
            Dalej
          </button>
        </div>
        <div class="column">
          <router-link to="/auth/signup" class="button is-info is-fullwidth">
            Zarejestruj się
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { signInWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    submit() {
      const { email, password } = this
      if (password.length === 0) {
        this.error = 'Nie możesz wysłać pustego hasła.'
      } else {
        signInWithEmailAndPassword(this.$auth, email, password)
          .then(() => {
            this.$router.replace({ name: 'panel' })
            this.error = ''
          })
          .catch((err) => {
            console.log(err)
            this.error = this.$errorCodes[err.code] || err.message
          })
      }
    },
  },
}
</script>
