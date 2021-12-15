<template>
  <div>
    <nav class="navbar mb-4" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/panel" class="navbar-item">
          <strong> ItemSzop </strong>
        </router-link>
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
            <a class="navbar-link">
              <span v-if="this.$route.params.shopid">
                {{ this.$route.params.shopid }}
              </span>
              <span v-else> Twoje sklepy </span>
            </a>
            <div class="navbar-dropdown">
              <div v-if="shops">
                <router-link
                  class="navbar-item"
                  v-for="item in shops"
                  :key="item"
                  :to="{ name: 'shop_main', params: { shopid: item } }"
                >
                  {{ item }}
                </router-link>
              </div>
              <hr class="dropdown-divider" />
              <router-link class="navbar-item" :to="{ name: 'new_shop' }">
                Utwórz nowy
              </router-link>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              <span> {{ user.data.displayName }} </span>
            </a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" :to="{ name: 'panel_settings' }">
                Ustawienia
              </router-link>
              <hr class="dropdown-divider" />
              <a class="navbar-item" @click="signOut()"> Wyloguj się </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<script>
import { ref, onValue, child } from 'firebase/database'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      shops: [],
      showNav: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
  methods: {
    signOut() {
      this.$auth.signOut().then(() => {
        this.$router.replace({
          name: 'main',
        })
      })
    },
    checkIfShopExist() {
      if (this.shops.length > 0 && this.$route.params.shopid) {
        if (!this.shops.includes(this.$route.params.shopid)) {
          this.$router.replace({ name: 'panel' })
        }
      }
    },
  },
  watch: {
    $route() {
      this.checkIfShopExist()
    },
  },
  mounted() {
    const { uid } = this.$user
    const root_ref = ref(this.$database)
    const shops_ref = child(root_ref, `users/${uid}`)
    onValue(shops_ref, (snapshot) => {
      const shops = snapshot.val()
      if (shops) {
        delete shops[0]
        console.log()
        this.shops = Object.keys(shops)
        this.checkIfShopExist()
      }
    })
  },
}
</script>
