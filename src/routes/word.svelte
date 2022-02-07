<script lang="ts">
	import CharacterCard from '../components/CharacterCard.svelte';

	import { lookupLetters } from '../helpers';

	import phrases from '../sentences.json';
	const word = phrases.sentences[0].phrase;
	const letters = lookupLetters(word);
</script>

<div class="grid place-items-center h-screen">
	{#each letters as word}
		<CharacterCard character={word} />
	{/each}
</div>
