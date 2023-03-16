<script>
	// @ts-nocheck

	import { storyblokEditable, renderRichText, StoryblokComponent } from '@storyblok/svelte';
	export let blok;

	$: resolvedRichText = renderRichText(blok.content);
</script>

<div use:storyblokEditable={blok} class="prose mx-auto">
	{@html resolvedRichText}
</div>
