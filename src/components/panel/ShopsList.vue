<template>
  <div>
    <router-link
      v-for="shop in parent.shops"
      :key="shop"
      :to="{ name: 'shop_main', params: { shopid: shop } }"
      class="button is-medium is-light is-link is-fullwidth mt-2"
    >
      {{ shop }}
    </router-link>
    <router-link
      class="button is-medium is-light is-success is-fullwidth mt-2"
      :to="{ name: 'new_shop' }"
    >
      Utwórz nowy sklep
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parent: this.$parent,
    }
  },
}
</script>
