<script lang="ts">
	// @ts-nocheck
	import { storyblokEditable } from '@storyblok/svelte';
	import { onMount } from 'svelte';
	export let blok: any;

	onMount(() => {
		const buttons = document.querySelectorAll('[data-id="main-menu"] button');

		buttons.forEach((button) => {
			button.addEventListener('click', toggleOnMenuClick);
		});

		function toggleOnMenuClick(this: any) {
			this.classList.toggle('active');

			const buttonsOpen = document.querySelectorAll('[aria-expanded="true"]');

			if ('true' === this.getAttribute('aria-expanded')) {
				this.setAttribute('aria-expanded', 'false');
				this.nextElementSibling.setAttribute('aria-hidden', 'true');
			} else {
				this.setAttribute('aria-expanded', 'true');
				this.nextElementSibling.setAttribute('aria-hidden', 'false');
			}

			buttonsOpen.forEach((button: any) => {
				button.setAttribute('aria-expanded', 'false');
				button.nextElementSibling.setAttribute('aria-hidden', 'true');
			});
		}

		window.addEventListener('keydown', function (event) {
			if (event.key === 'Escape') {
				const buttonOpen: any = document.querySelector('[aria-expanded="true"]');
				if (buttonOpen) {
					buttonOpen.setAttribute('aria-expanded', 'false');
					buttonOpen.nextElementSibling.setAttribute('aria-hidden', 'true');
					buttonOpen.focus();
				}
			}
		});

		// Get all the <li> elements into a collection
		const links = document.querySelectorAll(
			'[data-id="main-menu"] a, [data-id="main-menu"] button'
		);

		// Set up a counter to keep track of which <li> is selected
		let currentLI: any = 0;

		// Initialize first li as the selected (focused) one:
		links[currentLI].classList.add('highlight');

		// Set up a key event handler for the document
		document.addEventListener('keydown', function (event) {
			// Check for up/down key presses
			switch (event.key) {
				case '38': // Up arrow
					// Remove the highlighting from the previous element
					event.preventDefault();
					links[currentLI].classList.remove('highlight');

					currentLI = currentLI > 0 ? --currentLI : 0; // Decrease the counter
					links[currentLI].classList.add('highlight'); // Highlight the new element

					// if ("true" === links[currentLI].ariaExpanded) {
					//   links[currentLI].setAttribute("aria-expanded", false);
					//   links[currentLI].nextElementSibling.setAttribute("aria-hidden", true);
					// }

					links[currentLI].focus();
					break;
				case '40': // Down arrow
					event.preventDefault();
					// Remove the highlighting from the previous element
					links[currentLI].classList.remove('highlight');

					currentLI = currentLI < links.length - 1 ? ++currentLI : links.length - 1; // Increase counter
					links[currentLI].classList.add('highlight');
					// Highlight the new element

					if ('false' === links[currentLI].ariaExpanded) {
						console.log(links[currentLI]);
						// links[currentLI].setAttribute("aria-expanded", true);
						// links[currentLI].nextElementSibling.setAttribute("aria-hidden", false);
					}

					links[currentLI].focus();
					break;
			}
		});
	});
</script>

<li use:storyblokEditable={blok} class="relative">
	<button
		aria-controls="submenu-1"
		aria-expanded="false"
		class="flex border-2 rounded-md border-teal-300 gap-2 items-center px-2 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-black"
		>{blok.button}
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
			<path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/>
		</svg></button
	>
	<ul aria-hidden="true" class="absolute w-full bg-white p-2 left-0 right-0">
		{#each blok.links as item}
			<li>
				<a
					class="px-2 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-black"
					href={item.link.story.url}>{item.link.story.name}</a
				>
			</li>
		{/each}
	</ul>
</li>
