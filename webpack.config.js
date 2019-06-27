module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/build',
        chunkFilename: '[name].js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    }
};