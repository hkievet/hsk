<script lang="ts">
	import CharacterStroke from './CharacterStroke.svelte';
	export let character: CharacterInfo;
</script>

<div class="w-96 p-2 bg-slate-50">
	<p>{character.simplified}</p>
	<p>{character.pinyin}</p>
	<p>{character.english}</p>
	<div class="flex">
		{#each character.simplified as char (char)}
			<CharacterStroke character={char} />
		{/each}
	</div>
</div>
