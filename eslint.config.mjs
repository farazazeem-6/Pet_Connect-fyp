import { defineConfig } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import noUnusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },

  {
    plugins: {
      'unused-imports': noUnusedImports,
    },

    rules: {
      'react-hooks/set-state-in-effect': 'off',

      // ❌ No warnings — build should fail
      'no-warning-comments': 'error',

      // ❌ No console logs
      'no-console': 'error',

      // ❌ No unused vars / imports
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',

      // ✅ Must always have a key in mapped JSX
      'react/jsx-key': 'error',

      // ❌ Always require semicolons
      semi: ['error', 'always'],
    },
  },
]);
