import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import fs from 'fs';
// import glob from 'glob';

const assets = fs.readdirSync('./assets');
const issuers = fs.readdirSync('./issuers');
const chains = fs.readdirSync('./chains');

// const tokens = glob
// 	.sync('./assets/*/contracts.json')
// 	.map((filePath) => JSON.parse(fs.readFileSync(filePath, 'utf-8')))
// 	.map((contracts) => contracts.token.address)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		// Consult https://kit.svelte.dev/docs/integrations#preprocessors
		// for more information about preprocessors
		vitePreprocess({
			scss: {
				prependData: '@use "src/variables.scss" as *;'
			},
			postcss: true,
			preserve: ['ld+json']
		})
	],

	kit: {
		alias: {
			$components: 'src/components',
			$api: 'src/routes/(api)',
			$pre: 'src/preprocess',
		},
		paths: {
			base: '',
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),

		prerender: {
			entries: [
				'*',
				'/',
				...assets.map((id) => `/assets/${id}/icon.svg`),
				'/site.webmanifest',
				'/sitemap.xml',
				'/faq',
				'/about',
				'/legal-notice',
				'/graph',
				'/assets',
				'/issuers',
				'/chains',
				// '/assets.json',
				// ...assets.map((id) => `/assets/${id}.json`),
				...assets.map((id) => `/assets/${id}`),
				...issuers.map((id) => `/issuers/${id}`),
				...chains.map((id) => `/chains/${id}`),
				// '/trees.json',
				// '/graph.json',
				// ...assets.map((id) => `/trees/${id}.json`),
				// ...tokens.map((id) => `/tokens/${id}.json`),
			],
		},
	},
};

export default config;
