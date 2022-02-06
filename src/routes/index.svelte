<script lang="ts">
	import CharacterCard from '../components/CharacterCard.svelte';
	import data from '../data.json';
	const character = data.words[0]['translation-data'];
	const character2 = data.words[1]['translation-data'];
</script>

<div class="grid place-items-center h-screen">
	{#each data.words as word}
		<CharacterCard character={word['translation-data']} />
	{/each}
</div>
