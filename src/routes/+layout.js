// @ts-nocheck
import { env } from '$env/dynamic/public';

import Feature from '../components/Feature.svelte';
import FeatureText from '../components/FeatureText.svelte';
import Grid from '../components/Grid.svelte';
import Page from '../components/Page.svelte';
import Teaser from '../components/Teaser.svelte';
import Profile from '../components/Profile.svelte';
import Header from '../components/Header.svelte';
import Article from '../components/Article.svelte';
import VerticalHeading from '../components/VerticalHeading.svelte';
import InternalLink from '../components/InternalLink.svelte';
import Cubes from '../components/Cubes.svelte';
import CentredText from '../components/CentredText.svelte';
import Heading from '../components/Heading.svelte';
import Hero from '../components/Hero.svelte';
import Form from '../components/Form.svelte';
import Flexbox from '../components/Flexbox.svelte';
import Post from '../components/Post.svelte';
import AllPosts from '../components/AllPosts.svelte';
import Hr from '../components/Hr.svelte';

import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte';

let callbackComponents = () => {
	return {
		all_posts: AllPosts,
		feature: Feature,
		feature_text: FeatureText,
		centred_text: CentredText,
		flexbox: Flexbox,
		grid: Grid,
		page: Page,
		post: Post,
		hero: Hero,
		hr: Hr,
		form: Form,
		profile: Profile,
		teaser: Teaser,
		header: Header,
		article: Article,
		heading: Heading,
		heading_vertical: VerticalHeading,
		internal_link: InternalLink,
		cubes: Cubes
	};
};

export const load = async ({ params, url }) => {
	storyblokInit({
		accessToken: env.PUBLIC_STORYBLOK_API,
		use: [apiPlugin],
		components: callbackComponents,
		apiOptions: {
			https: true
		}
	});
	let storyblokApi = useStoryblokApi();

	const fetchNav = async () => {
		const nav = await storyblokApi.get('cdn/stories/navigation', {
			version: 'published',
			resolve_links: 'url'
		});
		return nav.data.story.content.header_menu;
	};

	const fetchSettings = async () => {
		const settings = await storyblokApi.get('cdn/stories/settings', {
			version: 'published'
		});
		return settings.data.story;
	};

	const fetchPage = async () => {
		let slug = params.slug;
		let path = 'cdn/stories/';
		if (slug) {
			path += slug;
		} else {
			path += 'home';
		}

		const dataStory = await storyblokApi.get(path, {
			version: 'draft'
		});

		return dataStory.data.story;
	};

	// const fetchPosts = async () => {
	// 	const posts = await storyblokApi.get('cdn/stories/', {
	// 		version: 'draft',
	// 		starts_with: 'blog',
	// 		is_startpage: false
	// 	});

	// 	return posts.data.stories;
	// };

	return {
		header: fetchNav(),
		story: fetchPage(),
		settings: fetchSettings(),

		storyblokApi: storyblokApi
	};
};
