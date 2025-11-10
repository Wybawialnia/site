<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { Check, PartyPopper } from '@lucide/svelte';

	const coffe = [
		{ name: 'Espresso / Doppio', price: '10/12 zł' },
		{ name: 'Americano', price: '14 zł' },
		{ name: 'Latte', price: '16 zł' },
		{ name: '...', price: '' }
	];

	const coffeSesonal = [
		{ name: 'Pumpkin spice latte', price: '21 zł' },
		{ name: 'Karmelowe latte', price: '21 zł' },
		{ name: 'Orzechowe latte', price: '21 zł' },
		{ name: '...', price: '' }
	];

	const tea = [
		{ name: 'Ceylon', price: '13 zł' },
		{ name: 'Sencha', price: '13 zł' },
		{ name: 'Sok pomarańczowy', price: '9 zł' },
		{ name: '...', price: '' }
	];

	const teaSesonal = [
		{ name: 'Napar jesienny', price: '26 zł' },
		{ name: 'Napar rozgrzewający', price: '26 zł' },
		{ name: 'Herbata zimowa', price: '24 zł' },
		{ name: '...', price: '' }
	];
	const food = [{ name: 'Ciasto dnia', price: 'zapytaj w lokalu' }];

	const weekdayPricing = [
		{ name: '1 godzina', price: '30 PLN' },
		{ name: '2 godziny', price: '40 PLN' },
		{ name: 'Zabawa bez limitu', price: '50 PLN' }
	];

	const weekendPricing = [
		{ name: '1 godzina', price: '35 PLN' },
		{ name: '2 godziny', price: '45 PLN' },
		{ name: 'Zabawa bez limitu', price: '55 PLN' }
	];
</script>

<section id="pricing" class="bg-linear-to-b from-background to-muted/30 py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 space-y-4 text-center font-poppins">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium"
				>
					<PartyPopper class="h-4 w-4 text-secondary" />
					Cennik
				</div>
				<h2 class="text-4xl font-bold text-primary md:text-5xl">
					Cennik <span class="text-secondary">WyBawialni</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
					Przystępne ceny za najlepszą kawę i zabawę w mieście
				</p>
			</div>

			<div class="mb-12 grid gap-4 md:grid-cols-3">
				<div
					class="rounded-3xl border-2 border-secondary/30 bg-card p-8 transition-all hover:border-secondary/45 hover:shadow-lg"
				>
					<div class="mb-8 text-center">
						<div
							class="mb-4 inline-block rounded-full border border-secondary/20 bg-secondary/10 px-6 py-2"
						>
							<h3 class="text-xl font-bold text-primary">Napoje i desery</h3>
						</div>
					</div>
					<h4 class="mb-4 text-lg font-semibold text-foreground">Kawy</h4>
					<ul class="space-y-4">
						{#each coffe as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								{#if item.name === '...'}
									<div class="text-muted-foreground italic">i wiele więcej...</div>
									<span></span>
								{:else}
									<div class="flex items-center gap-2">
										<Check class="h-4 w-4 shrink-0 text-secondary" />
										<span class="text-foreground">{item.name}</span>
									</div>
									<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
								{/if}
							</li>
						{/each}
					</ul>
					<h4 class="mb-4 text-lg font-semibold text-foreground">Herbaty i inne napoje</h4>
					<ul class="space-y-4">
						{#each tea as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								{#if item.name === '...'}
									<div class="text-muted-foreground italic">i wiele więcej...</div>
									<span></span>
								{:else}
									<div class="flex items-center gap-2">
										<Check class="h-4 w-4 shrink-0 text-secondary" />
										<span class="text-foreground">{item.name}</span>
									</div>
									<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
								{/if}
							</li>
						{/each}
					</ul>
					<h4 class="mb-4 text-lg font-semibold text-foreground">Desery</h4>
					<ul class="space-y-4">
						{#each food as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								<div class="flex items-center gap-2">
									<Check class="h-4 w-4 shrink-0 text-secondary" />
									<span class="text-foreground">{item.name}</span>
								</div>
								<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div
					class="rounded-3xl border-2 border-accent/30 bg-card p-8 transition-all hover:border-accent/45 hover:shadow-lg md:scale-105"
				>
					<div class="mb-8 text-center">
						<div
							class="mb-4 inline-block rounded-full border border-accent/20 bg-accent/10 px-6 py-2"
						>
							<h3 class="text-xl font-bold text-primary">Zabawa</h3>
						</div>
					</div>
					<h4 class="mb-4 text-base font-semibold text-foreground">
						Tydzień (poniedziałek - piątek)
					</h4>
					<ul class="space-y-4">
						{#each weekdayPricing as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								<div class="flex items-center gap-2">
									<Check class="h-4 w-4 shrink-0 text-accent" />
									<span class="text-foreground">{item.name}</span>
								</div>
								<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
							</li>
						{/each}
					</ul>
					<h4 class="mb-4 text-base font-semibold text-foreground">
						Weekend (sobota - niedziela) / Święta
					</h4>
					<ul class="space-y-4">
						{#each weekendPricing as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								<div class="flex items-center gap-2">
									<Check class="h-4 w-4 shrink-0 text-accent" />
									<span class="text-foreground">{item.name}</span>
								</div>
								<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
							</li>
						{/each}
					</ul>
					<h4 class="mb-4 text-base font-semibold text-foreground">Promocje i zniżki</h4>
					<ul class="space-y-4 text-sm text-foreground">
						<li class="flex items-start gap-2 border-b border-border pb-4 text-sm last:border-0">
							<div class="flex items-center gap-2">
								<Check class="h-4 w-4 shrink-0 text-accent" />
								<p>Dzieci do 6 m.ż. bawią się gratis</p>
							</div>
						</li>
						<li class="flex items-start gap-2 border-b border-border pb-4 text-sm last:border-0">
							<div class="flex items-center gap-2">
								<Check class="h-4 w-4 shrink-0 text-accent" />
								<p>Zniżka dla rodzeństwa - 30% na drugie i każde kolejne dziecko</p>
							</div>
						</li>
					</ul>
					<div>
						<a
							href="/WyBawialnia.pdf"
							title="Menu WyBawialni"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="accent" size="default" clazz="mt-6 w-full justify-center">
								<p>Zobacz całą oferte</p>
							</Button>
						</a>
						<div>
							<p class="mt-6 text-sm text-muted-foreground italic">
								*Ceny mogą ulec zmianie. Sprawdź aktualne ceny w lokalu.
							</p>
						</div>
					</div>
				</div>
				<div
					class="rounded-3xl border-2 border-mint/30 bg-card p-8 transition-all hover:border-mint/45 hover:shadow-lg"
				>
					<div class="mb-8 text-center">
						<div class="mb-4 inline-block rounded-full border border-mint/20 bg-mint/10 px-6 py-2">
							<h3 class="text-xl font-bold text-primary">Menu sezonowe</h3>
						</div>
					</div>
					<h4 class="mb-4 text-lg font-semibold text-foreground">Kawy</h4>
					<ul class="space-y-4">
						{#each coffeSesonal as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								{#if item.name === '...'}
									<div class="text-muted-foreground italic">i wiele więcej...</div>
									<span></span>
								{:else}
									<div class="flex items-center gap-2">
										<Check class="h-4 w-4 shrink-0 text-mint" />
										<span class="text-foreground">{item.name}</span>
									</div>
									<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
								{/if}
							</li>
						{/each}
					</ul>
					<h4 class="mb-4 text-lg font-semibold text-foreground">Herbaty i inne napoje</h4>
					<ul class="space-y-4">
						{#each teaSesonal as item, index}
							<li
								class="flex items-center justify-between gap-4 border-b border-border pb-4 text-sm last:border-0"
							>
								{#if item.name === '...'}
									<div class="text-muted-foreground italic">i wiele więcej...</div>
									<span></span>
								{:else}
									<div class="flex items-center gap-2">
										<Check class="h-4 w-4 shrink-0 text-mint" />
										<span class="text-foreground">{item.name}</span>
									</div>
									<span class="font-semibold whitespace-nowrap text-primary">{item.price}</span>
								{/if}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
