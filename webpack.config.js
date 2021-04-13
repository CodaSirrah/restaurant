const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        
    },
    module: {
        rules: [
            {
                test: /\.(png|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "assets/images/",
                            publicPath: "assets/images/"
                        }
                    }
                ]
            }
        ]
    }
};


  
  