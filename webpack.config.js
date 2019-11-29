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
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
    },
		react: {
			commonjs: 'leaflet-geosearch',
			commonjs2: 'leaflet-geosearch',
			root: 'ReactGeosearch'
		}
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
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
	}
};