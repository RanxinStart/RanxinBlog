import { transformSync, buildSync,build } from 'esbuild'
// import { readFileSync } from 'fs'
import { resolve } from 'path'

/* const file = readFileSync('./test.jsx')
const result = transformSync(file.toString(), {
    loader: 'jsx'
}) */

const result = build({
    entryPoints: [resolve(__dirname, '../app.jsx')],
    // sourcemap: 'inline',
    // splitting: true,
    bundle: true,
    minify: true,
    // format: 'esm',
    jsxFactory: 'VUE_H_FUN',
    jsxFragment: 'VUE_FRAGMENT_TAG',
    outfile: resolve(__dirname, '../../dist/build.js'),
    inject: [resolve(__dirname, '../inject/index.js')],
    // outdir: './dist'
})

console.log(result)