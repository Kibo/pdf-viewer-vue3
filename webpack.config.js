const webpack = require('webpack');
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => ({
	watch: true,
	mode: env.prod ? "production" : "development",
	devtool: env.prod ? "source-map" : "cheap-module-eval-source-map",

	entry: {
		'pdf-viewer': './src/main.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "./dist"),
		publicPath: "/"
	},
	resolve: {
		alias: {
			vue: "@vue/runtime-dom"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
				exclude: /node_modules/,
        use: "vue-loader"
      },
			{
        test: /\.worker\.js$/,
	      loader: "worker-loader",
				options: {
					filename: '[name].js',
					esModule: false,
				}
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.prod }
          },
          "css-loader"
        ]
      },
      {
        test: /\.stylus$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
});
