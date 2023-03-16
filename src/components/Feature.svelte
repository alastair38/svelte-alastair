<script>
	// @ts-nocheck

	import { storyblokEditable } from '@storyblok/svelte';
	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class="feature-tile bg-[#f7f6fd] skew rounded-[5px] row-start-2 md:row-start-auto text-center place-self-center"
>
	<div class="stripes" />
	<div />
	<div class="flex-col justify-between bg-[#1d243d]">
		<img loading="lazy" src={blok.image?.filename} alt={blok.image?.alt} class="w-full h-full" />
		{#if blok.name}
			<span
				class="text-2xl absolute bottom-2 right-2 flex items-center justify-center py-2 px-3 text-white bg-[#1d243d] font-bold"
			>
				{blok.name}
			</span>
		{/if}
	</div>
</div>
