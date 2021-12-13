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
    }
  },
  methods: {
    create() {
      console.log(this.name, this.shopid)
      const { uid } = this.$user
      const user_ref = child(ref(this.$database), `users/${uid}`)
      update(user_ref, { [this.shopid]: true })
        .then((r) => {
          console.log(r)
        })
        .catch((r) => {
          console.error(r)
        })
    },
  },
}
</script>
