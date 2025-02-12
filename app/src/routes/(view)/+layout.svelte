<script lang="ts">
	import Navigation from './../../components/static/Navigation.svelte';
	import Footer from '../../components/static/Footer.svelte';
	import Hero from '../../components/static/Hero.svelte';
	import Heading from '../../components/static/Heading.svelte';

	let { children } = $props();
</script>

<div class="@container flex flex-col justify-between">
	<div><Heading /></div>
	<Hero />
	<div>{@render children()}
		<Footer />
	</div>
	<Navigation />
</div>
