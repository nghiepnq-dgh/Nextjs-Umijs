import React from 'react'
import { connect } from 'react-redux'
// import SimpleBackdrop from '../Backdrop'

const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object

export default connect((state) => ({ session: state.session }))((props) => {
	const fetching = props.session.fetching && !isEmpty(props.session.fetching)
	// return <SimpleBackdrop open={fetching} />
	return null;
})
