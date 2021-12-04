<template>
  <div>
    <center>
      <h1 class="title is-centered mb-3">Musisz zweryfikować adres email</h1>
      <div v-if="success" class="notification is-success mt-2">
        <button class="delete" @click="success = false"></button>
        Pomyślnie wysłano maila
      </div>
      <div v-if="error" class="notification is-danger mt-2">
        <button class="delete" @click="error = ''"></button>
        {{ error }}
      </div>
      Sprawdź swoją skrzynkę mailową lub poproś o wysłanie maila jeszcze raz.<br />
      <button class="button is-primary is-fullwidth mt-2" @click="check()">
        Email potwierdzony
      </button>
      <button class="button is-info is-fullwidth mt-2" @click="resend()">
        Wyślij emaila jeszcze raz
      </button>
    </center>
  </div>
</template>
<script>
import { sendEmailVerification } from 'firebase/auth'

export default {
  data() {
    return {
      error: false,
      success: false,
    }
  },
  methods: {
    check() {
      document.location.reload()
    },
    resend() {
      if (this.$user) {
        sendEmailVerification(this.$user)
          .then(() => {
            this.success = true
            this.error = ''
          })
          .catch((err) => {
            this.success = false
            this.error = this.$errorCodes[err.code] || err.message
            console.log(err)
          })
      }
    },
  },
  mounted() {
    if (this.$store.state.user.data.emailVerified) {
      this.$router.replace({ name: 'panel' })
    }
  },
}
</script>
