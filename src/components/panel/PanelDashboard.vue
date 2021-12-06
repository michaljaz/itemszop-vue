<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
				<a class="navbar-item">
          <strong> ItemSzop </strong>
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-on:click="showNav = !showNav"
          v-bind:class="{ 'is-active': showNav }"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        v-bind:class="{ 'is-active': showNav }"
      >
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> Twoje sklepy </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" v-for="item in shops" :key="item">
                {{ item }}
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button class="button is-danger" @click="signOut()">
                Wyloguj się
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { ref, onValue, child } from 'firebase/database'

export default {
  data() {
    return {
      shops: [],
      showNav: false,
    }
  },
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
    const { uid } = this.$user
    const root_ref = ref(this.$database)
    const shops_ref = child(root_ref, `users/${uid}`)
    onValue(shops_ref, (snapshot) => {
      this.shops = Object.keys(snapshot.val())
    })
  },
}
</script>
