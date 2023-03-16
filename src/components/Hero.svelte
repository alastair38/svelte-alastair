<script>
	// @ts-nocheck

	import { storyblokEditable } from '@storyblok/svelte';
	import { draw, fade, fly, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let blok;
</script>

<section
	use:storyblokEditable={blok}
	class="w-4/5 pt-12 md:pt-0 md:w-3/5 flex flex-col mx-auto  justify-center relative"
>
	{#if blok.heading}
		<h1 class="text-xl font-bold">{blok.heading}</h1>
	{/if}

	<img
		height="400"
		src={`${blok.image.filename}
	`}
		alt={blok.image?.alt}
		class="w-72 mx-auto h-full object-contain"
	/>
</section>
