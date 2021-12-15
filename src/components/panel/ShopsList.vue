<template>
  <div>
    <router-link
      v-for="shop in parent.shops"
      :key="shop"
      :to="{ name: 'shop_main', params: { shopid: shop } }"
      class="button is-medium is-light is-link is-fullwidth"
    >
      {{ shop }}
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
