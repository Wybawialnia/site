<script>
	import { Coffee, Heart, Sparkles, Users } from '@lucide/svelte';
</script>

<section id="about" class="bg-linear-to-b from-background to-muted/30 pt-24 pb-12">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 space-y-4 text-center">
				<div class="inline-block">
					<p
						class="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium text-foreground"
					>
						<Users class="h-4 w-4 text-secondary" />
						O nas
					</p>
				</div>
				<h2 class="font-poppins text-4xl font-bold text-primary md:text-6xl">
					<p>
						Nasz <span class="text-secondary">zespół</span>
					</p>
				</h2>
				<p class="mx-auto max-w-2xl font-poppins text-xl text-muted-foreground">
					Poznajmy się bliżej :)
				</p>
				<div class="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
					<div class="space-y-4 text-left text-lg text-muted-foreground lg:mt-6">
						<p>
							Cześć, mam na imię <strong class="text-accent">Ola</strong>, prywatnie jestem mamą
							dwóch zwariowanych chłopców, którzy mają nieskończone pokłady energii. To oni
							zainspirowali mnie do stworzenia <strong class="text-accent">WyBawialni</strong> - miejsce,
							które ma być oazą dla rodziców i przestrzenią do beztroskich zabaw dla maluchów.
						</p>

						<p>Poza mną w naszej kawiarnio-bawialni na pewno spotkacie dwie iskierki:</p>

						<p>
							<strong class="text-accent">Zuzię</strong>, studentkę pedagogiki, która jest
							miłośniczką psów i matchy. Uwielbia deszczową aurę Edynburga i zabawę z dziećmi.
						</p>

						<p>
							<strong class="text-accent">Paulinę</strong>, studentkę pedagogiki specjalnej,
							harcerkę z zamiłowania i ratowniczkę ZHP. Kiedy nie ma jej w pracy, szukajcie jej na
							koncertach :)
						</p>

						<p>
							Nasz kameralny lokal to przestrzeń, w której znajdziecie <stront class="text-accent"
								>strefę bawialnianą</stront
							>, a w niej
							<strong class="text-accent">drewnianą konstrukcję</strong> przygotowaną przez
							specjalistów z firmy <strong class="text-accent">Small Human Design</strong> i dużo innych
							zabawek zachęcających do kreatywnego spędzania czasu.
						</p>

						<p class="font-medium">
							<strong class="text-accent">WyBawialnia</strong> to także miejsce, w którym
							organizujemy <strong class="text-accent">warsztaty</strong>, sesje zdjeciowe oraz
							<strong class="text-accent">niezapomniane przyjęcia</strong> dla naszych małych gości.
						</p>

						<p class="text-xl font-semibold text-primary">Chodźcie się WyBawić, tej!</p>
					</div>
					<div class="relative">
						<img
							src="/placeholder.svg"
							alt="Drewniana konstrukcja"
							class="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto mb-16 grid max-w-7xl gap-6 px-4 md:grid-cols-2">
		<div
			class="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div
				class="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-secondary/5 transition-transform duration-500 group-hover:scale-150"
			></div>
			<div class="relative">
				<div
					class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-secondary/20 to-secondary/5 transition-transform group-hover:scale-110"
				>
					<Coffee class="h-7 w-7 text-secondary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Prawdziwa kawa</h3>
				<p class="leading-relaxed text-muted-foreground">
					Aromatyczne kawy z najlepszych ziaren, przygotowane przez profesjonalnych baristów. Do
					tego pyszne lody i domowe ciasta.
				</p>
			</div>
		</div>

		<div
			class="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div
				class="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-accent/5 transition-transform duration-500 group-hover:scale-150"
			></div>
			<div class="relative">
				<div
					class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-accent/20 to-accent/5 transition-transform group-hover:scale-110"
				>
					<Sparkles class="h-7 w-7 text-accent" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Bezpieczna zabawa</h3>
				<p class="leading-relaxed text-muted-foreground">
					Przygotowaliśmy kolorową bawialnię z mnóstwem atrakcji dla dzieci w różnym wieku.
					Wszystkie zabawki są bezpieczne i regularnie czyszczone.
				</p>
			</div>
		</div>

		<div
			class="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div
				class="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-mint/5 transition-transform duration-500 group-hover:scale-150"
			></div>
			<div class="relative">
				<div
					class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-mint/20 to-mint/5 transition-transform group-hover:scale-110"
				>
					<Heart class="h-7 w-7 text-mint-foreground" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Miejsce dla rodzin</h3>
				<p class="leading-relaxed text-muted-foreground">
					WyBawialnia to przestrzeń stworzona z myślą o rodzinach. Rodzice mogą odpocząć przy kawie,
					obserwując bawiące się dzieci.
				</p>
			</div>
		</div>

		<div
			class="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div
				class="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
			></div>
			<div class="relative">
				<div
					class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-primary/5 transition-transform group-hover:scale-110"
				>
					<Users class="h-7 w-7 text-primary" />
				</div>
				<h3 class="mb-3 text-xl font-bold text-foreground">Przyjazny workspace</h3>
				<p class="leading-relaxed text-muted-foreground">
					Oferujemy też przestrzeń do pracy - szybkie Wi-Fi i wygodne miejsca siedzące. Idealne dla
					rodziców pracujących zdalnie.
				</p>
			</div>
		</div>
	</div>
</section>
