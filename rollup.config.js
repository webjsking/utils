import babel from 'rollup-plugin-babel'
import clear from 'rollup-plugin-clear'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'lib/bundle.umd.js',
            format: 'umd',
            name:'file'
        },
        {
            file: 'lib/index.ems.js',
            format: 'es'
        },
        {
            file: 'lib/index.common.js',
            format: 'cjs'
        }
    ],
    Plugin:[
        babel(),
        clear({targets:['lib']})
    ]
};