<script>
	import Button from '$lib/components/Button.svelte';
	import { Home, Mail } from '@lucide/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const scrollToContact = () => {
		const contact = document.getElementById('contact');
		if (contact) contact.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<svelte:head>
	<title>Błąd {$page.status} | WyBawialnia</title>
</svelte:head>

<section class="flex min-h-screen items-center bg-linear-to-b from-muted/30 to-background py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="font-poppins text-7xl font-bold text-accent-foreground">Upss...</h1>
			<p class="my-4 text-lg text-muted-foreground">
				Coś poszło nie tak. Przepraszamy za niedogodności.
			</p>
			<div class="mb-6 rounded-2xl bg-card p-6 text-left shadow-md">
				<h2 class="text-lg font-semibold text-primary">Szczegóły</h2>
				<p class="mt-2 text-sm wrap-break-word text-foreground">
					{$page.status}
					{$page.error?.message ?? 'Nieznany błąd'}
				</p>
			</div>
			<p class="text-lg text-muted-foreground">
				Jeżeli uważasz że to błąd strony, skontaktuj się z nami
			</p>
			<div class="mt-4 flex flex-row items-center justify-center gap-4">
				<Button size="lg" on:click={() => goto('/')}>
					<Home class="h-4 w-4" />
					<p>Strona główna</p>
				</Button>
				<Button size="lg" variant="outline" on:click={scrollToContact}>
					<Mail class="h-4 w-4" />
					<p>Kontakt</p>
				</Button>
			</div>
		</div>
	</div>
</section>
