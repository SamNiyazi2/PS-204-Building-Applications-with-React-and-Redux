
// 02/20/2021 06:19 am - SSN - [20210220-0619] - [001] - M15-04 - Set up Webpack 

const webpack = require( 'webpack' );

const path = require( 'path' );

const HtmlWebpackPlugin = require( "html-webpack-plugin" );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
//const webpackBundleAnalyzer = require( 'webpack-bundle-analyzer' );

let mode = 'production';

process.env.NODE_ENV = mode;


module.exports = {

    mode: mode,
    target: 'web', //node
    devtool: 'source-map',
    entry: './src/index',
    output: {
        path: path.resolve( __dirname, 'build' ),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [

        //       new webpackBundleAnalyzer.BundleAnalyzerPlugin( { analyzerMode: 'static' } ),

        new MiniCssExtractPlugin( { filename: '[name].[contenthash].css' } ),

        //"process.env.API_URL": JSON.stringify( "https://ps-204-building-applications-with-react-and-redux-API.azurewebsites.net/" )
        //ps204_api_url=


        new webpack.DefinePlugin( {
            "process.env.NODE_ENV": JSON.stringify( process.env.NODE_ENV ),
            // 04/30/2022 10:58 am - SSN - Take out
            "process.env.API_URL": JSON.stringify( "https://ps-204-building-applications-with-react-and-redux-api.azurewebsites.net/" )
        } ),

        new HtmlWebpackPlugin( {
            template: "src/index.html",
            favicon: "src/favicon.ico",
            minify: {
                // https://github.com/kangax/html-minifier#options-quick-reference
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        } )
    ],

    module: {
        rules: [ {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ "babel-loader", "eslint-loader" ],
        },
        {
            test: /(\.css)$/,
            use: [
                // Runs from bottom up.
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [ require( 'cssnano' ) ],
                        sourceMap: true
                    }
                }
            ],
        },
        ],
    },

}