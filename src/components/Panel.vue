<template>
	<div class="columns mt-3">
		<div class="column is-half is-offset-one-quarter">
			<router-link :to="{name:'main'}">
				<span class="icon-text ml-2">
					<span class="icon">
						<i class="fas fa-arrow-left"></i>
					</span>
					<span>Powrót do strony głównej</span>
				</span>
			</router-link>
			<div class="box mt-3">
				<center>
					<h1 class="title is-centered">ItemSzop</h1>

				</center>
				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input class="input" type="email" placeholder="np. alex@example.com">
					</div>
				</div>

				<div class="field">
					<label class="label">Hasło</label>
					<div class="control">
						<input class="input" type="password" placeholder="********">
					</div>
				</div>

				<button class="button is-primary is-fullwidth">Zaloguj się</button>
				<button class="button is-danger mt-4 is-fullwidth">Zaloguj się przez Google</button>
			</div>
		</div>
	</div>
</template>
