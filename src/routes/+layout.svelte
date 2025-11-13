<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/ui/Navbar.svelte';
	import Footer from '$lib/ui/Footer.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children?.()}
<Footer />
