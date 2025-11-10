<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button.svelte';
	import { Calendar, Clock, Users } from '@lucide/svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	const classes = data.data;
</script>

<svelte:head>
	<title>Zajęcia i Warsztaty | WyBawialnia</title>
	<meta
		name="description"
		content="Zapisz swoje dziecko na kreatywne zajęcia! Rozwijamy talenty, wspieramy rozwój i bawimy się razem."
	/>
</svelte:head>

<section class="bg-linear-to-b from-muted/30 to-background px-4 pt-32 pb-16">
	<div class="container mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h1 class="mb-6 bg-clip-text font-poppins text-4xl font-bold md:text-6xl">
				Zajęcia i Warsztaty
			</h1>
			<p class="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
				Zapisz swoje dziecko na kreatywne zajęcia! Rozwijamy talenty, wspieramy rozwój i bawimy się
				razem.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each classes as { images, title, id, time, duration, ageGroup, maxParticipants, date, description }, i}
				<div
					class="group flex flex-col rounded-lg bg-card text-card-foreground shadow-sm transition-all duration-500 hover:border-primary/50"
				>
					<div class="flex flex-col space-y-1.5 p-0">
						<div class="aspect-4/3 overflow-hidden rounded-t-lg">
							<img
								src={images[0]}
								alt={title}
								{title}
								class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
						</div>
					</div>

					<div class="flex flex-1 flex-col justify-between">
						<div class="flex flex-col p-6">
							<div
								class="mb-3 font-poppins text-2xl leading-none font-semibold tracking-tight transition-colors group-hover:text-primary"
							>
								{title}
							</div>
							<div class="mb-6 line-clamp-3 text-base text-muted-foreground">
								{description}
							</div>
							<div class="space-y-3 text-sm">
								<div class="flex items-center gap-2 text-muted-foreground">
									<Calendar class="h-4 w-4 text-primary" />
									<span>{date}</span>
								</div>
								<div class="flex items-center gap-2 text-muted-foreground">
									<Clock class="h-4 w-4 text-secondary" />
									<span>{time} • {duration}</span>
								</div>
								<div class="flex items-center gap-2 text-muted-foreground">
									<Users class="h-4 w-4 text-accent" />
									<span>{ageGroup} • max {maxParticipants} dzieci</span>
								</div>
							</div>
						</div>
						<div class="flex items-center p-6 pt-0">
							<Button
								on:click={() => goto(`/activities/${id}`)}
								clazz="w-full transition-transform duration-100  hover:scale-105"
								size="lg"
							>
								Zobacz szczegóły
							</Button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
