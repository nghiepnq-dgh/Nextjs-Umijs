import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, withWidth, Grid } from '@material-ui/core';
import styles from './styles';
import { withTranslation } from '../../../../i18n';
import { Field, Form, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles(theme => ({
	...styles,
	avatarLarge: {
		width: theme.spacing(8),
		height: theme.spacing(8),
	},
	blockAvatarAndName: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
		position: 'absolute',
		height: '100%',
		width: '100%',
	},
}));

const GeneralInfo = props => {
  const classes = useStyles();

  return (
    <>
      <form  noValidate autoComplete="off">
				<Grid container spacing={4}>
					<Grid item xl={12}>
						<TextField 
							id="outlined-basic" 
							fullWidth label="Customer name" 
							variant="outlined"
							InputProps={{
								startAdornment: <InputAdornment position="start"> <PermIdentityIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
					<Grid item xl={6}>
						<TextField 
							id="outlined-basic" 
							fullWidth 
							label="Phone number" 
							variant="outlined"
							InputProps={{
								startAdornment: <InputAdornment position="start"> <PhoneAndroidIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
					<Grid item xl={6}>
						<TextField 
							id="outlined-basic" 
							fullWidth 
							label="Email" 
							variant="outlined"
							InputProps={{
								startAdornment: <InputAdornment position="start"> <MailOutlineIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
					<Grid item xl={12}>
						<TextField 
							id="outlined-basic" 
							fullWidth 
							label="Address" 
							variant="outlined"
							InputProps={{
								startAdornment: <InputAdornment position="start"> <HomeOutlinedIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
				</Grid>
			</form>
    </>
  )
}


export default withTranslation(['provider'])(GeneralInfo);