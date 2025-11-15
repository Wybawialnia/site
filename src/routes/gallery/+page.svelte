<script>
	import { Sparkles } from '@lucide/svelte';
</script>

<section id="gallery" class="relative mx-auto flex min-h-screen items-center justify-center">
	<div class="pointer-events-none absolute inset-0 bg-white/60"></div>

	<div class="relative z-10 w-full">
		<div class="relative container mx-auto max-w-7xl px-4 py-24 md:mt-10 md:py-32">
			<div class="mx-auto max-w-4xl space-y-8 text-center duration-700">
				<div class="inline-block">
					<p
						class="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium text-foreground"
					>
						<Sparkles class="h-4 w-4 text-secondary" />
						Galeria
					</p>
				</div>
				<h1
					class="font-poppins text-5xl leading-tight font-bold text-primary md:text-7xl lg:text-8xl"
				>
					Zobacz naszą <span class="text-secondary">galerię</span>
				</h1>
				<h2 class="mx-auto max-w-2xl font-poppins text-xl leading-relaxed font-medium text-primary">
					Zdjęcia naszej kawiarni i bawialni, pełnej radości i zabawy
				</h2>
			</div>
		</div>
	</div>
</section>
