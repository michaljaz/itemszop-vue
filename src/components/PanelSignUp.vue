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
import auth from "../assets/js/firebaseAuth.js"
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

var errorCodes={
	"auth/invalid-email":"Email jest źle sformatowany.",
	"auth/wrong-password":"Złe hasło.",
	"auth/network-request-failed":"Brak połączenia z internetem.",
	"auth/user-not-found":"Nie znaleziono użytkownika o podanym identyfikatorze.",
	"auth/too-many-requests":"Dostęp do konta został tymczasowo zablokowany ze względu na dużą liczbę nieudanych prób logowań. Możesz od razu je odblokować resetując hasło.",
	"auth/email-already-in-use":"Email jest już w użyciu.",
	"auth/weak-password":"Zbyt słabe hasło (powinno mieć co najmniej 6 znaków)."
}

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
				this.error = "Hasła do siebie nie pasują";
			}else if(password.length==0){
				this.error = "Nie możesz wysłać pustego hasła"
			}else{
				createUserWithEmailAndPassword(auth,email,password)
				.then((response)=>{
					const {user}=response
					updateProfile(user,{displayName})
					.then(()=>{
						console.log(user)
					})
					this.error = ""
				})
				.catch(err => {
					console.log(err)
					this.error = errorCodes[err.code] || err.message;
				});
			}

		}
	}
}
</script>
