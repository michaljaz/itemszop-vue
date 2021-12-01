<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  v-on:click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
			<div class="navbar-start">
				<router-link to="/" class="navbar-item">
					Sklep
				</router-link>
				<router-link to="/regulamin" class="navbar-item">
					Regulamin
				</router-link>
				<router-link to="/voucher" class="navbar-item">
					Zrealizuj voucher
				</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'Navbar',
	data () {
		return {
			showNav: false
		}
	}
}
</script>
