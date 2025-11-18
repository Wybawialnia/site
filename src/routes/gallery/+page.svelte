<script lang="ts">
	import EnlargeImg from '$lib/components/EnlargeImg.svelte';
	import { Sparkles } from '@lucide/svelte';

	const imageModules = import.meta.glob('/src/lib/assets/*/*.{avif,webp}', {
		eager: true,
		query: {
			enhanced: true
		}
	});

	$: enlargeImg = false;
	let src: any;

	const enlargeImage = (s: any) => {
		src = s;
		enlargeImg = true;
	};
</script>

<svelte:head>
	<title>Galeria | WyBawialnia Poznań</title>
</svelte:head>

<section id="gallery" class="relative mx-auto flex min-h-screen items-center justify-center">
	<div class="pointer-events-none absolute inset-0 bg-white/60"></div>

	<div class="relative z-10 w-full">
		<div class="max-w-8xl relative container mx-auto px-4 py-24 md:py-32">
			<div class="mx-auto max-w-7xl space-y-8 text-center duration-700">
				<div class="inline-block">
					<p
						class="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium text-foreground"
					>
						<Sparkles class="h-4 w-4 text-secondary" />
						Galeria
					</p>
				</div>
				<h1 class="font-poppins text-4xl leading-tight font-bold text-primary md:text-5xl">
					Zobacz naszą <span class="text-secondary">galerię</span>
				</h1>
				<h2 class="mx-auto max-w-2xl font-poppins text-lg leading-relaxed font-medium text-primary">
					Zdjęcia naszej kawiarni i bawialni, pełnej radości i zabawy
				</h2>

				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each Object.entries(imageModules) as [_path, module]}
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<enhanced:img
							src={module.default}
							alt={`Zdjęcie z galerii`}
							on:click={() => enlargeImage(module.default)}
							on:keypress={() => enlargeImage(module.default)}
							class="h-68 w-full cursor-pointer rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

{#if enlargeImg}
	<EnlargeImg {src} on:close={() => (enlargeImg = false)} />
{/if}
