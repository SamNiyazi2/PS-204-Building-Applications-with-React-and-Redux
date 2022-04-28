
// 02/17/2021 08:20 am - SSN - [20210217-0820] - [001] - M03-10 - Webpack core config settings

const webpack = require( 'webpack' );

const path = require( 'path' );

//const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

process.env.NODE_ENV = 'development';



// 04/28/2022 10:30 am - SSN 
// https://webpack.js.org/plugins/eslint-webpack-plugin/
const ESLintPlugin_Webpack = require( 'eslint-webpack-plugin' );
const options_ESLintPlugin = {

};



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



        historyApiFallback: true, // All requests will be sent to index.html. All deep links will be handled by React router.

        // 04/28/2022 09:07 am - SSN - Delted package-lock.json
        // stats: 'minimal',
        // overlay: true, // Overlays any errors in the browsers
        // disableHostCheck: true,
        allowedHosts: "p3176.nonbs.org",
        headers: {
            "access-control-allow-origin": "*",
            https: false
        }
    },

    plugins: [
        new webpack.DefinePlugin( {
            "process.env.API_URL": JSON.stringify( "http://p3177.nonbs.org:3177" )
        } ),
        new HtmlWebpackPlugin( {
            template: "src/index.html",
            favicon: "src/favicon.ico",
        } ),

        // 04/28/2022 10:32 am - SSN 
        // https://webpack.js.org/plugins/eslint-webpack-plugin/
        new ESLintPlugin_Webpack( options_ESLintPlugin ),


    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    // 04/28/2022 11:46 am - SSN
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ]
                    }
                }


                // 04/28/2022 10:18 am - SSN 
                // use: [ "babel-loader", "eslint-loader" ],

                // use: [ "babel-loader", "eslint-webpack-plugin" ],
                // Error:
                // Module build failed (from ./node_modules/eslint-webpack-plugin/dist/cjs.js):
                // TypeError: Class constructor ESLintWebpackPlugin cannot be invoked without 'new'

                // Ref: https://webpack.js.org/plugins/eslint-webpack-plugin/


            },
            {
                test: /(\.css)$/,
                use: [ "style-loader", "css-loader" ],
            },
        ],
    },

}