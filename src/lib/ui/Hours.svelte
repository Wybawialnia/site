<script lang="ts">
	import { Calendar, Clock } from '@lucide/svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const todayIndex = new Date().getDay();
		const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1;
		schedule[adjustedIndex].isToday = true;
	});

	const schedule = [
		{ day: 'Poniedziałek', hours: '11:00 - 19:00', isToday: false },
		{ day: 'Wtorek', hours: '11:00 - 19:00', isToday: false },
		{ day: 'Środa', hours: '11:00 - 19:00', isToday: false },
		{ day: 'Czwartek', hours: '11:00 - 19:00', isToday: false },
		{ day: 'Piątek', hours: '11:00 - 19:00', isToday: false },
		{ day: 'Sobota', hours: '10:00 - 19:00', isToday: false },
		{ day: 'Niedziela', hours: '10:00 - 19:00', isToday: false }
	];
</script>

<section id="hours" class="bg-linear-to-b from-muted/30 to-background py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16 space-y-4 text-center font-poppins">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium"
				>
					<Clock class="h-4 w-4 text-secondary" />
					Godziny otwarcia
				</div>
				<h2 class="text-4xl font-bold text-primary md:text-5xl">
					Kiedy nas <span class="text-secondary">odwiedzić?</span>
				</h2>
				<p class="text-xl text-muted-foreground">Zapraszamy codziennie!</p>
			</div>

			<div class="overflow-hidden rounded-3xl border-2 border-border bg-card shadow-lg">
				{#each schedule as item, index}
					<div
						class="flex items-center justify-between border-b border-border p-6 transition-colors hover:bg-muted/50"
						class:today={item.isToday}
					>
						<div class="flex items-center gap-4">
							<Calendar class="h-5 w-5 text-primary" />
							<span class="text-lg font-semibold">
								{item.day}
							</span>
						</div>
						<span class="text-lg font-medium text-primary">{item.hours}</span>
					</div>
				{/each}
			</div>

			<div class="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
				<p class="text-foreground">
					<span class="font-semibold">Uwaga:</span> W dni świąteczne godziny otwarcia mogą się
					różnić. Sprawdź aktualności na naszym{' '}
					<a
						href="https://instagram.com/wy_bawialnia"
						title="Instagram"
						target="_blank"
						rel="noopener noreferrer"
						class="font-semibold text-secondary hover:underline"
					>
						Instagramie
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
