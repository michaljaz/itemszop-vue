<template>
  <div>
    <h1 class="title">Nowy sklep</h1>
    <div class="field">
      <label class="label">Nazwa sklepu</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="np. server.eu"
          v-model="name"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">
        Id sklepu (Będzie występować w linku: https://{{ host }}#/shop/{{
          shopid
        }})
      </label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Minimum 4 znaki"
          v-model="shopid"
        />
      </div>
    </div>
    <button class="button is-success" @click="create()">Dalej</button>
    <div v-if="error" class="notification is-danger mt-2">
      <button class="delete" @click="error = ''"></button>
      {{ error }}
    </div>
  </div>
</template>
<script>
import { ref, update, child } from 'firebase/database'

export default {
  data() {
    return {
      name: '',
      shopid: '',
      host: document.location.host,
      error: '',
    }
  },
  methods: {
    create() {
      const { shopid } = this
      if (!this.$pregMatchAll(/^[A-Za-z0-9_]{4,}$/, shopid)) {
        this.error =
          'Nieprawidłowy format "id sklepu": powinien mieć minimum 4 znaki - litery lub cyfry'
      } else {
        this.error = ''
        const { uid } = this.$user
        const user_ref = child(ref(this.$database), `users/${uid}`)
        update(user_ref, { [shopid]: true })
          .then((r) => {
            this.$router.replace({ name: 'shop_main', params: { shopid } })
            console.log(r)
          })
          .catch((r) => {
            console.error(r)
          })
      }
    },
  },
}
</script>
