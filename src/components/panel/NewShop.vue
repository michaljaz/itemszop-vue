<template>
	<div>
		<h1 class="title">Nowy sklep</h1>
		<div class="field">
			<label class="label">Nazwa sklepu</label>
			<div class="control">
				<input class="input" type="text" placeholder="np. server.eu">
			</div>
		</div>
		<div class="field">
			<label class="label">Id sklepu (Będzie występować w linku: https://itemszop.js.org#/shop/{{ shopid }})</label>
			<div class="control">
				<input class="input" type="text" placeholder="Minimum 4 znaki" v-model="shopid">
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      shopid:""
    }
  }
}
</script>
