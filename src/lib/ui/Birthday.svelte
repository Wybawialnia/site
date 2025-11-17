<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	import birthdayImg from '$lib/assets/urodziny/urodziny-poziom.avif?enhanced';

	import {
		Cake,
		Clock,
		Gift,
		PartyPopper,
		Users,
		GlassWater,
		Ticket,
		Cookie,
		Coffee,
		CakeSlice,
		PersonStanding,
		Camera,
		Candy,
		Utensils,
		Calendar
	} from '@lucide/svelte';
	import EnlargeImg from '$lib/components/EnlargeImg.svelte';

	const scrollToContact = () => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	$: enlargeImg = false;
	let src: any;

	const enlargeImage = (s: any) => {
		src = s;
		enlargeImg = true;
	};
</script>

<section id="birthday" class="bg-linear-to-b from-muted/30 to-background py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 space-y-4 text-center">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium"
				>
					<PartyPopper class="h-4 w-4 text-secondary" />
					Urodziny
				</div>
				<h2 class="font-poppins text-4xl font-bold text-primary md:text-5xl">
					Urodziny w <span class="text-secondary">WyBawialni</span>
				</h2>
				<p class="mx-auto max-w-2xl font-poppins text-xl text-muted-foreground">
					Zorganizujemy niezapomniane przyjęcie dla Twojego dziecka!
				</p>
			</div>

			<div class="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
				<div class="space-y-2">
					<div class="flex flex-col rounded-3xl border-2 border-secondary/20 bg-card p-8">
						<div class="mb-6 flex items-center gap-4">
							<div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10">
								<Cake class="h-8 w-8 text-secondary" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-primary">Pakiet Urodzinowy</h3>
								<p class="text-muted-foreground">Kompleksowa organizacja</p>
							</div>
						</div>
						<ul class="space-y-4">
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Users class="h-4 w-4 text-secondary" />
								</div>
								<p class="text-foreground">Wyłączność bawialni na czas imprezy</p>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Clock class="h-4 w-4 text-secondary" />
								</div>
								<p class="text-foreground">2,5 godziny zabawy</p>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Gift class="h-4 w-4 text-secondary" />
								</div>
								<p class="text-foreground">Dekoracja dziecięcego stołu w naturalnym stylu</p>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Cake class="h-4 w-4 text-secondary" />
								</div>
								<span>
									<p class="text-foreground">Poczęstunek dla dzieci</p>
									<p class="text-sm font-light text-muted-foreground">
										ciasteczka, owoce, chrupki, słone przekąski, hummus, warzywa, chipsy z grochu i
										soczewicy
									</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<GlassWater class="h-4 w-4 text-secondary" />
								</div>
								<span>
									<p class="text-foreground">Woda bez limitu + 3 litry soku</p>
									<p class="text-sm font-light text-muted-foreground">pomarańczowy lub jabłkowy</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Ticket class="h-4 w-4 text-secondary" />
								</div>
								<p class="text-foreground">Voucher dla jubilata na zabawę "no limit"</p>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Cookie class="h-4 w-4 text-secondary" />
								</div>
								<span>
									<p class="text-foreground">Poczęstunek dla rodziców</p>
									<p class="text-sm font-light text-muted-foreground">
										woda w karafkach i mix ciastek
									</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10"
								>
									<Coffee class="h-4 w-4 text-secondary" />
								</div>
								<p class="text-foreground">Otwarty rachunek w kawiarni</p>
							</li>
						</ul>
						<div class="mt-6 flex flex-col gap-4 rounded-xl bg-secondary/20 p-4 text-center">
							<span>
								<p class="text-sm font-light text-muted-foreground">od poniedziałku do czwartku</p>
								<p class="font-poppins text-2xl font-bold text-secondary-foreground">990 PLN</p>
							</span>
							<span>
								<p class="text-sm font-light text-muted-foreground">od piątku do niedzieli</p>
								<p class="font-poppins text-2xl font-bold text-secondary-foreground">1190 PLN</p>
							</span>
						</div>
					</div>
				</div>
				<div class="group aspect-auto overflow-hidden rounded-2xl bg-muted/50">
					<enhanced:img
						src={birthdayImg}
						alt="Zdjęcie przedstawiające przyjęcie urodzinowe w WyBawialni"
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						on:click={() => {
							enlargeImage(birthdayImg);
						}}
						on:keypress={() => {
							enlargeImage(birthdayImg);
						}}
						role="button"
						tabindex="0"
					/>
				</div>
				<div
					class="mt-4 flex flex-col rounded-3xl border-2 border-accent/20 bg-card p-8 lg:col-span-2"
				>
					<div class="mb-6 flex items-center gap-4">
						<div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
							<CakeSlice class="h-8 w-8 text-accent" />
						</div>
						<div>
							<h3 class="text-2xl font-bold text-primary">Dodatkowe usługi</h3>
							<p class="text-muted-foreground">Za dodatkową opłatą</p>
						</div>
					</div>

					<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
						<ul class="space-y-2">
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<Cake class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Tort dostarczany przez naszą cukiernię</p>
									<p class="text-sm font-light text-muted-foreground">wycena indywidualna</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<CakeSlice class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Tort własny</p>
									<p class="text-sm font-light text-muted-foreground">
										opłata serwisowa 50 PLN + konieczność dostarczenia paragonu
									</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<PersonStanding class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Animacje / warsztaty</p>
									<p class="text-sm font-light text-muted-foreground">
										dostosowane do wieku uczestników zabawy - <br />250 PLN
									</p>
								</span>
							</li>
						</ul>
						<ul class="space-y-2">
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<PartyPopper class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Przyjęcia tematyczne</p>
									<p class="text-sm font-light text-muted-foreground">wycena indywidualna</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<Camera class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Profesjonalna fotorelacja z imprezy</p>
									<p class="text-sm font-light text-muted-foreground">400 PLN</p>
								</span>
							</li>
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<Candy class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Piniata urodzinowa ze słodkim wkładem</p>
									<p class="text-sm font-light text-muted-foreground">150 PLN</p>
								</span>
							</li>
						</ul>
						<ul class="space-y-2">
							<li class="flex items-start gap-3">
								<div
									class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10"
								>
									<Utensils class="h-4 w-4 text-accent" />
								</div>
								<span>
									<p class="text-foreground">Dodatkowy catering</p>
									<p class="text-sm font-light text-muted-foreground">wycena indywidualna</p>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<!-- <div class="mb-10 rounded-3xl border border-border bg-card p-8">
				<h4 class="mb-6 text-2xl font-bold text-primary">Co nas wyróżnia?</h4>
				<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<div class="space-y-2">
						<div class="flex items-start gap-3">
							<span class="text-2xl">✨</span>
							<div>
								<h5 class="mb-1 font-semibold">Profesjonalna obsługa</h5>
								<p class="text-sm text-muted-foreground">
									Zajmiemy się wszystkim, abyś mógł cieszyć się imprezą
								</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-2xl">🎨</span>
							<div>
								<h5 class="mb-1 font-semibold">Kolorowe dekoracje</h5>
								<p class="text-sm text-muted-foreground">
									Dopasujemy wystrój do ulubionych kolorów dziecka
								</p>
							</div>
						</div>
					</div>
					<div class="space-y-2">
						<div class="flex items-start gap-3">
							<span class="text-2xl">🧸</span>
							<div>
								<h5 class="mb-1 font-semibold">Bezpieczna zabawa</h5>
								<p class="text-sm text-muted-foreground">
									Wszystkie atrakcje są regularnie czyszczone i sprawdzane
								</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="text-2xl">📸</span>
							<div>
								<h5 class="mb-1 font-semibold">Niezapomniane wspomnienia</h5>
								<p class="text-sm text-muted-foreground">
									Pomożemy stworzyć magiczne chwile dla Twojego dziecka
								</p>
							</div>
						</div>
					</div>
				</div>
			</div> -->

			<div
				class="col-span-2 rounded-3xl bg-linear-to-br from-secondary/20 via-accent/20 to-primary/10 p-12 text-center"
			>
				<div class="mb-6 text-7xl">🎂</div>
				<h3 class="mb-4 text-3xl font-bold text-primary">Wypełnij formularz</h3>
				<p class="mb-8 text-lg text-foreground">
					Odpowiedz na kilka krótkich pytań dotyczących wymarzonych urodzin Twojego dziecka, a my
					zajmiemy się resztą
				</p>
				<Button
					size="lg"
					on:click={scrollToContact}
					clazz="rounded-full bg-secondary px-8 py-6 text-lg font-semibold text-secondary-foreground shadow-lg hover:bg-secondary/90"
				>
					<Calendar class="mr-2 h-8 w-8" />
					Zarezerwuj
				</Button>
			</div>
		</div>
	</div>
</section>

{#if enlargeImg}
	<EnlargeImg {src} on:close={() => (enlargeImg = false)} />
{/if}
