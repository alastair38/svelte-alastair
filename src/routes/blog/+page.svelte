<script>
	//	import type { PageData } from '../$types';
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import { invalidateAll } from '$app/navigation';

	export let data;

	onMount(() => {
		if (data?.story) {
			const resolveRelations = ['all_posts.posts'];
			useStoryblokBridge(data?.story.id, (newStory) => (data.story = newStory), {
				resolveRelations: resolveRelations
			});
		}
	});

	$: content = data?.story.content;
</script>

{#if data?.story}
	<StoryblokComponent blok={content} />
{/if}
