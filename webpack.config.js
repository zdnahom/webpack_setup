const path=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        index:'./src/index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management',
            template:path.resolve(__dirname,'src','about.html')
        })
    ],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}