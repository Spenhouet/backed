<script lang="ts">
	import { base } from '$app/paths';
	import Glow from '$components/glow.svelte';
	import SectionHeader from '$components/layout/landing/section/header.svelte';
	import Section from '$components/layout/landing/section/main.svelte';
	import Table from '$components/table.svelte';
	import { compare, formatCurrency } from '$lib/utils/string-formatting';
	import _ from 'lodash-es';
	import type { PageData } from '../$types';

	export let theme: ui.Theme;

	export let data: PageData;

	$: ({ graphData, issuersDetails, issuersIcons } = data);
</script>

<Section id="issuers" label="Ranking of recorded issuers.">
	<SectionHeader
		title="Issuers"
		description="View all assets by issuer."
		button={{ text: 'View all Issuers', href: `${base}/issuers` }}
		theme={{ title: theme.text, from: theme.from, via: theme.via, to: theme.to }}
	/>
	<div class="mt-10 w-full max-w-7xl mx-auto px-0 sm:px-4 lg:px-8">
		<Glow {theme} class="-inset-x-4 sm:-inset-x-0 animate-tilt-1">
			<Table
				{data}
				length={10}
				columns={[
					{ id: 'rank', title: '#', class: '' },
					{ id: 'name', title: 'Name', class: 'font-medium', link: true },
					{ id: 'tvl', title: 'Total Value Locked (TVL)', class: '' },
					{ id: 'numAssets', title: 'Assets', class: '' }
				]}
				rows={Object.values(issuersDetails)
					.map((issuer) => {
						const assetsOfIssuer = graphData.nodes
							.filter((node) => node.data.details.issuer == issuer.id)
							.filter((node) => !node.data.details.tags.includes('lp'));
						return {
							...issuer,
							numAssets: assetsOfIssuer.length,
							tvl: _.sumBy(assetsOfIssuer, (asset) => asset.data.history?.at(-1)?.mcap?.value ?? 0)
						};
					})
					.filter((issuer) => issuer.tvl)
					.sort((a, b) => compare(a.tvl, b.tvl))
					.map((issuer, i) => ({
						rank: { text: (i + 1).toString(), value: i },
						name: {
							text: issuer.name,
							value: issuer.name,
							icon: `${base}/${issuersIcons[issuer.id]?.href}`
						},
						'name-path': {
							text: `${base}/issuers/${issuer.id}`,
							value: `${base}/issuers/${issuer.id}`
						},
						numAssets: {
							text: issuer.numAssets.toString(),
							value: issuer.numAssets
						},
						tvl: {
							text: formatCurrency(issuer.tvl),
							value: issuer.tvl
						}
					}))}
				sort={[{ by: 'tvl' }]}
				class="sm:rounded-lg"
			/>
		</Glow>
	</div>
</Section>
