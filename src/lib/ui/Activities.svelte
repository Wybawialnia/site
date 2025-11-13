<script>
	import { Drum } from '@lucide/svelte';
</script>

<section class="bg-linear-to-b from-background to-muted/30 pt-24 pb-12" id="activities">
	<div class="container mx-auto max-w-7xl px-4">
		<div class="mb-16 space-y-4 text-center font-poppins">
			<div class="inline-block">
				<p
					class="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium text-foreground"
				>
					<Drum class="h-4 w-4 text-secondary" />
					Zajęcia
				</p>
			</div>
			<h2 class="font-poppins text-4xl font-bold text-primary md:text-6xl">
				<p>
					Zajęcia <span class="text-secondary">zorganizowane</span>
				</p>
			</h2>
			<p class="mx-auto max-w-2xl font-poppins text-xl text-muted-foreground">
				Regularne warsztaty i zajęcia tematyczne dla dzieci w różnym wieku
			</p>
		</div>

		<div class="space-y-16">
			<div>
				<h3 class="mb-6 flex items-center gap-3 text-2xl font-bold text-primary">
					<span class="text-3xl">🌈</span>
					SensoWybaw
				</h3>
				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					{#each Array(4) as _, i}
						<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
							<img
								src="sensoryczne/senso-{i + 1}.avif"
								alt={`Zajęcia sensoryczne ` + (i + 1)}
								class="h-full w-full object-cover"
							/>
						</div>
					{/each}
				</div>
				<p class="mt-4 leading-relaxed text-primary/60">
					Zabawa z różnorodnymi teksturami, kolorami i materiałami, która wspiera rozwój zmysłów i
					kreatywności maluchów.
				</p>
			</div>

			<div>
				<h3 class="mb-6 flex items-center gap-3 text-2xl font-bold text-primary">
					<span class="text-3xl">🔨</span>
					Majsterkowanie
				</h3>
				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					{#each Array(4) as _, i}
						<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
							<img
								src="majsterkowanie/majsterkowanie-{i + 1}.avif"
								alt={`Zajęcia majsterkowania` + (i + 1)}
								class="h-full w-full object-cover"
							/>
						</div>
					{/each}
				</div>
				<p class="mt-4 leading-relaxed text-primary/60">
					Kreatywne projekty DIY, które rozwijają zdolności manualne i wyobraźnię dzieci poprzez
					tworzenie własnych zabawek i dekoracji.
				</p>
			</div>

			<div>
				<h3 class="mb-6 flex items-center gap-3 text-2xl font-bold text-primary">
					<span class="text-3xl">🍳</span>
					Warsztaty gotowania
				</h3>
				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					{#each Array(4) as _, i}
						<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
							<img
								src="gotowanie/gotowanie-{i + 1}.avif"
								alt={`Zajęcia gotowania ` + (i + 1)}
								class="h-full w-full object-cover"
							/>
						</div>
					{/each}
				</div>
				<p class="mt-4 leading-relaxed text-primary/60">
					Proste i bezpieczne przepisy, które dzieci mogą przygotować samodzielnie lub z pomocą
					rodziców, ucząc się zdrowych nawyków żywieniowych.
				</p>
			</div>

			<div>
				<h3 class="mb-6 flex items-center gap-3 text-2xl font-bold text-primary">
					<span class="text-3xl">🐕</span>
					Dogoterapia
				</h3>
				<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
					{#each Array(4) as _, i}
						<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
							<img
								src="dogoterapia/dogo-{i + 1}.avif"
								alt={`Zajęcia z dogoterapi ` + (i + 1)}
								class="h-full w-full object-cover"
							/>
						</div>
					{/each}
				</div>
				<p class="mt-4 leading-relaxed text-primary/60">
					Terapia z udziałem psów, która pomaga dzieciom rozwijać umiejętności społeczne i
					emocjonalne w bezpiecznym i przyjaznym środowisku.
				</p>
			</div>
		</div>
	</div>
</section>
