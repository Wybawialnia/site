<script>
	import { Shapes } from '@lucide/svelte';

	import bawialnia1 from '$lib/assets/bawialnia/bawialnia-glowne.avif';
	import bawialnia2 from '$lib/assets/bawialnia/bawialnia-konstrukcja.avif';
	import bawialnia3 from '$lib/assets/bawialnia/zdjecie-szafki.avif';
	import bawialnia4 from '$lib/assets/bawialnia/stolik-szyba.avif';
	import bawialnia5 from '$lib/assets/bawialnia/zdjecie-stolik.avif';
</script>

<section class="bg-linear-to-b from-muted/30 to-background pt-24 pb-12" id="bawialnia">
	<div class="container mx-auto max-w-7xl px-4">
		<div class="mb-16 space-y-4 text-center font-poppins">
			<div class="inline-block">
				<p
					class="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium text-foreground"
				>
					<Shapes class="h-4 w-4 text-secondary" />
					Bawialnia
				</p>
			</div>
			<h2 class="font-poppins text-4xl font-bold text-primary md:text-6xl">
				<p>
					Nasza <span class="text-secondary">bawialnia</span>
				</p>
			</h2>
			<p class="mx-auto max-w-2xl font-poppins text-xl text-muted-foreground">
				Zobacz jak wygląda nasza przestrzeń do zabawy
			</p>
		</div>
		<div class="mt-8 grid items-center gap-16 md:grid-cols-2">
			<div class="grid grid-cols-3 gap-4">
				<div
					class="group col-span-2 row-span-2 aspect-square overflow-hidden rounded-3xl bg-muted/50"
				>
					<img
						src={bawialnia1}
						alt="Bawialnia - główna przestrzeń"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
				<div class="group aspect-square overflow-hidden rounded-2xl bg-muted/50">
					<img
						src={bawialnia2}
						alt="Drewniana konstrukcja"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
				<div class="group aspect-square overflow-hidden rounded-2xl bg-muted/50">
					<img
						src={bawialnia3}
						alt="Strefa zabaw"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
				<div class="group aspect-square overflow-hidden rounded-2xl bg-muted/50">
					<img
						src={bawialnia4}
						alt="Zabawki"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
				<div class="group col-span-2 aspect-2/1 overflow-hidden rounded-2xl bg-muted/50">
					<img
						src={bawialnia5}
						alt="Kącik sensoryczny"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</div>
			<div class="flex flex-col justify-center space-y-8">
				<div class="space-y-6">
					<div class="flex items-start gap-5">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-3xl"
						>
							🏗️
						</div>
						<div class="pt-1">
							<h3 class="mb-2 text-lg font-bold text-primary">Drewniana konstrukcja</h3>
							<p class="leading-relaxed text-primary/70">
								Stworzona przez specjalistów z <b class="font-medium text-accent"
									>Small Human Design</b
								>, zachęca do aktywności fizycznej i rozwijania umiejętności motorycznych
							</p>
						</div>
					</div>
					<div class="flex items-start gap-5">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-3xl"
						>
							🎨
						</div>
						<div class="pt-1">
							<h3 class="mb-2 text-lg font-bold text-primary">Strefy tematyczne</h3>
							<p class="leading-relaxed text-primary/70">
								Od kreatywnych klocków, przez przytulne miejsce do czytania, po kącik z <b
									class="font-medium text-accent">zabawkami sensorycznymi</b
								>
							</p>
						</div>
					</div>
					<div class="flex items-start gap-5">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mint/10 text-3xl"
						>
							✨
						</div>
						<div class="pt-1">
							<h3 class="mb-2 text-lg font-bold text-primary">Bezpieczeństwo przede wszystkim</h3>
							<p class="leading-relaxed text-primary/70">
								Wszystkie zabawki są <b class="font-medium text-accent">regularnie czyszczone</b> i spełniają
								najwyższe standardy bezpieczeństwa
							</p>
						</div>
					</div>
				</div>
				<div class="mt-8 rounded-3xl bg-linear-to-br from-secondary/5 to-accent/5 p-8">
					<p class="text-center text-lg leading-relaxed font-medium text-primary">
						Powierzchnia bawialni została zaprojektowana tak, aby <span class="text-accent"
							>dzieci w różnym wieku</span
						> mogły znaleźć coś dla siebie! 🌟
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
