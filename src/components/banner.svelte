<script lang="ts">
	import { XIcon } from '@rgossiaux/svelte-heroicons/outline';
	import { twMerge } from 'tailwind-merge';

	let clazz: string = '';
	export { clazz as class };

	let open: boolean = true;

	export let placement: ui.Placement = 'top';
</script>

{#if open}
	<div
		class={twMerge(
			`${placement == 'top' ? 'relative' : 'fixed inset-x-0 bottom-0'} bg-neon-gray-dark ${clazz}`
		)}
	>
		<div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
			<slot />
			<div
				class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start"
			>
				<button
					type="button"
					class="flex p-2 rounded-md hover:bg-gray-50 hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-current"
					on:click={(e) => (open = false)}
				>
					<span class="sr-only">Dismiss</span>
					<XIcon class="h-6 w-6 text-current" aria-hidden="true" />
				</button>
			</div>
		</div>
	</div>
{/if}
