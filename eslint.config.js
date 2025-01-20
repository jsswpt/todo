import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import pluginSort from 'eslint-plugin-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  pluginSort.configs['flat/recommended'],

  {
    rules: {
      'sort/object-properties': 'off',
      'sort/imports': [
        'warn',
        {
          groups: [
            { order: 10, type: 'side-effect' },
            { order: 20, type: 'dependency' },
            { order: 30, regex: '^(.*)?widgets?(.*)$' },
            { order: 31, regex: '^(.*)?features?(.*)$' },
            { order: 32, regex: '^(.*)?entities?(.*)$' },
            { order: 33, regex: '^(.*)?shared?(.*)$' },
            { order: 40, type: 'other' },
            { order: 50, regex: '\\.(png|jpg|svg)$' },
          ],
          separator: '\n',
        },
      ],
    },
  },
  {
    files: ['index.ts'],
    rules: {
      'sort/exports': [
        'error',
        {
          caseSensitive: false,
          groups: [],
          natural: true,
          typeOrder: 'preserve',
        },
      ],
    },
  },
]
