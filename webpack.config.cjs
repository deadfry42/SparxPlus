const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {
        maths: './src/maths/api.ts',
        
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
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('assets'),
                to: path.resolve('dist/assets'),
            }]
        })
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.ts$/,
    //             loader: "babel-loader",
    //             exclude: /(node_modules)/
    //         }
    //     ]
    // },
    module: {
        rules: [
            {
                // test: /.(ts)$/,
                test: /\.ts$/,
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
    resolve: {
    alias: {
            maths: path.resolve(__dirname, 'src/maths/'),
            lib: path.resolve(__dirname, 'src/lib/'),
            science: path.resolve(__dirname, 'src/science/'),
        },
        extensions: ['.ts']
    },
}