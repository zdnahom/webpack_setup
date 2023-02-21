const path=require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:{
        index:'./src/index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Output Management',
            template:path.resolve(__dirname,'src','about.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        clean:true,
    },
}