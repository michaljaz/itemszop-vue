<template>
	<div>
		<center>
			<h1 class="title is-centered">Zaloguj się</h1>
		</center>
		<div class="field">
			<label class="label">Email</label>
			<div class="control">
				<input class="input" type="email" placeholder="np. alex@example.com" v-model="email">
			</div>
		</div>

		<div class="field">
			<label class="label">Hasło</label>
			<div class="control">
				<input class="input" type="password" placeholder="********" v-model="password">
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<button class="button is-primary is-fullwidth" @click="signIn()">Dalej</button>
			</div>
			<div class="column">
				<router-link to="/auth/signup" class="button is-info is-fullwidth">
					Zarejestruj się
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			email:"",
			password:""
		}
	},
	methods:{
		signIn (){
			console.log(this._data.email,this._data.password)
		}
	}
}
</script>
