<script lang="ts">
	import { X } from '@lucide/svelte';
	import { onMount, onDestroy } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let src: any;
	export let alt: string = '';

	onMount(() => {
		document.body.style.overflow = 'hidden';
	});

	onDestroy(() => {
		document.body.style.overflow = 'auto';
	});
</script>

<div
	class="fixed top-0 left-0 z-50 flex h-full w-full flex-col items-center justify-center bg-black/80 backdrop-blur-lg"
>
	<div class="relative flex h-full w-full items-center justify-center p-4">
		<enhanced:img
			{src}
			{alt}
			class="
			max-h-[90vh]
			max-w-[95vw] rounded-lg
			object-contain md:max-h-[80vh]
			md:max-w-[80vw] lg:max-h-[75vh]
			lg:max-w-[60vw]
		"
		/>
		<button
			class="absolute top-4 right-4 cursor-pointer rounded-full bg-white p-1.5 text-2xl font-bold text-black shadow-lg hover:bg-gray-200"
			on:click={() => dispatch('close')}
		>
			<X class="" />
		</button>
	</div>
</div>
