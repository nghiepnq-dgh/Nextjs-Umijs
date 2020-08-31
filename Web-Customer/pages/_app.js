import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../src/functions/withReduxStore';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DefaultSeo } from 'next-seo';
import SEO from '../site-config.js';
import NextNProgress from './../src/components/NProgressBar';
import theme from '../src/theme';
import siteConfig from '../site-config';
import ProgressLoading from './../src/components/ProgressLoading';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { register, unregister } from 'next-offline/runtime';
import { appWithTranslation } from '../i18n';
import { SnackbarProvider } from 'notistack';

if (typeof window !== 'undefined') {
	// #region smoothscroll polyfill
	smoothScrollPolyfill.polyfill();
	// forces polyfill (even if browser partially implements it)
	window.__forceSmoothScrollPolyfill__ = true;
	// #endregion
}

const customIconVariantSnackbar = { 
	// default: React.ReactNode, 
	error: <img src='/static/img/snackbar-icon/error.png' style={{ marginRight: 10 }}/>, 
	info: <img src='/static/img/snackbar-icon/info.png' style={{ marginRight: 10 }}/>, 
	success: <img src='/static/img/snackbar-icon/success.png' style={{ marginRight: 10 }}/>, 
	warning: <img src='static/img/snackbar-icon/warning.png' style={{ marginRight: 10 }}/>
}

const customSnackbarStyles = {
    success: { 
		backgroundColor: '#E1FAE7',
		color: '#009C22',
		fontSize: 13,
	},
    error: { backgroundColor: '#FDEEFF', color: '#DB1717' },
    warning: { backgroundColor: '#FFF6D8', color: '#F4B000' },
    info: { backgroundColor: '#E5F7FD',color: '#333333' },
};

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	componentDidMount() {
		register();
	}

	componentWillUnmount() {
		unregister();
	}

	render() {
		const { Component, pageProps, reduxStore, classes } = this.props
		return (
			<Provider store={reduxStore}>
				<SnackbarProvider
					maxSnack={3}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					iconVariant={{ ...customIconVariantSnackbar }}
					classes={{
						variantSuccess: classes.success,
						variantError: classes.error,
						variantWarning: classes.warning,
						variantInfo: classes.info,
					}}
				>
					<Head>
						<title>{siteConfig.title}</title>
					</Head>
					<DefaultSeo {...SEO} />
					<NextNProgress />
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
					<ProgressLoading />
				</SnackbarProvider>

			</Provider>
		)
	}
}

export default withStyles(customSnackbarStyles)(appWithTranslation(withReduxStore(MyApp)))
