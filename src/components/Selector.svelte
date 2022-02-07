<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let options: { key: string; value: string }[] = [];
	export let value: string = '';
	const dispatch = createEventDispatcher<{ onChange: { meaning: string; phrase: string } }>();
	function onChange(value) {
		dispatch('onChange', value);
	}
</script>

<div class="flex gap-x-3 p-3">
	{#each options as option}
		<button class:selected={option.key === value} on:click={() => onChange(option)}
			>{option.key}</button
		>
	{/each}
</div>

<style lang="postcss">
	button {
		@apply p-3 border-2 border-transparent;
	}
	button:hover {
		@apply border-solid border-2 border-green-200;
	}
	button.selected {
		@apply bg-green-200;
	}
</style>
