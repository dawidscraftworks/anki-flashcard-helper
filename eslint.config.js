import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';
import _import from 'eslint-plugin-import';
import checkFile from 'eslint-plugin-check-file';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import jsonParser from 'jsonc-eslint-parser';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		plugins: {
			'react-refresh': reactRefresh,
			'@typescript-eslint': typescriptEslint,
			'unused-imports': unusedImports,
			import: _import,
			'check-file': checkFile,
			prettier: prettier,
		},
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
			},
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: resolve(__dirname, 'tsconfig.json'),
				},
			},
		},
		rules: {
			'react-refresh/only-export-components': [
				2,
				{ allowConstantExport: true },
			],
			'@typescript-eslint/no-unused-vars': [
				2,
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
			],
			'@typescript-eslint/explicit-function-return-type': 'off',
			'import/extensions': [2, 'ignorePackages', { ts: 'never', tsx: 'never' }],
			'import/order': [
				2,
				{
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling', 'index'],
					],
					pathGroups: [
						{ pattern: '@/**', group: 'internal', position: 'after' },
					],
					'newlines-between': 'always',
				},
			],
			'import/newline-after-import': 2,
			'unused-imports/no-unused-imports': 2,
			'unused-imports/no-unused-vars': [
				2,
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
			'check-file/no-index': 'off',
			'check-file/filename-blocklist': [
				2,
				{ '**/*.model.ts': '*.models.ts', '**/*.util.ts': '*.utils.ts' },
			],
			'check-file/folder-match-with-fex': [
				2,
				{
					'*.test.{js,jsx,ts,tsx}': '**/__tests__/',
					'*.styled.{jsx,tsx}': '**/pages/',
				},
			],
			'check-file/filename-naming-convention': [
				2,
				{
					'**/*/!(index).{jsx,tsx}': 'PASCAL_CASE',
					'**/*.{js,ts}': 'KEBAB_CASE',
				},
				{ ignoreMiddleExtensions: true },
			],
			'check-file/folder-naming-convention': [
				2,
				{ 'src/**//!(__tests__)/**/': 'KEBAB_CASE', 'mocks/*/': 'KEBAB_CASE' },
			],
			'prettier/prettier': 2,
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-nested-ternary': 2,
			'newline-before-return': 2,
			'no-lonely-if': 2,
			'no-useless-concat': 2,
			camelcase: [2, { properties: 'always' }],
		},
	},

	{
		files: ['**/*.json', '**/*.json5'],
		languageOptions: {
			parser: jsonParser,
		},
	},

	{
		ignores: [
			'**/dist',
			'**/eslint.config.js',
			'**/commitlint.config.js',
			'**/postcss.config.js',
			'**/tailwind.config.js',
			'public/*',
		],
	},
];
