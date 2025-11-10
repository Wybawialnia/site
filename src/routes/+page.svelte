<script>
	import About from '$lib/ui/About.svelte';
	import Birthday from '$lib/ui/Birthday.svelte';
	import Hero from '$lib/ui/Hero.svelte';
	import Pricing from '$lib/ui/Pricing.svelte';
	import Contact from '$lib/ui/Contact.svelte';
	import Hours from '$lib/ui/Hours.svelte';
	import Bawialnia from '$lib/ui/Bawialnia.svelte';
	import Activities from '$lib/ui/Activities.svelte';
</script>

<svelte:head>
	<title>WyBAWialnia | Bawialnia dla dzieci w Poznaniu</title>
	<meta
		name="description"
		content="WyBAWialnia to miejsce, gdzie rodzice delektują się aromatyczną kawą, a dzieci bezpiecznie się bawią. Oferujemy pyszne lody, kreatywne warsztaty i niezapomniane urodziny dla dzieci w Poznaniu."
	/>

	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta
		name="keywords"
		content="bawialnia dla dzieci, kawiarnia, urodziny dla dzieci, warsztaty kreatywne, Poznań, WyBAWialnia"
	/>
	<meta name="author" content="WyBAWialnia" />
	<meta property="og:title" content="WyBAWialnia | Bawialnia dla dzieci w Poznaniu" />
	<meta
		property="og:description"
		content="WyBAWialnia to miejsce, gdzie rodzice delektują się aromatyczną kawą, a dzieci bezpiecznie się bawią. Oferujemy pyszne lody, kreatywne warsztaty i niezapomniane urodziny dla dzieci w Poznaniu."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://wybawialnia.pl" />
	<meta property="og:image" content="https://wybawialnia.pl/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="WyBAWialnia | Bawialnia dla dzieci w Poznaniu" />
	<meta
		name="twitter:description"
		content="WyBAWialnia to miejsce, gdzie rodzice delektują się aromatyczną kawą, a dzieci bezpiecznie się bawią. Oferujemy pyszne lody, kreatywne warsztaty i niezapomniane urodziny dla dzieci w Poznaniu."
	/>
	<meta name="twitter:image" content="https://wybawialnia.pl/og-image.png" />

	<link rel="canonical" href="https://wybawialnia.pl" />
</svelte:head>

<Hero />
<About />
<Bawialnia />
<Activities />
<Birthday />
<Pricing />
<Hours />
<Contact />
