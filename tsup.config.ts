import { defineConfig } from 'tsup'

export default defineConfig(
    [
        {
            name: 'CLI',
            entry: ['./src/cli.ts'],
            format: 'esm',
            outDir: './dist',
            bundle: true,
            external: ['@resvg/resvg-js'],
            outExtension: ({ format }) =>
                ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
        },
        {
            entry: { index: './src/resvg-js/index.ts' },
            format: ['cjs', 'esm'],
            outDir: './dist',
            bundle: true,
            external: ['@resvg/resvg-js'],
            outExtension: ({ format }) =>
                ({ js: format === 'esm' ? '.mjs' : '.cjs' }),
        },
        {
            entry: { index: './src/resvg-js/index.ts' },
            format: 'esm',
            outDir: './dist',
            dts: { only: true },
        },
    ],
)
