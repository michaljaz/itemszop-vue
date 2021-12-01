<template>
	<div class="container" id="app">
		<div v-if="$route.meta.shopFrame">
			<router-link to="/" >
				<h1 class="title mt-5 mb-2">
					ItemSzop
				</h1>
			</router-link>
			<navbar />
			<div class="columns mt-1">
				<div class="column is-two-thirds">
					<div class="card">
						<header class="card-header">
							<breadcrumb />
						</header>
						<div class="card-content">
							<div class="content">
								<router-view />
							</div>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								Utrzymanie serwera
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								<progress class="progress" value="15" max="100">15%</progress>
							</div>
						</div>
					</div>
					<div class="card mt-4">
						<header class="card-header">
							<p class="card-header-title">
								Ostatnie zakupy
							</p>
						</header>
						<div class="card-content">
							<div class="content">
								Ostatnie zakupy
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<router-view />
		</div>
	</div>
</template>
<script>
import Breadcrumb from './components/Breadcrumb'
import Navbar from './components/Navbar'
export default {
	name: 'App',
	components: {
		Breadcrumb,
		Navbar
	}
}
</script>
