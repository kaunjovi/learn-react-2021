var path = require('path');

var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {

    mode:'development',

    plugins : [

        new HtmlWebpackPlugin ({

            template : 'app/index.html'

        })

    ]

}
