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
					<input class="input" name="email" type="email" placeholder="np. alex@example.com" v-model="email">
				</div>
			</div>

			<div class="field">
				<label class="label">Pseudonim</label>
				<div class="control">
					<input class="input" name="nickname" type="text" placeholder="" v-model="displayName">
				</div>
			</div>

			<div class="field">
				<label class="label">Hasło</label>
				<div class="control">
					<input class="input" name="password" type="password" placeholder="********" v-model="password">
				</div>
			</div>

			<div class="field">
				<label class="label">Powtórz Hasło</label>
				<div class="control">
					<input class="input" name="confirm_password" type="password" placeholder="********" v-model="confirm_password">
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
			confirm_password:"",
			displayName:"",
			error:""
		}
	},
	methods:{
		submit (){
			const {email,password,confirm_password,displayName} = this
			if(password!==confirm_password){
				this.error = "Hasła do siebie nie pasują.";
			}else if(password.length==0){
				this.error = "Nie możesz wysłać pustego hasła."
			}else{
				createUserWithEmailAndPassword(this.$auth,email,confirm_password)
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
