const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        maths: './src/maths/maths.ts',
        sigma: './src/maths/sigma.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve('manifest.json'),
                to: path.resolve('dist'),
            }]
        })
    ],
    module: {
        rules: [
            {
                test: /.(ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },
}