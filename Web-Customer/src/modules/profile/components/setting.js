import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid } from '@material-ui/core';

const Setting = props => {
  return (
    <>
      <form noValidate autoComplete="off">
				<Grid container spacing={4}>
					<Grid item xl={7}>
						<TextField 
							id="outlined-basic" 
							fullWidth label="Current password" 
              variant="outlined"
              type='password'
							InputProps={{
								startAdornment: <InputAdornment position="start"> <LockOutlinedIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
					<Grid item xl={7}>
						<TextField 
							id="outlined-basic" 
							fullWidth 
							label="New password" 
              variant="outlined"
              type='password'
							InputProps={{
								startAdornment: <InputAdornment position="start"> <LockOutlinedIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
					<Grid item xl={7}>
						<TextField 
							id="outlined-basic" 
							fullWidth 
							label="Confirm new password" 
              variant="outlined"
              type='password'
							InputProps={{
								startAdornment: <InputAdornment position="start"> <LockOutlinedIcon /> </InputAdornment>,
							}}
						/>
					</Grid>
					
				</Grid>
			</form>
    </>
  )
}

export default Setting;