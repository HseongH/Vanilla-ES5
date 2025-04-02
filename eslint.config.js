var globals = require('globals');
var pluginJs = require('@eslint/js');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
	{
		files: ['**/*.js'],
		ignores: ['node_modules/**', 'dist/**'],
		languageOptions: {
			ecmaVersion: 5,
			sourceType: 'commonjs',
			globals: Object.assign({}, globals.node, globals.browser, globals.amd),
			parserOptions: {
				impliedStrict: true
			}
		}
	},
	pluginJs.configs.recommended
];
