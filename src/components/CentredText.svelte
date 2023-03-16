<script>
	// @ts-nocheck

	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class="centred-text flex flex-col justify-between text-center items-center gap-4 text-lg"
>
	{#if blok.heading}
		<h3 class="text-lg md:text-xl font-bold">{blok.heading}</h3>
	{/if}
	{blok.content}
	{#if blok.link}
		{#each blok.link as blok, i (blok._uid)}
			<StoryblokComponent {blok} />
		{/each}
	{/if}
</div>
