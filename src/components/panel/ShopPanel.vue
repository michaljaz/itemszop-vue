<template>
  <div>
    <div class="tabs">
      <ul>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_main' }">
          <router-link :to="{ name: 'shop_main' }"> Kokpit </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_servers' }">
          <router-link :to="{ name: 'shop_servers' }"> Serwery </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_services' }">
          <router-link :to="{ name: 'shop_services' }"> Usługi </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_payments' }">
          <router-link :to="{ name: 'shop_payments' }"> Płatności </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_vouchers' }">
          <router-link :to="{ name: 'shop_vouchers' }"> Vouchery </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_pages' }">
          <router-link :to="{ name: 'shop_pages' }"> Strony </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_rcon' }">
          <router-link :to="{ name: 'shop_rcon' }"> RCON </router-link>
        </li>
        <li v-bind:class="{ 'is-active': this.$route.name == 'shop_settings' }">
          <router-link :to="{ name: 'shop_settings' }">
            Ustawienia
          </router-link>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
