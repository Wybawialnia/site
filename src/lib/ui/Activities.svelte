<script lang="ts">
	import { Drum } from '@lucide/svelte';
	import EnlargeImg from '$lib/components/EnlargeImg.svelte';

	import senso1 from '$lib/assets/sensoryczne/senso-1.avif?enhanced';
	import senso2 from '$lib/assets/sensoryczne/senso-2.avif?enhanced';
	import senso3 from '$lib/assets/sensoryczne/senso-3.avif?enhanced';
	import senso4 from '$lib/assets/sensoryczne/senso-4.avif?enhanced';

	import majsterkowanie1 from '$lib/assets/maj/majsterkowanie-1.avif?enhanced';
	import majsterkowanie2 from '$lib/assets/maj/majsterkowanie-2.avif?enhanced';
	import majsterkowanie3 from '$lib/assets/maj/majsterkowanie-3.avif?enhanced';
	import majsterkowanie4 from '$lib/assets/maj/majsterkowanie-4.avif?enhanced';

	import gotowanie1 from '$lib/assets/gotowanie/gotowanie-1.avif?enhanced';
	import gotowanie2 from '$lib/assets/gotowanie/gotowanie-2.avif?enhanced';
	import gotowanie3 from '$lib/assets/gotowanie/gotowanie-3.avif?enhanced';
	import gotowanie4 from '$lib/assets/gotowanie/gotowanie-4.avif?enhanced';

	import dogoterapia1 from '$lib/assets/dogoterapia/dogo-1.avif?enhanced';
	import dogoterapia2 from '$lib/assets/dogoterapia/dogo-2.avif?enhanced';
	import dogoterapia3 from '$lib/assets/dogoterapia/dogo-3.avif?enhanced';
	import dogoterapia4 from '$lib/assets/dogoterapia/dogo-4.avif?enhanced';

	$: enlargeImg = false;
	let src: any;

	const enlargeImage = (s: any) => {
		src = s;
		enlargeImg = true;
	};
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
						<enhanced:img
							src={senso1}
							alt={`Zajęcia sensoryczne 1`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(senso1);
							}}
							on:keypress={() => {
								enlargeImage(senso1);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={senso2}
							alt={`Zajęcia sensoryczne 2`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(senso2);
							}}
							on:keypress={() => {
								enlargeImage(senso2);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={senso3}
							alt={`Zajęcia sensoryczne 3`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(senso3);
							}}
							on:keypress={() => {
								enlargeImage(senso3);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={senso4}
							alt={`Zajęcia sensoryczne 4`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(senso4);
							}}
							on:keypress={() => {
								enlargeImage(senso4);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
				</div>
				<p class="mt-4 leading-relaxed text-primary/60">
					Zabawa z różnorodnymi teksturami, kolorami i materiałami, które wspierają rozwój zmysłów i
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
						<enhanced:img
							src={majsterkowanie1}
							alt={`Zajęcia majsterkowania 1`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(majsterkowanie1);
							}}
							on:keypress={() => {
								enlargeImage(majsterkowanie1);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={majsterkowanie2}
							alt={`Zajęcia majsterkowania 2`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(majsterkowanie2);
							}}
							on:keypress={() => {
								enlargeImage(majsterkowanie2);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={majsterkowanie3}
							alt={`Zajęcia majsterkowania 3`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(majsterkowanie3);
							}}
							on:keypress={() => {
								enlargeImage(majsterkowanie3);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={majsterkowanie4}
							alt={`Zajęcia majsterkowania 4`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(majsterkowanie4);
							}}
							on:keypress={() => {
								enlargeImage(majsterkowanie4);
							}}
							role="button"
							tabindex="0"
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
						<enhanced:img
							src={gotowanie1}
							alt={`Zajęcia gotowania 1`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(gotowanie1);
							}}
							on:keypress={() => {
								enlargeImage(gotowanie1);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={gotowanie2}
							alt={`Zajęcia gotowania 2`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(gotowanie2);
							}}
							on:keypress={() => {
								enlargeImage(gotowanie2);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={gotowanie3}
							alt={`Zajęcia gotowania 3`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(gotowanie3);
							}}
							on:keypress={() => {
								enlargeImage(gotowanie3);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={gotowanie4}
							alt={`Zajęcia gotowania 4`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(gotowanie4);
							}}
							on:keypress={() => {
								enlargeImage(gotowanie4);
							}}
							role="button"
							tabindex="0"
						/>
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
						<enhanced:img
							src={dogoterapia1}
							alt={`Zajęcia z dogoterapi 1`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(dogoterapia1);
							}}
							on:keypress={() => {
								enlargeImage(dogoterapia1);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={dogoterapia2}
							alt={`Zajęcia z dogoterapi 2`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(dogoterapia2);
							}}
							on:keypress={() => {
								enlargeImage(dogoterapia2);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={dogoterapia3}
							alt={`Zajęcia z dogoterapi 3`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(dogoterapia3);
							}}
							on:keypress={() => {
								enlargeImage(dogoterapia3);
							}}
							role="button"
							tabindex="0"
						/>
					</div>
					<div class="aspect-square overflow-hidden rounded-2xl bg-muted">
						<enhanced:img
							src={dogoterapia4}
							alt={`Zajęcia z dogoterapi 4`}
							class="h-full w-full object-cover"
							on:click={() => {
								enlargeImage(dogoterapia4);
							}}
							on:keypress={() => {
								enlargeImage(dogoterapia4);
							}}
							role="button"
							tabindex="0"
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

{#if enlargeImg}
	<EnlargeImg {src} on:close={() => (enlargeImg = false)} />
{/if}
