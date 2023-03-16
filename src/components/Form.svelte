<script>
	// @ts-nocheck
	import { storyblokEditable } from '@storyblok/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	export let blok;
</script>

<form use:storyblokEditable={blok} class="mx-auto space-y-6">
	{#if blok.message}
		<p class="text-base">{blok.message}</p>
	{/if}

	<div>
		<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Your email</label
		>
		<input
			type="email"
			id="email"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
			placeholder="name@email.com"
			required
		/>
	</div>
	<div>
		<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Your message</label
		>
		<textarea
			id="message"
			rows="5"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			required
		/>
	</div>

	<button
		type="submit"
		class="text-black bg-teal-300 hover:bg-teal-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
		>Send your message</button
	>
</form>
