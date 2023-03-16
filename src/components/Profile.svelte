<script>
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div use:storyblokEditable={blok} class="items-center hidden mx-auto flex gap-6 text-center">
	<img
		class="w-12 aspect-square object-fit mx-auto rounded-full"
		src={`${blok.image.filename}/m/600x600/
		`}
		alt={blok.image.alt}
	/>

	<h2 class="text-2xl text-[#1d243d] font-bold">{blok.name}</h2>
	<p>{blok.job_title}</p>
	<a href={blok.twitter.url}>Twitter</a>
</div>
