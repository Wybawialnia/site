<script>
	import { Drum } from '@lucide/svelte';
	import senso1 from '$lib/assets/sensoryczne/senso-1.avif';
	import senso2 from '$lib/assets/sensoryczne/senso-2.avif';
	import senso3 from '$lib/assets/sensoryczne/senso-3.avif';
	import senso4 from '$lib/assets/sensoryczne/senso-4.avif';

	import majsterkowanie1 from '$lib/assets/maj/majsterkowanie-1.avif';
	import majsterkowanie2 from '$lib/assets/maj/majsterkowanie-2.avif';
	import majsterkowanie3 from '$lib/assets/maj/majsterkowanie-3.avif';
	import majsterkowanie4 from '$lib/assets/maj/majsterkowanie-4.avif';

	import gotowanie1 from '$lib/assets/gotowanie/gotowanie-1.avif';
	import gotowanie2 from '$lib/assets/gotowanie/gotowanie-2.avif';
	import gotowanie3 from '$lib/assets/gotowanie/gotowanie-3.avif';
	import gotowanie4 from '$lib/assets/gotowanie/gotowanie-4.avif';

	import dogoterapia1 from '$lib/assets/dogoterapia/dogo-1.avif';
	import dogoterapia2 from '$lib/assets/dogoterapia/dogo-2.avif';
	import dogoterapia3 from '$lib/assets/dogoterapia/dogo-3.avif';
	import dogoterapia4 from '$lib/assets/dogoterapia/dogo-4.avif';
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
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={senso1} alt={`Zajęcia sensoryczne 1`} class="h-full w-full object-cover" />
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={senso2} alt={`Zajęcia sensoryczne 2`} class="h-full w-full object-cover" />
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={senso3} alt={`Zajęcia sensoryczne 3`} class="h-full w-full object-cover" />
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={senso4} alt={`Zajęcia sensoryczne 4`} class="h-full w-full object-cover" />
					</div>
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
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={majsterkowanie1}
							alt={`Zajęcia majsterkowania 1`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={majsterkowanie2}
							alt={`Zajęcia majsterkowania 2`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={majsterkowanie3}
							alt={`Zajęcia majsterkowania 3`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={majsterkowanie4}
							alt={`Zajęcia majsterkowania 4`}
							class="h-full w-full object-cover"
						/>
					</div>
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
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={gotowanie1} alt={`Zajęcia gotowania 1`} class="h-full w-full object-cover" />
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={gotowanie2} alt={`Zajęcia gotowania 2`} class="h-full w-full object-cover" />
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={gotowanie3} alt={`Zajęcia gotowania 3`} class="h-full w-full object-cover" />
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img src={gotowanie4} alt={`Zajęcia gotowania 4`} class="h-full w-full object-cover" />
					</div>
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
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={dogoterapia1}
							alt={`Zajęcia z dogoterapi 1`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={dogoterapia2}
							alt={`Zajęcia z dogoterapi 2`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={dogoterapia3}
							alt={`Zajęcia z dogoterapi 3`}
							class="h-full w-full object-cover"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<img
							src={dogoterapia4}
							alt={`Zajęcia z dogoterapi 4`}
							class="h-full w-full object-cover"
						/>
					</div>
				</div>
				<p class="mt-4 leading-relaxed text-primary/60">
					Terapia z udziałem psów, która pomaga dzieciom rozwijać umiejętności społeczne i
					emocjonalne w bezpiecznym i przyjaznym środowisku.
				</p>
			</div>
		</div>
	</div>
</section>
