<script lang="ts">
	import CharacterStroke from './CharacterStroke.svelte';
	export let character: CharacterInfo;
</script>

<div class="w-96 p-4">
	<p>{character.simplified}</p>
	<p>{character.pinyin}</p>
	<p>{character.english}</p>
	<div class="flex">
		{#each character.simplified as char}
			<CharacterStroke character={char} />
		{/each}
	</div>
</div>
