<script>
	export let src;
	export let alt = '';
	export let className = '';
</script>

<img class={className} {alt} {src} sizes="(max-width: 600px) 100vw, 600px" decoding="async" />
