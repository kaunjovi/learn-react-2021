var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {

    mode:'development',

    entry : './src/index.js',

    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },

    module : {

        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
        ]

    },

    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]

}
