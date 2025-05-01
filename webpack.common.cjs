const CopyPlugin = require('copy-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    target: 'web',
    entry: {maths: './src/maths/backend.ts',},
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: [/node_modules/]
        },
      ],
    },
    resolve: {
        alias: {
            maths: path.resolve(__dirname, 'src/maths/'),
            lib: path.resolve(__dirname, 'src/lib/'),
            science: path.resolve(__dirname, 'src/science/'),
        },
        extensions: ['.ts']
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve('manifest.json'),
                to: path.resolve('dist'),
            },
            {
              from: path.resolve('assets'),
              to: path.resolve('dist/assets'),
          }]
        }),
        new CircularDependencyPlugin({
          // exclude detection of files based on a RegExp
          exclude: /a\.js|node_modules/,
          // include specific files based on a RegExp
          include: /src/,
          // add errors to webpack instead of warnings
          failOnError: true,
          // allow import cycles that include an asyncronous import,
          // e.g. via import(/* webpackMode: "weak" */ './file.js')
          allowAsyncCycles: false,
          // set the current working directory for displaying module paths
          cwd: process.cwd(),
        })
    ],
  };