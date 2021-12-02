<template>
	<div>
		<h1>PANEL</h1>
		<button class="button is-danger" @click="signOut()">Wyloguj się</button>
	</div>
</template>
<script>
export default {
	methods:{
		signOut() {
			this.$auth.signOut()
			.then(()=>{
				this.$router.replace({
					name: "main"
				});
			})
    }
	}
}
</script>
