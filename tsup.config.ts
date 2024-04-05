import { defineConfig } from 'tsup'

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['cjs', 'esm'],
	sourcemap: true,
	treeshake: true,
	minify: true,
	clean: true,
	dts: true,
})
