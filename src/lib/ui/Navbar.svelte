<script>
	import { MenuIcon } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	let navbarVisible = false;

	const toggleMenu = () => {
		navbarVisible = !navbarVisible;
	};

	const navLinks = [
		{ label: 'O nas', href: '/#about' },
		{ label: 'Bawialnia', href: '/#bawialnia' },
		// { label: 'Zajęcia', href: '/activities' },
		{ label: 'Urodziny', href: '/#birthday' },
		{ label: 'Cennik', href: '/#pricing' },
		{ label: 'Godziny otwarcia', href: '/#hours' },
		{ label: 'Kontakt', href: '/#contact' },
		{ label: 'Galeria', href: '/gallery' }
	];

	let scrolling = false;

	$: {
		try {
			window.onscroll = () => {
				if (window.scrollY > 10) {
					scrolling = true;
				} else {
					scrolling = false;
				}
			};
		} catch (e) {}
	}
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 bg-transparent transition-all duration-300"
	class:scroll={scrolling || navbarVisible}
	class:unscroll={!scrolling}
>
	<div class="container mx-auto max-w-7xl px-4">
		<div class="flex h-20 items-center justify-between">
			<a
				href="/"
				class="font-poppins text-2xl font-bold text-primary transition-colors hover:text-secondary md:text-4xl"
			>
				Wy<b class="font-bold text-secondary">BAW</b>ialnia
			</a>
			<button on:click={toggleMenu} aria-label="Otwórz menu" class="lg:hidden">
				<MenuIcon
					class="h-6 w-6 cursor-pointer text-foreground transition-colors hover:text-secondary lg:hidden"
				/>
			</button>
			<div class="hidden items-center lg:flex">
				<ul class="hidden items-center space-x-8 lg:flex">
					{#each navLinks as { label, href }}
						<li class="text-lg font-medium text-foreground transition-colors hover:text-secondary">
							<a data-sveltekit-reload title={label} {href}>{label}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	{#if navbarVisible}
		<div
			class="absolute right-0 left-0 z-50 mx-4 mt-4 flex flex-col space-y-2 rounded-xl bg-card p-4 text-left text-xl lg:hidden"
			in:fly={{ y: -100, duration: 300 }}
			out:fly={{ y: -100, duration: 300 }}
		>
			<ul class="flex flex-col space-y-4">
				{#each navLinks as { label, href }}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<li
						on:click={() => {
							navbarVisible = false;
						}}
					>
						<a
							{href}
							title={label}
							class="block rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-muted"
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
