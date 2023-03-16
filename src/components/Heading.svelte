<script>
	// @ts-nocheck

	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<h2
	id={blok.heading.replace(/\s+/g, '-').toLowerCase()}
	use:storyblokEditable={blok}
	class=" text-2xl md:text-4xl text-center font-black {blok.full_width
		? 'col-span-full'
		: 'col-span-1'}"
>
	{blok.heading}
</h2>
