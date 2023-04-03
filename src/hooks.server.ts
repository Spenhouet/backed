import { queryAssets } from '$lib/query/query';
import { aggregateFolders } from '$lib/utils/aggregation';
import { aggregateIcons } from '$lib/utils/copy-icons';
import { readAggregation, writeAggregation, writeHistoryUpdate } from '$lib/utils/files';
import { createBackingGraph, writeGraph } from '$lib/utils/graph';
import { aggregateGlobalStats } from '$lib/utils/stats';
import fs from 'fs';

console.log(`Hooks loading.`);

async function aggregateData() {
	console.log(`Data preprocessing started.`);
	// Copy static files
	const assetsIcons = aggregateIcons('assets');
	const chainsIcons = aggregateIcons('chains');
	const issuersIcons = aggregateIcons('issuers');

	// Basic data aggregation
	const issuersDetails = await aggregateFolders<derived.IssuerId, agg.IssuerDetails>(
		'issuers',
		'details'
	);
	const chainsDetails = await aggregateFolders<derived.ChainId, agg.ChainDetails>(
		'chains',
		'details'
	);
	const assetsDetails = await aggregateFolders<derived.AssetId, agg.AssetDetails>(
		'assets',
		'details'
	);
	const assetsContracts = await aggregateFolders<derived.AssetId, agg.AssetContracts>(
		'assets',
		'contracts'
	);

	let assetsPrice = await aggregateFolders<derived.AssetId, agg.AssetPriceData>('assets', 'price');
	let assetsSupply = await aggregateFolders<derived.AssetId, agg.AssetSupplyData>(
		'assets',
		'supply'
	);
	let assetsBacking = await aggregateFolders<derived.AssetId, agg.AssetBackingData>(
		'assets',
		'backing'
	);

	await updateData(assetsDetails, assetsContracts, assetsPrice, assetsSupply, assetsBacking);

	const data = {
		assetsDetails,
		assetsIcons,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		issuersDetails,
		issuersIcons,
		chainsDetails,
		chainsIcons
	};

	const graph = createBackingGraph(data);
	writeGraph('graph', graph);

	// TODO aggregate stats of issuers and chains

	const globalStats = aggregateGlobalStats(graph, data);

	return {
		assetsDetails,
		assetsIcons,
		assetsContracts,
		assetsPrice,
		assetsSupply,
		assetsBacking,
		issuersDetails,
		issuersIcons,
		chainsDetails,
		chainsIcons,
		globalStats,
		graph
	};
}

async function updateData(
	assetsDetails: agg.AssetsDetails,
	assetsContracts: agg.AssetsContracts,
	assetsPrice: agg.AssetsPrice,
	assetsSupply: agg.AssetsSupply,
	assetsBacking: agg.AssetsBacking
) {
	// Update only every 12h
	if (!update.query || Date.now() - new Date(update.query).getTime() > 12 * 60 * 60 * 1000) {
		console.log(`Data update started.`);
		const queryResults = await queryAssets(assetsDetails, assetsContracts);
		for (const [id, queryResult] of Object.entries(queryResults)) {
			writeHistoryUpdate(id, queryResult, assetsPrice, 'price');
			writeHistoryUpdate(id, queryResult, assetsSupply, 'supply');
			writeHistoryUpdate(id, queryResult, assetsBacking, 'backing');
		}
		await aggregateFolders<derived.AssetId, agg.AssetPriceData>('assets', 'price');
		await aggregateFolders<derived.AssetId, agg.AssetSupplyData>('assets', 'supply');
		await aggregateFolders<derived.AssetId, agg.AssetBackingData>('assets', 'backing');
		console.log(`Data update finished.`);
		update.query = new Date().toISOString();
	}
}

const update = (await readAggregation<agg.Update>('update')) ?? {};

if (!update.timestamp || Date.now() - new Date(update.timestamp).getTime() > 60 * 1000) {
	console.log(`Preprocessing execution`);
	fs.mkdirSync('./.aggregation', { recursive: true });

	await aggregateData();

	writeAggregation('update', { timestamp: new Date().toISOString(), query: update.query });
}
