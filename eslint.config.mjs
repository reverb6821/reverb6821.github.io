import betterTailwind from 'eslint-plugin-better-tailwindcss'
import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      'better-tailwindcss': betterTailwind,
    },
    rules: {
      // React Refresh for Vite
      'react-refresh/only-export-components': 'off',
      // import sorting
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['sibling', 'parent'],
            'index',
            'unknown',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'desc',
            caseInsensitive: true,
          },
        },
      ],
      ...betterTailwind.configs.recommended.rules,
      'better-tailwindcss/no-unregistered-classes': 'off',
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/globals.css', 
      },
    },
  }
]);

export default eslintConfig;
