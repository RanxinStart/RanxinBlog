import { transformSync, buildSync } from 'esbuild'
import { readFileSync } from 'fs'

/* const file = readFileSync('./test.jsx')
const result = transformSync(file.toString(), {
    loader: 'jsx'
}) */

const result = buildSync({
    entryPoints: ['./test.jsx'],
    sourcemap: true,
    bundle: true,
    minify: true,
    outfile: './dist/build.js'
})

console.log(result)