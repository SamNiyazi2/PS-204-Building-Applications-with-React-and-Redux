
// 02/17/2021 08:20 am - SSN - [20210217-0820] - [001] - M03-10 - Webpack core config settings

const webpack = require( 'webpack' );

const path = require( 'path' );

//const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

process.env.NODE_ENV = 'development';



module.exports = {

    mode: 'development',
    target: 'web', //node
    devtool: 'cheap-module-source-map',
    entry: './src/index',
    output: { // Webpack does not output code in developmnet. All in memory
        path: path.resolve( __dirname, 'build' ),
        publicPath: '/',
        filename: 'bundle.js'
    },

    // 02/17/2021 08:26 am - SSN - [20210217-0825] - [001] - M03-11 - Webpack: dev server
    devServer: {
        port: parseInt( process.env.port, 10 ),
        host: 'p3176.nonbs.org',
        open: true,
        stats: 'minimal',
        overlay: true, // Overlays any errors in the browsers
        historyApiFallback: true, // All requests will be sent to index.html. All deep links will be handled by React router.
        disableHostCheck: true,
        headers: {
            "access-control-allow-origin": "*",
            https: false
        }
    },

    plugins: [
        webpack.DefinePlugin( {
            "process.env.API_URL": JSON.stringify( "http://p3177.nonbs.org:3177" )
        } ),
        new HtmlWebpackPlugin( {
            template: "src/index.html",
            favicon: "src/favicon.ico",
        } ),
    ],
    module: {
        rules: [ {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [ "babel-loader", "eslint-loader" ],
        },
        {
            test: /(\.css)$/,
            use: [ "style-loader", "css-loader" ],
        },
        ],
    },

}