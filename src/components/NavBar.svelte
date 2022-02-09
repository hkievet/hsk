<script>
	import { page } from '$app/stores';

	let links = [
		{ href: '/', text: 'HSK-1 Word List' },
		{ href: '/word', text: 'HSK-1 Sentences' }
	];

	$: path = $page.url.pathname;
</script>

<nav>
	<h1>HSK-1 Practice Site</h1>
	{#each links as link}
		<a href={link.href} class:current={link.href === path}>{link.text}</a>
	{/each}
</nav>

<style lang="postcss">
	nav {
		@apply bg-slate-200 p-2 flex gap-x-4 mb-3;
	}
	a {
		@apply text-blue-900 font-bold;
	}
	a.current {
		@apply text-emerald-900;
	}
	a:hover {
		@apply underline underline-offset-4;
	}
	h1 {
		@apply font-mono mr-4;
	}
</style>
