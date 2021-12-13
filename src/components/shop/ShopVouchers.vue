<template>
  <div>
    <div class="content">
      Vouchery można zdobywać w eventach lub przez aktywność na serwerze.
    </div>
    <input class="input" type="text" placeholder="Twój nick z serwera" />
    <input class="input mt-3" type="text" placeholder="Kod vouchera" />
    <button class="button is-success mt-3" @click="showError = true">
      Sprawdź
    </button>
    <div class="notification is-danger mt-3" v-show="showError">
      <button class="delete" @click="showError = false"></button>
      Podałeś nieprawidłowy voucher!
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showError: false,
    }
  },
}
</script>
