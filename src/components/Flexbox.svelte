<script>
	// @ts-nocheck

	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class="container mx-auto gap-x-0 flex flex-col md:flex-row md:gap-x-24 gap-y-12 "
>
	{#each blok.columns as blok, i (blok._uid)}
		<StoryblokComponent {blok} />
	{/each}
</div>
