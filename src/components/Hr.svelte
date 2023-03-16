<script>
	// @ts-nocheck

	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<svg
	use:storyblokEditable={blok}
	role="separator"
	viewBox="46.998 99.999 400 240.827"
	width="400"
	height="240.827"
>
	<path
		style="fill: none; stroke-width: 6px; stroke-linecap: round; stroke-linejoin: round; stroke: rgb(185, 255, 243); stroke-dashoffset: 6px;"
		d="M 94.768 105.347 L 206.546 102.673 L 318.324 99.999 L 224.842 130.689 L 131.36 161.379 L 251.715 148.515 L 372.069 135.65 L 209.533 189.967 L 46.998 244.284 L 246.998 217.983 L 446.998 191.682 L 302.329 266.254 L 157.661 340.826"
	/>
</svg>
