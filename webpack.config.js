/* eslint-disable */
module.exports = {
	entry: './src/index.js',
	output: {
		library: {
			root: 'ReactLeafletGeosearch',
			amd: 'react-leaflet-geosearch',
			commonjs: 'react-leaflet-geosearch'
		},
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	externals: {
		debug: 'debug',
		
	},
	mode: 'production',
	module: {
		rules: [
            {
                test: /\.(js|jsx)$/,
				use: {
					loader: "babel-loader",
					options: {
					  presets: ["@babel/preset-env"]
					}
				  },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
	}
};