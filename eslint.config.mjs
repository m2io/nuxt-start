import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
	antfu({
		stylistic: {
			indent: 'tab',
			semi: false,
			quotes: 'single',
		},
		typescript: true,
		vue: true,
	}),
	{
		rules: {
			'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
			'style/arrow-parens': ['error', 'always'],
			'no-console': 'warn',
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: {
						max: 1,
					},
					multiline: {
						max: 1,
					},
				},
			],
			'vue/html-self-closing': ['error', {
				html: {
					void: 'any',
					normal: 'never',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			}],
		},
	},
)
