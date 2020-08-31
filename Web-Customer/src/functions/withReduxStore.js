import React from 'react';
import PropTypes from 'prop-types';
import { initializeStore } from '../store'
// import { defaultState as solutionDefaultState } from './../modules/solutions/reducers';
import { defaultState as commonDefaultState } from '../common/reducers/common';

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
	// Always make a new store if server, otherwise state is shared between requests
	if (isServer) {
		return initializeStore(initialState)
	}

	// Create store if unavailable on the client and set it on the window object
	if (!window[__NEXT_REDUX_STORE__]) {
		window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
	}
	return window[__NEXT_REDUX_STORE__]
}

function initAuthDataFromCookie(cookie) {
	if (!cookie) return null;
	const auth = {};
	try {

		const userInfo = cookie.userInfo;

		if (userInfo) {
			const _userInfo = typeof userInfo === 'string' ? JSON.parse(userInfo) : userInfo
			auth.userInfo = _userInfo;
		}

		const accessToken = cookie.accessToken;

		if (accessToken) {
			const _accessToken = typeof accessToken === 'string' ? JSON.parse(accessToken) : accessToken
			auth.accessToken = _accessToken;
		}


	} catch (err) {
		console.log('Error when Parse cookie Auth', err);
		return null;
	}
	return { auth };
}

function initSolutionDataFromCookie(cookie) {
	if (!cookie) return null;
	const solutions = {
		// searchParams: solutionDefaultState.searchParams,
		// totalSolution: solutionDefaultState.totalSolution,
		// industries: solutionDefaultState.industries,
		// technologies: solutionDefaultState.technologies,
		// solutions: solutionDefaultState.solutions
	}

	try {
		
		const searchParams = cookie.searchParams;

		if (searchParams) {
			const _searchParams = typeof searchParams === 'string' ? JSON.parse(searchParams) : searchParams;
			solutions.searchParams = _searchParams;
		}

		if (cookie.industries) {
			const industries = cookie.industries;
			const _industries = typeof industries === 'string' ? JSON.parse(industries) : industries;
			solutions.industries = _industries;
		}

		if (cookie.technologies) {
			const technologies = cookie.technologies;
			const _technologies = typeof technologies === 'string' ? JSON.parse(technologies) : technologies;
			solutions.technologies = _technologies;
		}		
	} catch (err) {
		console.log('Error when Parse cookie Solution', err);
	}
	return { solutions };
}

function initCommonDataFromCookie(cookie) {
	if (!cookie) return null;
	const common = {
		...commonDefaultState,
		language: cookie.language || 'vi'
	}

	try {
		// 1. Init for setting data
		
		const setting = cookie.setting;

		if (setting) {
			common.setting = JSON.parse(setting)
		}

	} catch (err) {
		console.log('Error when Parse cookie user', err);
	}
	return { common };

}

function initCMSDataFromCookie(cookie) {
	if (!cookie) return null;
	const home = {
		news: [],
		courses: [],
		guides: [],
		events: []
	}

	try {
		if (cookie.latestNews) {
			home.news = JSON.parse(cookie.latestNews)
		}

		if (cookie.latestCourses) {
			home.courses = JSON.parse(cookie.latestCourses)
		}

		if (cookie.latestGuides) {
			home.guides = JSON.parse(cookie.latestGuides)
		}

		if (cookie.latestEvents) {
			home.events = JSON.parse(cookie.latestEvents)
		}
		
	} catch (err) {
		console.log('Error when Parse cookie CMS', err);
	}
	return { home };
}

function initProfileDataFromCookie(cookie) {
	if (!cookie) return null;
	const profile_provider = {
		currentTab: 0,
		_package: []
	}

	try {
		
		if (cookie.currentTab) {
			profile_provider.currentTab = +cookie.currentTab
		}
		if (cookie._package) {
			profile_provider._package = JSON.parse(cookie._package)
		}

	} catch (err) {
		console.log('Error when Parse cookie Profile', err);
	}
	return { profile_provider };

}

export let reduxInstance = null

export default App => {
	class AppWithRedux extends React.Component {
		static async getInitialProps(appContext) {
			// Get or Create the store with `undefined` as initialState
			// This allows you to set a custom default initialState
			const cookie = appContext.ctx.req ? appContext.ctx.req.cookies : {}

			reduxInstance = getOrCreateStore({
				...initAuthDataFromCookie(cookie),
				...initCommonDataFromCookie(cookie),
				...initCMSDataFromCookie(cookie),
				...initSolutionDataFromCookie(cookie),
				...initProfileDataFromCookie(cookie)
			});

			// Provide the store to getInitialProps of pages
			appContext.ctx.store = reduxInstance;

			let appProps = {};
			if (typeof App.getInitialProps === 'function') {
				appProps = await App.getInitialProps(appContext);
			}

			return {
				...appProps,
				initialReduxState: reduxInstance.getState()
			};
		}

		constructor(props) {
			super(props);
			reduxInstance = getOrCreateStore(props.initialReduxState);
		}

		render() {
			return <App {...this.props} reduxStore={reduxInstance} />
		}
	}

	AppWithRedux.propTypes = {
		initialReduxState: PropTypes.object,
	}

	return AppWithRedux;
}
