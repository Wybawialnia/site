<script lang="ts">
	import { Mouse, Send, Sparkles } from '@lucide/svelte';
	import Button from '$lib/components/Button.svelte';
	import bgImage from '$lib/assets/hero.avif';

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};
</script>

<section id="hero" class="relative mx-auto flex min-h-screen items-center justify-center">
	<img
		src={bgImage}
		loading="eager"
		decoding="async"
		fetchpriority="high"
		alt="Obrazek tła"
		class="pointer-events-none absolute inset-0 h-full w-full object-cover object-center select-none"
	/>

	<div class="pointer-events-none absolute inset-0 bg-white/60"></div>

	<div class="relative z-10 w-full">
		<div class="relative container mx-auto max-w-7xl px-4 py-24 md:mt-10 md:py-32">
			<div class="mx-auto max-w-4xl space-y-8 text-center duration-700">
				<div class="inline-block">
					<p
						class="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium text-foreground"
					>
						<Sparkles class="h-4 w-4 text-secondary" />
						Kawiarnio - bawialnia dla dzieci i dorosłych
					</p>
				</div>
				<h1
					class="font-poppins text-5xl leading-tight font-bold text-primary md:text-7xl lg:text-8xl"
				>
					Wy<span class="text-secondary">BAW</span>ialnia
				</h1>
				<h2
					class="mx-auto max-w-2xl font-poppins text-xl leading-relaxed font-medium text-primary md:text-2xl"
				>
					Miejsce, w którym rodzice piją ciepłą kawę, a dzieci oddają się beztroskiej zabawie
				</h2>
				<div class="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
					<Button
						size="lg"
						on:click={() => scrollToSection('birthday')}
						clazz="rounded-full bg-primary border-primary border px-8 py-6 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
					>
						<Sparkles class="mr-2 h-5 w-5" />
						Oferta urodzinowa
					</Button>
					<Button
						size="lg"
						variant="outline"
						on:click={() => scrollToSection('contact')}
						clazz="rounded-full border-2 border-primary px-8 py-6 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-xl"
					>
						<Send class="mr-2 h-5 w-5" />
						Skontaktuj się
					</Button>
				</div>
				<div class="mx-auto grid max-w-4xl grid-cols-1 gap-6 pt-12 md:grid-cols-3">
					<a
						class="rounded-2xl border border-border bg-background/90 p-8 backdrop-blur-md transition-all hover:shadow-xl"
						href="/#pricing"
					>
						<div class="mb-3 text-5xl">☕</div>
						<h3 class="mb-1 text-lg font-bold text-primary">Kawa</h3>
						<p class="text-sm text-primary/70">Aromatyczna kawa prosto z włoskiej palarnii</p>
					</a>

					<a
						class="rounded-2xl border border-border bg-background/90 p-8 backdrop-blur-md transition-all hover:shadow-xl"
						href="/#bawialnia"
					>
						<div class="mb-3 text-5xl">🎨</div>
						<h3 class="mb-1 text-lg font-bold text-primary">Bawialnia</h3>
						<p class="text-sm text-primary/70">Bezpieczna konstrukcja i interesujące zabawki</p>
					</a>

					<a
						class="rounded-2xl border border-border bg-background/90 p-8 backdrop-blur-md transition-all hover:shadow-xl"
						href="/#birthday"
					>
						<div class="mb-3 text-5xl">🎉</div>
						<h3 class="mb-1 text-lg font-bold text-primary">Urodziny</h3>
						<p class="text-sm text-primary/70">Niezwykłe przyjęcia dla najmłodszych gości</p>
					</a>
				</div>
			</div>
		</div>
	</div>
	<div
		class="pointer-events-none absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 md:inline"
	>
		<Mouse class="h-10 w-10 animate-bounce " />
	</div>
</section>
