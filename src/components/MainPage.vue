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
          <a class="navbar-item" href="https://discord.com/invite/MDQXz3TCPb">
            Discord
          </a>
          <a class="navbar-item" href="https://github.com/michaljaz/itemszop">
            Github
          </a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <div v-if="!user.loggedIn">
                <router-link to="/auth/signup" class="button is-primary">
                  <strong>Zarejestruj się</strong>
                </router-link>
                <router-link to="/auth/signin" class="button is-light">
                  Zaloguj się
                </router-link>
              </div>
              <div v-else>
                <router-link to="/panel" class="button is-primary">
                  Przejdź do Panelu
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-link to="/shop/test" class="button is-info mt-5">
      Przykładowy sklep
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showNav: false,
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
    }),
  },
}
</script>
