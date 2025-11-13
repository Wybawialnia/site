<script lang="ts">
	import { ArrowLeft, Calendar, CheckCircle, Clock, MapPin, Users } from '@lucide/svelte';
	import type { PageData } from '../$types';
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const classEvent = data.data.activity;
</script>

<svelte:head>
	<title>{classEvent.title} | WyBawialnia</title>
	<meta name="description" content={classEvent.shortDescription} />
</svelte:head>

<section class="bg-linear-to-b from-muted/30 to-background px-4 pt-32 pb-16">
	<div class="container mx-auto max-w-6xl">
		<Button variant="ghost" on:click={() => goto('/activities')} clazz="mb-8 group">
			<ArrowLeft class="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
			Powrót do listy zajęć
		</Button>

		<div class="mb-12 aspect-21/9 overflow-hidden rounded-3xl">
			<enhanced:img
				src={classEvent.images[0]}
				alt={classEvent.title}
				class="h-full w-full object-cover"
			/>
		</div>

		<div class="mb-12">
			<h1 class="mb-6 font-poppins text-4xl font-bold md:text-5xl">
				{classEvent.title}
			</h1>

			<div class="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				<div class="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
					<Calendar class="h-5 w-5 text-primary" />
					<div>
						<p class="text-sm text-muted-foreground">Data</p>
						<p class="font-semibold">{classEvent.date}</p>
					</div>
				</div>

				<div class="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
					<Clock class="h-5 w-5 text-secondary" />
					<div>
						<p class="text-sm text-muted-foreground">Czas</p>
						<p class="font-semibold">{classEvent.time}</p>
					</div>
				</div>

				<div class="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
					<Users class="h-5 w-5 text-accent" />
					<div>
						<p class="text-sm text-muted-foreground">Wiek</p>
						<p class="font-semibold">{classEvent.ageGroup}</p>
					</div>
				</div>

				<div class="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
					<MapPin class="h-5 w-5 text-primary" />
					<div>
						<p class="text-sm text-muted-foreground">Miejsca</p>
						<p class="font-semibold">{classEvent.maxParticipants} max</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mb-12 grid gap-12 lg:grid-cols-3">
			<div class="space-y-8 lg:col-span-2">
				<div>
					<h2 class="mb-4 text-2xl font-bold">O zajęciach</h2>
					<p class="text-lg leading-relaxed text-muted-foreground">
						{classEvent.longDescription}
					</p>
				</div>

				<div>
					<h2 class="mb-6 text-2xl font-bold">Galeria</h2>
					<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
						{#each classEvent.images as image, index}
							<div class="group aspect-square overflow-hidden rounded-2xl">
								<enhanced:img
									src={image}
									alt={`${classEvent.title} - zdjęcie ${index + 2}`}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
						{/each}
					</div>
				</div>

				<div>
					<h2 class="mb-6 text-2xl font-bold">Program zajęć</h2>
					<div class="space-y-3">
						{#each classEvent.schedule as item, index (index)}
							<div class="flex gap-3 rounded-xl bg-muted/30 p-4">
								<CheckCircle class="mt-0.5 h-5 w-5 shrink-0 text-primary" />
								<p class="text-muted-foreground">{item}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div class="space-y-6">
				<div
					class=" rounded-3xl border-2 border-primary/20 bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 p-6"
				>
					<h3 class="mb-6 text-2xl font-bold">Zapisz się!</h3>

					<div class="mb-6 space-y-4">
						<div class="flex items-center justify-between border-b border-border/50 pb-3">
							<span class="text-muted-foreground">Czas trwania</span>
							<span class="font-semibold">{classEvent.duration}</span>
						</div>
						<div class="flex items-center justify-between border-b border-border/50 pb-3">
							<span class="text-muted-foreground">Lokalizacja</span>
							<span class="text-right text-sm font-semibold">{classEvent.location}</span>
						</div>
						<div class="flex items-center justify-between border-b border-border/50 pb-3">
							<span class="text-muted-foreground">Prowadzący</span>
							<span class="text-right text-sm font-semibold">{classEvent.instructor}</span>
						</div>
					</div>

					<Button size="lg" clazz="h-14 w-full text-lg">
						<a href={classEvent.titoUrl} target="_blank" rel="noopener noreferrer">Zapisz dziecko</a
						>
					</Button>
				</div>

				<div class="rounded-2xl bg-muted/50 p-6">
					<h3 class="mb-4 text-xl font-bold">Korzyści</h3>
					<ul class="space-y-3">
						{#each classEvent.benefits as benefit, index (index)}
							<li class="flex gap-2">
								<CheckCircle class="mt-0.5 h-5 w-5 shrink-0 text-primary" />
								<span class="text-sm text-muted-foreground">{benefit}</span>
							</li>
						{/each}
					</ul>
				</div>

				<div class="rounded-2xl bg-muted/50 p-6">
					<h3 class="mb-4 text-xl font-bold">Co zabrać?</h3>
					<ul class="space-y-3">
						{#each classEvent.requirements as req, index (index)}
							<li class="flex gap-2">
								<CheckCircle class="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
								<span class="text-sm text-muted-foreground">{req}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
