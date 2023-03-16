<script>
	// @ts-nocheck
	import { page } from '$app/stores';
	import { storyblokEditable, renderRichText, RichTextSchema } from '@storyblok/svelte';

	import cloneDeep from 'clone-deep';

	const mySchema = cloneDeep(RichTextSchema);
	export let blok;
	$: resolvedRichText = renderRichText(blok.content, {
		schema: mySchema,
		resolver: (component, blok) => {
			switch (component) {
				case 'hero':
					return `<img
		height="400"
		src=${blok.image.filename}
		alt=${blok.image?.alt}
		class="mx-auto aspect-video w-full"
	/>`;
					break;
				default:
					return `Component ${component} not found`;
			}
		}
	});

	function formatDate(date) {
		const currentDate = new Date(date);
		let options = {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(currentDate);

		return formattedDate;
	}
</script>

<div
	use:storyblokEditable={blok}
	class="post flex flex-col space-y-12 md:space-y-12 px-4 md:px-24 relative"
>
	{#if blok.heading}
		<h1 class="text-center font-black text-4xl">{blok.heading}</h1>
	{/if}
	<time class="text-center" datetime={$page?.data.story.created_at}
		>{formatDate($page?.data.story.created_at)}</time
	>

	<div class="w-4/5 space-y-6 mx-auto">
		{@html resolvedRichText}
	</div>
</div>
