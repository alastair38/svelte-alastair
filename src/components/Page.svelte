<script>
	// @ts-nocheck

	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import 'iconify-icon';

	/**
	 * @type {import("@storyblok/svelte").SbBlokData}
	 */
	export let blok;
</script>

{#key blok}
	<div
		use:storyblokEditable={blok}
		class="flex flex-col space-y-12 md:space-y-24 px-4 md:px-24 relative"
	>
		{#if blok.body}
			{#each blok?.body as blok}
				<StoryblokComponent {blok} />
			{/each}
		{/if}
	</div>
{/key}
