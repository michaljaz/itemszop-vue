<template>
	<div>
		<center>
			<h1 class="title is-centered">Zarejestruj się</h1>
		</center>
		<div v-if="error" class="notification is-danger mt-2">
			<button class="delete" @click="error=''"></button>
			{{error}}
		</div>
		<form action="#" @submit.prevent="submit">
			<div class="field">
				<label class="label">Email</label>
				<div class="control">
					<input class="input" type="email" placeholder="np. alex@example.com" v-model="email">
				</div>
			</div>

			<div class="field">
				<label class="label">Pseudonim</label>
				<div class="control">
					<input class="input" type="text" placeholder="" v-model="displayName">
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
					<button class="button is-primary is-fullwidth" type="submit">Dalej</button>
				</div>
				<div class="column">
					<router-link to="/auth/signin" class="button is-info is-fullwidth">
						Zaloguj się
					</router-link>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

export default {
	data () {
		return {
			email:"",
			password:"",
			password_repeat:"",
			displayName:"",
			error:""
		}
	},
	methods:{
		submit (){
			const {email,password,password_repeat,displayName} = this._data
			if(password!==password_repeat){
				this.error = "Hasła do siebie nie pasują.";
			}else if(password.length==0){
				this.error = "Nie możesz wysłać pustego hasła."
			}else{
				createUserWithEmailAndPassword(this.$auth,email,password)
				.then((response)=>{
					const {user}=response
					updateProfile(user,{displayName})
					.then(()=>{
						this.$router.replace({ name: "panel" });
					})
					this.error = ""
				})
				.catch(err => {
					console.log(err)
					this.error = this.$errorCodes[err.code] || err.message;
				});
			}

		}
	}
}
</script>
