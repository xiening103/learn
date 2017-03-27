var path=require('path');
var webpack=require('webpack');

module.exports={
	entry:[
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/js/index.js'
	],
	output:{
		path:path.join(__dirname,'build'),
		filename:'js/bundle.js',
		publicPath:'/'
	},
	//context:path.join(__dirname,'src'),


	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				loaders:['babel-loader'],
				include:path.join(__dirname,'src')
			},
			{
				test:/\.scss$/,
				loaders:["style-loader","css-loader","sass-loader"]
			},
			{   test: /\.css$/,
				loaders: ["style-loader","css-loader"]
			},
			{
				test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=512&&name=image/[name].[ext]?[hash]'
			}
			//{
			//	test: /\.(p)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			//	loader: 'url-loader?limit=512&&name=image/thumimg/[name].[ext]?[hash]'
			//}

		]
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	devServer:{
		hot:true,
		//contentBase:path.join(__dirname,'build'),
		historyApiFallback: true,
		publicPath:'/'
	},
	devtool:'inline-source-map'
};