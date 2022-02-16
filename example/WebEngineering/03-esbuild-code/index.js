import { transformSync, buildSync } from 'esbuild'
import { readFileSync } from 'fs'

/* const file = readFileSync('./test.jsx')
const result = transformSync(file.toString(), {
    loader: 'jsx'
}) */

const result = buildSync({
    entryPoints: ['./test.jsx'],
    // sourcemap: 'inline',
    // splitting: true,
    // bundle: true,
    // minify: true,
    // format: 'esm',
    target: 'es2019',
    outfile: './dist/build.js'
    // outdir: './dist'
})

console.log(result)