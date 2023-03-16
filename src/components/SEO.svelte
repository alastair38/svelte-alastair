<script>
	// @ts-nocheck

	export let site_title, title, description, social_image, url;
</script>

<svelte:head>
	<title>{title ? `${site_title}: ${title}` : site_title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={site_title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={`${social_image}/m/800x418/`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={`${social_image}/m/800x418/`} />
</svelte:head>
