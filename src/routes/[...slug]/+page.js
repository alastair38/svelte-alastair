// @ts-nocheck

export const load = async ({ params, parent }) => {
	const { storyblokApi } = await parent();

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

	const fetchPosts = async () => {
		const posts = await storyblokApi.get('cdn/stories/', {
			version: 'draft',
			starts_with: 'blog',
			is_startpage: false
		});

		return posts.data.stories;
	};

	return {
		//story: fetchPage(),
		posts: fetchPosts()
	};
};
