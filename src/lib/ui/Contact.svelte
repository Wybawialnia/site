<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { Mail, MapPin, Phone, Send } from '@lucide/svelte';
	import { Fa } from 'svelte-fa';
	import { faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<section id="contact" class="bg-linear-to-b from-background to-muted/30 py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-6xl">
			<div class="mb-16 space-y-4 text-center font-poppins">
				<div
					class="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 font-poppins text-sm font-medium"
				>
					<Send class="h-4 w-4 text-secondary" />
					Kontakt
				</div>
				<h2 class="text-4xl font-bold text-primary md:text-5xl">
					Skontaktuj się z <span class="text-secondary">nami</span>
				</h2>
				<p class="mx-auto max-w-2xl text-xl text-muted-foreground">
					Masz pytania? Chcesz zarezerwować urodziny? Zapraszamy!
				</p>
			</div>

			<div
				class="mb-8 h-full rounded-3xl border-2 border-border bg-card p-8 transition-all hover:border-primary/30"
			>
				<h3 class="mb-6 text-2xl font-bold text-primary">Social Media</h3>
				<div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
					<div>
						<a
							href="https://www.facebook.com/profile.php?id=61573094341498&mibextid=wwXIfr"
							target="_blank"
							title="Facebook"
							rel="noopener noreferrer"
							class="flex items-center gap-4 rounded-lg bg-sidebar-ring/10 p-4 transition-colors hover:bg-sidebar-ring/20"
						>
							<Fa class="text-xl text-foreground" icon={faFacebook} />
							<span class="font-semibold text-foreground">Facebook</span>
						</a>
					</div>
					<div>
						<a
							href="https://www.instagram.com/wy_bawialnia/"
							target="_blank"
							title="Instagram"
							rel="noopener noreferrer"
							class="flex items-center gap-4 rounded-lg bg-accent/10 p-4 transition-colors hover:bg-accent/20"
						>
							<Fa class="text-xl text-foreground" icon={faInstagram} />
							<span class="font-semibold text-foreground">Instagram</span>
						</a>
					</div>
					<div>
						<a
							href="https://www.tiktok.com/@wybawialnia37?_t=ZN-90gFhQM0v3O&_r=1"
							target="_blank"
							title="TikTok"
							rel="noopener noreferrer"
							class="flex items-center gap-4 rounded-lg bg-destructive/10 p-4 transition-colors hover:bg-destructive/20"
						>
							<Fa class="text-xl text-foreground" icon={faTiktok} />
							<span class="font-semibold text-foreground">TikTok</span>
						</a>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
				<div class="h-full space-y-8">
					<div
						class="h-full rounded-3xl border-2 border-border bg-card p-8 transition-all hover:border-primary/30"
					>
						<h3 class="mb-6 text-2xl font-bold text-primary">Dane kontaktowe</h3>

						<div class="space-y-6">
							<a
								href="tel:+48721152618"
								class="group flex items-start gap-4 rounded-xl p-4 transition-colors"
							>
								<div
									class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary/10 transition-colors group-hover:bg-secondary/20"
								>
									<Phone class="h-6 w-6 text-secondary" />
								</div>
								<div>
									<p class="mb-1 text-sm text-muted-foreground">Telefon</p>
									<p
										class="font-semibold text-foreground transition-colors group-hover:text-secondary md:text-lg"
									>
										721 152 618
									</p>
								</div>
							</a>

							<a
								href="mailto:wybawialnia37@gmail.com"
								class="group flex items-start gap-4 rounded-xl p-4 transition-colors"
							>
								<div
									class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 transition-colors group-hover:bg-accent/20"
								>
									<Mail class="h-6 w-6 text-accent" />
								</div>
								<div>
									<p class="mb-1 text-sm text-muted-foreground">Email</p>
									<p
										class="font-semibold break-all text-foreground transition-colors group-hover:text-accent md:text-lg"
									>
										wybawialnia37@gmail.com
									</p>
								</div>
							</a>

							<a
								href="https://www.google.com/maps/search/?api=1&query=Jana+Spychalskiego+37+U2+Poznań"
								target="_blank"
								rel="noopener noreferrer"
								class="group flex items-start gap-4 rounded-xl p-4 transition-colors"
							>
								<div
									class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint/10 transition-colors group-hover:bg-mint/20"
								>
									<MapPin class="h-6 w-6 text-mint-foreground" />
								</div>
								<div>
									<p class="mb-1 text-sm text-muted-foreground">Adres</p>
									<p
										class="font-semibold text-foreground transition-colors group-hover:text-mint-foreground md:text-lg"
									>
										Jana Spychalskiego 37 / U2<br />
										61-553 Poznań
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div
					class="flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-border bg-card p-0"
				>
					<iframe
						title="Mapa dojazdu do WyBawialni"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.37096429523!2d16.92985831580019!3d52.39339377978909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470445f2e2e2e2e3%3A0x123456789abcdef!2sJana%20Spychalskiego%2037%2C%2061-553%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1697720000000!5m2!1spl!2spl"
						width="100%"
						height="100%"
						style="border:0; min-width:100%; min-height:350px; height:100%; display:block;"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						class="h-full min-h-[350px] w-full rounded-3xl"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
