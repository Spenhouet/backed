<script lang="ts">
	export let navigation: ui.Navigation = [];

	export let socials: ui.Navigation = [];

	export let copyRight: string = '';
</script>

<footer class="w-full">
	<div
		class="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
	>
		<nav class="-mx-5 -my-2 flex flex-wrap justify-center md:order-2" aria-label="Footer">
			{#each navigation as item}
				<div class="px-5 py-2">
					<a href={item.path} class="text-base text-gray-600 hover:text-gray-900">
						{item.name}
					</a>
				</div>
			{/each}
		</nav>
		<div class="mt-6 flex justify-center space-x-6 md:mt-0 md:order-3">
			{#each socials as item}
				<a href={item.path} class="text-gray-600 hover:text-gray-900">
					<span class="sr-only">{item.name}</span>
					<svelte:component this={item.icon} class="h-6 w-6" aria-hidden="true" />
				</a>
			{/each}
		</div>
		<div class="mt-6 md:mt-0 md:order-1">
			<p class="text-center text-base text-gray-600">{@html copyRight}</p>
		</div>
	</div>
</footer>
