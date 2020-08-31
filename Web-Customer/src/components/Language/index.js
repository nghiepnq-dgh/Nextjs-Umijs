import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';
import { Box, RadioGroup, FormControlLabel } from '@material-ui/core';
import { withTranslation, i18n } from '../../../i18n';
import { connect } from 'react-redux';
import { setLanguage } from '../../common/actions/common';
import * as LANGUAGES from '../../../languages';

const useStyles = makeStyles(styles)

function Language({ t, currentLanguage, dispatch }) {
  console.log("=>: Language -> currentLanguage", currentLanguage)
	const classes = useStyles();

	const handleChangeLanguage = (e) => {
		const lang = e.target.value;
		i18n.changeLanguage(lang);
		dispatch(setLanguage(lang))
	}

	return (
		<div className={classes.topHeader}>
			<Box className={classes.largeFooter}>
				{/* <RadioGroup className={classes.textRightTopFooter} defaultValue={currentLanguage} onChange={handleChangeLanguage}>
					{Object.keys(LANGUAGES).map(lang => (
						<FormControlLabel value={LANGUAGES[lang].key} key={LANGUAGES[lang].key}>{LANGUAGES[lang].text}</FormControlLabel>
					))}
				</RadioGroup> */}
				<select className={classes.textRightTopFooter} defaultValue={currentLanguage} onChange={handleChangeLanguage}>
					{Object.keys(LANGUAGES).map(lang => (
						<option value={LANGUAGES[lang].key} key={LANGUAGES[lang].key}>{LANGUAGES[lang].text}</option>
					))}
				</select>
			</Box>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentLanguage: state.common.language
	}
}

export default withTranslation()(connect(mapStateToProps, null)(Language))
