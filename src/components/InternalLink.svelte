<script>
	// @ts-nocheck

	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<a use:storyblokEditable={blok} href={blok.link.cached_url} class="w-fit">
	{blok.link_name}
</a>
