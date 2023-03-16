<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;

	$: allPosts = $page?.data.posts;
</script>

{#if allPosts}
	<div use:storyblokEditable={blok} class="grid grid-cols-3 gap-12">
		{#if blok.description}
			<div>{blok.description}</div>
		{/if}
		{#each allPosts as post}
			<div class="grid bg-white rounded-lg shadow-lg">
				{#if post.content.social_image.filename}
					<img
						class="rounded-t-md"
						src={post.content.social_image.filename}
						alt="post.content.social_image.alt"
					/>
				{/if}
				<div class="p-6 space-y-6 rounded-b-md">
					<h2 class="text-2xl font-black">{post.content.title}</h2>
					<p>{post.content.description}</p>
					<a
						aria-label={`Read ${post.content.title}`}
						class="inline-flex text-base transition-colors duration-200 underline text-lg decoration-teal-300 hover:decoration-current focus-within:decoration-current"
						href={`/${post.full_slug}`}>Read article</a
					>
				</div>
			</div>
		{/each}
	</div>
{/if}
