<script lang="ts">
	import HanziWriter from 'hanzi-writer';
	import { v4 as uuidv4 } from 'uuid';
	import { onMount } from 'svelte';

	export let character: string;
	const uuid = uuidv4();

	function renderCharacter() {
		var writer = HanziWriter.create(uuid, character, {
			width: 100,
			height: 100,
			padding: 5,
			strokeAnimationSpeed: 5,
			delayBetweenStrokes: 100,
			delayBetweenLoops: 500,
			radicalColor: '#337ab7'
		});
		writer.loopCharacterAnimation();
	}
	onMount(() => {
		renderCharacter();
	});
</script>

<div id={uuid} />
