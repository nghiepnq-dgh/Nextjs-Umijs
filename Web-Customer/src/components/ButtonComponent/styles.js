import {
	primaryColor,
	secondaryColor,
	defaultColor,
	lightBlueColor,
	warningColor,
	// successColor,
	infoColor,
	errorColor,
} from '../../theme'
import { unset } from 'lodash'

const buttonStyles = {
	button: {
		height: '40px',
		width: 'auto',
		cursor: 'pointer',
		padding: '11px 25px',
		fontSize: '14px',
		fontWeight: 600,
		transition: '0.5s',
		lineHeight: '16px',
		color: '#fd8e59',
		borderRadius: 'unset'
	},

	//color button - you can choose one of colors
	primary: {
		color: primaryColor,
		backgroundColor: 'tranparent',
		border: `1px solid ${primaryColor}`,
	},
	secondary: {
		color: 'red',
		backgroundColor: 'transparent',
		border: '1px solid red',
		padding:'11px 12px',
		fontWeight: 500
	},
	round: {
		borderRadius: '4px',
	},

	// Simple - If you want to let user hover into them
	simple: {
		'&$primary': {
			'&:hover': {
				color: '#ffffff',
				backgroundColor: primaryColor,
				border: `1px solid ${primaryColor}`,
			},
		},
		'&$secondary': {
			'&:hover': {
				color: 'white',
				backgroundColor: 'red',
				border: 'unset',
			},
		},
	}
}

export default buttonStyles
