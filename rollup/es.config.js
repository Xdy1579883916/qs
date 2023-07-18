import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
    input: './lib/index.js',
    plugins: [
        nodeResolve({
            preferBuiltins: false,
        }),
        commonjs(),
        json(),
        terser(),
        babel(),
    ],
    output: {
        file: './esm.qs.js',
        format: 'esm',
    },
};
