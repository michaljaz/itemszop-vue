<template>
	<nav class="breadcrumb p-3" aria-label="breadcrumbs">
		<ul>
			<li v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)" :class="{'linked': !!breadcrumb.link}">
				<div v-if="breadcrumb.link">
					<a>{{ breadcrumb.name }}</a>
				</div>
				<div v-else class="ml-4">
					{{ breadcrumb.name }}
				</div>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Breadcrumb',
	data () {
		return {
			breadcrumbList: []
		}
	},
	mounted () { this.updateList() },
	watch: { '$route' () { this.updateList() } },
	methods: {
		routeTo (pRouteTo) {
			if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link).catch(()=>{})
		},
		updateList(){
			this.breadcrumbList=this.$route.meta.breadcrumb
		}
	}
}
</script>
