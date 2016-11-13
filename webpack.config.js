var webpack = require('webpack');

module.exports = {
    devtool:'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js',
    ],
    output: {
        path: require('path').resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
      // Add a babelrc file to load babel or use query
        loaders:[{ 
            test: /\.js$/, 
            loader: 'babel-loader', exclude: /node_modules/, 
            query:{ presets: ['react','es2015', 'react-hmre']}
        },{ 
            test: /\.css$/,
            loader: 'style-loader',
        },{
            test: /\.css$/,
            loader: 'css-loader',
            query:{ 
                modules: true,
                localIdentName:'[name]__[local]___[hash:base64:5]'
            }
        }]
    }
}
