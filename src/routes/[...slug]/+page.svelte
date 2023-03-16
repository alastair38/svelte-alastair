<script>
	//	import type { PageData } from '../$types';
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import { invalidateAll } from '$app/navigation';

	export let data;

	onMount(() => {
		if (data?.story) {
			useStoryblokBridge(data?.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>

{#if data?.story}
	<StoryblokComponent blok={data?.story.content} />
{/if}
