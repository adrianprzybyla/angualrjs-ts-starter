module.exports = function (env) {
    return {
        entry: './bootstrap.ts',
        devtool: 'cheap-eval-source-map',
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
    }
}