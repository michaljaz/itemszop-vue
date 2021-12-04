<template>
  <div>
    <h1>PANEL</h1>
    <button class="button is-danger" @click="signOut()">Wyloguj się</button>
  </div>
</template>
<script>
import { ref, onValue } from 'firebase/database'

export default {
  methods: {
    signOut() {
      this.$auth.signOut().then(() => {
        this.$router.replace({
          name: 'main',
        })
      })
    },
  },
  mounted() {
    const r = ref(this.$database)
    onValue(r, (snapshot) => {
      console.log(snapshot.val())
    })
  },
}
</script>
