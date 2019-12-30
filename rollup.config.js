const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const { eslint } = require('rollup-plugin-eslint');
const { terser } = require('rollup-plugin-terser');
const replace = require('rollup-plugin-replace');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { name, version, homepage } = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    input: `src/index.js`,
    output: {
        name: `BilibiliLiveHimeSong`,
        file: `dist/BilibiliLiveHimeSong.js`,
        format: 'iife',
        sourcemap: false,
    },
    plugins: [
        eslint({
            exclude: ['node_modules/**', 'src/**/dev/*.scss'],
        }),
        nodeResolve(),
        commonjs(),
        babel({
            runtimeHelpers: true,
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/env',
                    {
                        modules: false,
                    },
                ],
            ],
            plugins: ['@babel/plugin-external-helpers', '@babel/plugin-transform-runtime'],
        }),
        replace({
            __ENV__: JSON.stringify(process.env.NODE_ENV),
        }),
        postcss({
            plugins: [
                autoprefixer(),
                cssnano({
                    preset: 'default',
                }),
            ],
            sourceMap: false,
        }),
        isProd &&
            terser({
                output: {
                    preamble:
                        '/*!\n' +
                        ` * ${name} v${version}\n` +
                        ` * Github: ${homepage}\n` +
                        ` * (c) 2018-${new Date().getFullYear()} Harvey Zack\n` +
                        ' * Released under the MIT License.\n' +
                        ' */\n',
                    comments: () => false,
                },
            }),
    ],
};
