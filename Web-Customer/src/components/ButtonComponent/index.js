import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles'

import buttonStyles from './styles'
const makeComponentStyles = makeStyles(() => ({
  ...buttonStyles
}))

const PrimaryButton = React.forwardRef((props, ref) => {
  const { color = 'default', simple, round, block, shape, children, ...rest } = props
  const classes = makeComponentStyles()
  const className = classNames({
    [classes.button]: true,
    [classes.round]:round,
    [classes.simple]:simple,
    [classes[block]]:block,
    [classes[color]]:color,
    [classes[shape]]: shape
	})

  return (
    <Button {...rest} ref={ref} classes={{ root: className }}>
      {children}
    </Button>
  )
})

PrimaryButton.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'default',
    'error',
    'warning',
    'info',
    'normal',
		'inherit',
		'default-secondary',
  ]),
  block: PropTypes.oneOf([
    'large',
    'medium',
    'small'
  ]),
  round: PropTypes.bool,
  simple: PropTypes.bool,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    'subscribe',
    'narrow',
    'wide'
  ])
}

export default PrimaryButton
