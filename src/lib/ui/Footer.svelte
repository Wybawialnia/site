<script>
	import { Coffee } from '@lucide/svelte';
	import Fa from 'svelte-fa';
	import { faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
	import boroitLogo from '$lib/assets/boroit_logo.png';
</script>

<footer class="bg-primary pt-12 pb-6 text-primary-foreground">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-6xl">
			<div class="mb-8 grid gap-8 md:grid-cols-3">
				<div class="font-poppins">
					<h3 class="mb-4 text-2xl font-bold">
						Wy<span class="text-secondary">BAW</span>ialnia
					</h3>
					<p class="mb-4 text-primary-foreground/80">
						Kawiarnia z bawialnią dla dzieci. Miejsce pełne radości, kawy i zabawy!
					</p>
					<div class="flex items-center gap-2 text-primary-foreground/80">
						<Coffee class="h-4 w-4" />
						<span class="text-sm">Od 2025 w Poznaniu</span>
					</div>
				</div>

				<div>
					<h4 class="mb-4 font-semibold">Szybkie linki</h4>
					<ul class="space-y-2 text-primary-foreground/80">
						<li>
							<a href="#about" class="transition-colors hover:text-secondary">O nas</a>
						</li>
						<li>
							<a href="#birthday" class="transition-colors hover:text-secondary">Urodziny</a>
						</li>
						<li>
							<a href="#pricing" class="transition-colors hover:text-secondary">Cennik</a>
						</li>
						<li>
							<a href="#hours" class="transition-colors hover:text-secondary">Godziny otwarcia</a>
						</li>
						<li>
							<a href="#contact" class="transition-colors hover:text-secondary">Kontakt</a>
						</li>
					</ul>
				</div>

				<div>
					<h4 class="mb-4 font-semibold">Kontakt</h4>
					<ul class="space-y-2 text-primary-foreground/80">
						<li>Jana Spychalskiego 37 / U2</li>
						<li>61-553 Poznań</li>
						<li>
							<a href="tel:+48735089712" class="transition-colors hover:text-secondary">
								tel. 735 089 712
							</a>
						</li>
						<li>
							<a
								href="mailto:wybawialnia37@gmail.com"
								class="break-all transition-colors hover:text-secondary"
							>
								wybawialnia37@gmail.com
							</a>
						</li>
					</ul>
					<div class="mt-2 flex flex-row items-center gap-4">
						<a
							href="https://instagram.com/wy_bawialnia"
							target="Instagram"
							title="Instagram"
							rel="noopener noreferrer"
							class="transition-colors hover:text-secondary"
						>
							<Fa icon={faFacebook} class="inline text-lg" />
						</a>

						<a
							href="https://instagram.com/wy_bawialnia"
							target="Facebook"
							title="Facebook"
							rel="noopener noreferrer"
							class="transition-colors hover:text-secondary"
						>
							<Fa icon={faInstagram} class="inline text-lg" />
						</a>

						<a
							href="https://instagram.com/wy_bawialnia"
							target="Tiktok"
							title="Tiktok"
							rel="noopener noreferrer"
							class="transition-colors hover:text-secondary"
						>
							<Fa icon={faTiktok} class="inline text-lg" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="border-t border-primary-foreground/20 pt-8 text-center">
		<p class="mt-2 text-sm text-primary-foreground/60">
			© 2025 WyBawialnia. Wszystkie prawa zastrzeżone.
		</p>
	</div>
	<div
		class="mt-4 flex flex-row items-center justify-center gap-2 text-center text-sm text-muted-foreground"
	>
		Realizacja witryny
		<img src={boroitLogo} class="h-8" alt="Test" />
	</div>
</footer>
