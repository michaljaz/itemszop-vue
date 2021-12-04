<template>
  <div>
    <center>
      <h1 class="title is-centered">Przywracanie hasła</h1>
    </center>
    <div v-if="error" class="notification is-danger mt-2">
      <button class="delete" @click="error = ''"></button>
      {{ error }}
    </div>
    <div v-if="success" class="notification is-success mt-2">
      <button class="delete" @click="success = false"></button>
      Email z linkiem do zresetowania hasła został wysłany na adres
      <strong>{{ emailSent }}</strong> .
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
      <button class="button is-primary is-fullwidth" type="submit">
        Dalej
      </button>
    </form>
  </div>
</template>
<script>
import { sendPasswordResetEmail } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      error: '',
      success: false,
      emailSent: '',
    }
  },
  methods: {
    submit() {
      const { email } = this
      sendPasswordResetEmail(this.$auth, email)
        .then(() => {
          this.success = true
          this.error = ''
          this.emailSent = email
          this.email = ''
        })
        .catch((err) => {
          this.success = false
          this.error = this.$errorCodes[err.code] || err.message
        })
    },
  },
}
</script>
