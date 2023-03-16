<script>
	// @ts-nocheck

	import { page } from '$app/stores';
	import DropdownMenu from './DropdownMenu.svelte';

	export let header;
</script>

<header data-id="main-header" class="w-full p-6 h-auto md:h-40">
	<div class="container h-full mx-auto flex flex-col gap-4 md:flex-row justify-between">
		<h2 class="text-lg md:text-xl text-center md:text-left leading-none font-black z-10">
			<a href="/">Alastair Cox <span aria-hidden="true" class="text-teal-300">/</span> Developer</a>
		</h2>
		<span
			aria-hidden="true"
			class="opacity-80 text-gray-200/20 select-none break-words text-[7rem] md:text-[12rem] fixed top-0 left-0 right-0 bottom-0 font-black uppercase leading-[.75] -z-10"
			>AlastairCox<span class="text-teal-300/20">.</span><span>WebDesign</span><span>.</span><span
				>Content</span
			><span>.</span><span>Development</span><span>.</span><span>Graphics</span><span>.</span><span
				>Video</span
			><span>.</span><span>Photography</span></span
		>
		{#if header}
			<nav
				class="flex text-sm md:text-base ml-0 w-full md:w-auto justify-around gap-6 items-center self-start md:ml-auto z-10"
			>
				<!-- <button
					aria-controls="submenu-1"
					aria-expanded="false"
					class="flex gap-2 items-center px-2 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-black"
					>Writing <svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg></button
				>
				<ul id="submenu-1" aria-hidden="true" class="absolute w-max bg-white p-2 left-0 right-0">
					<li>
						<a
							class="px-2 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-black"
							href="/">Blog</a
						>
					</li>
					<li>
						<a
							class="px-2 focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-black"
							href="/">Published</a
						>
					</li>
				</ul> -->
				<ul data-id="main-menu" class="flex gap-6">
					{#each header as blok}
						{#if blok.link.story}
							<li>
								<a
									class="px-3  border-transparent transition-colors duration-300 hover:border-teal-300 border-b {$page
										?.params.slug === blok.link.story.url
										? 'text-[#50b0ae]'
										: ''}"
									href={`/${blok.link.story.url}`}>{blok.link_text}</a
								>
							</li>
						{:else}
							<DropdownMenu {blok} />
						{/if}
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</header>
