const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

const path = require('path')
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const optimizedImages = require('next-optimized-images')
// const withOffline = require('next-offline')
// const withPWA = require('next-pwa')

const nextConfig = {  
	target: 'server',
	webpack (config) {
		config.module.rules.push(
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
						publicPath: '/_next/static/',
						outputPath: 'static/',
						name: '[name].[ext]',
					},
				},
			},	
		)
		config.plugins.push(new webpack.EnvironmentPlugin(process.env))
		config.resolve.alias['react'] = path.join(__dirname, 'node_modules/react')
		return config
	}
}


const cssConfigs = {
	cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   localIdentName: "[local]___[hash:base64:5]",
  // }
}

module.exports = withPlugins([
	[withCSS, cssConfigs],
	[optimizedImages, {}]
], nextConfig)
