
// 04/29/2022 11:04 am - SSN 

const { merge } = require( 'webpack-merge' );

const config_prod = require( './webpack.config.prod' );




// Keys matching to the right take precedence:
const output = merge(
    { fruit: "apple", color: "red" },
    { fruit: "strawberries" }
);
console.log( output );
// { color: "red", fruit: "strawberries"}