import { build } from 'esbuild'
import vueNext from 'esbuild-plugin-vue-next'
import { resolve } from 'path'

build({
    entryPoints: [resolve(__dirname, '../src/main.js')],
    outfile: resolve(__dirname, '../dist/build.js'),
    bundle: true,
    plugins: [vueNext()]
})