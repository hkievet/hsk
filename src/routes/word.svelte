<script lang="ts">
	import Selector from '../components/Selector.svelte';
	import CharacterCard from '../components/CharacterCard.svelte';
	import { lookupLetters } from '../helpers';
	import phrases from '../sentences.json';

	const options = phrases.sentences.map((phrase) => {
		return { key: phrase.phrase, value: phrase.meaning };
	});

	let selectedPhrase = phrases.sentences[0];
	$: letters = lookupLetters(selectedPhrase.phrase);

	function onChange(value) {
		const details = value.detail;
		selectedPhrase = { phrase: details.key, meaning: details.value };
	}
</script>

<Selector {options} on:onChange={onChange} value={selectedPhrase.phrase} />

<div class="flex flex-wrap mx-auto w-11/12 justify-between space-y-4">
	{#if letters}
		{#each letters as word ({ letters, word })}
			<CharacterCard character={word} />
		{/each}
	{/if}
</div>
