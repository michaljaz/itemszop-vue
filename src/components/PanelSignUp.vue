<template>
	<div>
		<center>
			<h1 class="title is-centered">Zarejestruj się</h1>
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

		<div class="field">
			<label class="label">Powtórz Hasło</label>
			<div class="control">
				<input class="input" type="password" placeholder="********" v-model="password_repeat">
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<button class="button is-primary is-fullwidth" @click="signUp()">Dalej</button>
			</div>
			<div class="column">
				<router-link to="/auth/signin" class="button is-info is-fullwidth">
					Zaloguj się
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
			password:"",
			password_repeat:""
		}
	},
	methods:{
		signUp (){
			console.log(this._data.email,this._data.password,this._data.password_repeat)
		}
	}
}
</script>
