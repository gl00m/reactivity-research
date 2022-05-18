const baseIndent = 1
const spacesInTab = 'tab'
const alertLevel = 'warn'
module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	plugins: [
		'vue'
	],
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'@vue/typescript'
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		'no-tabs': 'off',
		'no-console': 'off',
		'arrow-parens': 'off',
		// "indent": [alertLevel, spacesInTab],
		indent: 'off',
		'@typescript-eslint/indent': [
			alertLevel,
			spacesInTab
		],
		'object-curly-spacing': [
			alertLevel
		],
		semi: [
			alertLevel,
			'never',
			{
				beforeStatementContinuationChars: 'any'
			}
		],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'vue/no-unused-vars': alertLevel,
		'@typescript-eslint/no-unused-vars': [
			alertLevel,
			{
				vars: 'all',
				ignoreRestSiblings: false,
				argsIgnorePattern: '^_'
			}
		],
		'vue/html-indent': [alertLevel, spacesInTab, {
			attribute: 2,
			baseIndent: baseIndent,
			closeBracket: 0,
			alignAttributesVertically: true,
			ignores: []
		}],
		'vue/script-indent': [alertLevel, spacesInTab, {
			baseIndent: baseIndent
		}],
		'vue/max-attributes-per-line': [
			alertLevel,
			{
				singleline: 10,
				multiline: 1
			}
		],
		'vue/valid-v-slot': alertLevel,
		'arrow-spacing': [
			alertLevel,
			{
				before: true,
				after: true
			}
		],
		'block-spacing': [
			alertLevel,
			'always'
		],
		'brace-style': [
			alertLevel,
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'comma-spacing': [
			alertLevel,
			{
				before: false,
				after: true
			}
		],
		'constructor-super': alertLevel,
		curly: [
			alertLevel,
			'multi-line'
		],
		'dot-location': [
			alertLevel,
			'property'
		],
		'eol-last': alertLevel,
		eqeqeq: [
			alertLevel,
			'always',
			{
				null: 'ignore'
			}
		],
		'key-spacing': [
			alertLevel,
			{
				beforeColon: false,
				afterColon: true
			}
		],
		'new-cap': [
			alertLevel,
			{
				newIsCap: true,
				capIsNew: false
			}
		]
	},
	// parserOptions: {
	//     parser: '@typescript-eslint/parser',
	// },
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				'@typescript-eslint/indent': 'off'
			}
		},
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
}
