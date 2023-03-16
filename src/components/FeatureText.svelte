<script>
	// @ts-nocheck

	import { storyblokEditable, renderRichText, StoryblokComponent } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.content);
</script>

<div
	use:storyblokEditable={blok}
	class="feature-text col-span-{blok.column_span} row-start-3 md:row-start-auto flex flex-col gap-4 text-lg place-self-center"
>
	{@html resolvedRichText}
	{#if blok.link}
		{#each blok.link as blok, i (blok._uid)}
			<StoryblokComponent {blok} />
		{/each}
	{/if}
</div>
