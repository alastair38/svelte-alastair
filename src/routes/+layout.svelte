<script lang="ts">
	// @ts-nocheck
	import '../app.css';

	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import 'iconify-icon';
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import Header from '../components/Header.svelte';
	import Seo from '../components/SEO.svelte';

	export let data: LayoutData;
	onMount(() => {
		if (data.header) {
			useStoryblokBridge(data.header.id, (newStory) => (data.header = newStory));
		}
	});
</script>

<Seo
	site_title={data.settings.content.site_name}
	title={data.story.content?.title}
	description={data.story.content?.description}
	url={$page?.url.href}
	social_image={data.story.content.social_image?.filename ||
		data.settings.content.social_image?.filename}
/>

<Header header={data.header} />

<main class="pb-16">
	<slot />
</main>
<footer
	class="text-center flex gap-6 items-center justify-center mt-16 z-10 font-bold text-sm mt-auto p-6"
>
	<iconify-icon class="text-2xl text-gray-400" icon="fa:github" /><iconify-icon
		class="text-xl text-gray-400"
		icon="fa:twitter"
	/>
</footer>
