<script>
	// @ts-nocheck
	import { storyblokEditable } from '@storyblok/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	export let blok;
</script>

<h1
	use:storyblokEditable={blok}
	class="vertical text-teal-300 pt-8 text-7xl font-bold text-center absolute "
>
	{blok.headline}
</h1>
