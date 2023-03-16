<script>
	// @ts-nocheck

	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<h2
	id={blok.heading.replace(/\s+/g, '-').toLowerCase()}
	use:storyblokEditable={blok}
	class="vertical pt-8 text-3xl md:text-5xl row-start-1 md:row-start-auto text-teal-300 font-bold "
>
	{blok.heading}
</h2>
