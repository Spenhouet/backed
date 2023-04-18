import { ApiProxy } from '$lib/query/apis/proxy';
import { ChainProxy } from '$lib/query/chains/proxy';

const chain = new ChainProxy();
const api = new ApiProxy();

async function queryUnderlying(
	underlyingToken: agg.TokenContract,
	vault: agg.VaultContract
): Promise<query.Balance> {
	if (vault.chain != underlyingToken.chain) {
		throw new Error(
			`Vault and underlying token on different chains: ${vault.chain} vs. ${underlyingToken.chain}`
		);
	}

	const balance = chain.getBalance(vault.address, underlyingToken.address, vault.chain);

	return balance;
}

async function queryBacking(
	vault: agg.VaultContract,
	assetsContracts: agg.AssetsContracts
): Promise<agg.AssetBacking> {
	return {
		assets: Object.fromEntries(
			await Promise.all(
				vault['underlying-assets']
					.filter((u) => u in assetsContracts)
					.map(async (u) => [u, (await queryUnderlying(assetsContracts[u]!.token, vault)).balance])
			)
		),
		source: chain.getRpcUrl(vault.chain),
		timestamp: new Date().toISOString()
	};
}

async function queryChainData(
	assetContracts: agg.AssetContracts,
	assetsContracts: agg.AssetsContracts
) {
	const token = assetContracts.token;

	let supply = null;
	try {
		supply = chain.getSupply(token.address, token.chain as derived.ChainId);
	} catch (error) {
		console.log(error);
	}
	let backing = null;
	try {
		backing = assetContracts.vault ? queryBacking(assetContracts.vault, assetsContracts) : null;
	} catch (error) {
		console.log(error);
	}

	return {
		id: assetContracts.id,
		supply: await supply,
		backing: await backing
	};
}

export async function queryAssets(assetsContracts: agg.AssetsContracts): Promise<query.Results> {
	const pricePromise = api.getPrices(
		Object.values(assetsContracts).filter((contracts) => !contracts.computed)
	);

	const chainDataPromise = Promise.all(
		Object.values(assetsContracts).map(async (contracts) =>
			queryChainData(contracts, assetsContracts)
		)
	);

	const [price, chainData] = await Promise.all([pricePromise, chainDataPromise]);

	let allData = Object.fromEntries(
		chainData.map((data) => [data.id, { ...data, price: price[data.id] ?? null }])
	);

	return allData;
}

export async function queryAsset(
	assetDetails: agg.AssetDetails,
	assetContracts: agg.AssetContracts
) {
	return (
		await queryAssets({ [assetDetails.id]: assetDetails }, { [assetContracts.id]: assetContracts })
	)[0];
}
