import { defineConfig } from 'eslint-define-config';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import pluginPrettier from 'eslint-plugin-prettier';
import parserTypescript from '@typescript-eslint/parser';

export default defineConfig({
  languageOptions: {
    parser: parserTypescript,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      project: './tsconfig.json', // Ensure your tsconfig is in the right path
    },
  },
  plugins: {
    react: pluginReact,
    'react-hooks': pluginReactHooks,
    '@typescript-eslint': pluginTypescript,
    prettier: pluginPrettier,
  },
  rules: {
    'react/prop-types': 'off', // example rule
    '@typescript-eslint/no-unused-vars': 'warn', // example rule
    'prettier/prettier': 'warn', // example rule
  },
  overrides: [
    // Optional: TypeScript-specific config for TypeScript files
    {
      files: ['*.ts', '*.tsx'],
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json', // specify your tsconfig for TypeScript files
        },
      },
    },
  ],
});
