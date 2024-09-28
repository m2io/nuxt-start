export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ name: 'theme-color', content: '#000000' },
			],
			link: [
				{
					rel: 'icon',
					type: 'image/svg+xml',
					href: '/favicon.svg',
				},
			],
		},
	},
	compatibilityDate: '2024-04-03',
	css: [
		'@/assets/font.css',
		'@/assets/styles.css',
	],
	devtools: { enabled: false },
	eslint: {
		config: {
			standalone: false,
		},
	},
	experimental: {
		typedPages: true,
	},
	future: {
		compatibilityVersion: 4,
	},
	modules: [
		'@nuxt/eslint',
	],
	postcss: {
		plugins: {
			'@tailwindcss/postcss': {},
		},
	},
	typescript: {
		strict: true,
	},
})
