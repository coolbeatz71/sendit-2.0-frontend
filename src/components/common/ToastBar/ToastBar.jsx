/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { SnackbarContent, Snackbar, IconButton } from '@material-ui/core';
import { CheckCircle, Error, Info, Warning, Close } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

const variantIcon = {
  success: CheckCircle,
  warning: Warning,
  error: Error,
  info: Info,
};

const useStyles = makeStyles(theme => ({
  success: { backgroundColor: green[600] },
  error: { backgroundColor: theme.palette.error.dark },
  info: { backgroundColor: theme.palette.primary.main },
  warning: { backgroundColor: amber[700] },
  icon: { fontSize: 25, margin: theme.spacing(1) },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(2),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

/**
 * ToastBar component wrapper for the Snackbar
 * @param {object} props
 * @returns {object} JSX
 */
export const ToastBar = props => {
  const classes = useStyles();
  const { message, variant, ...other } = props;
  const Icon = variantIcon[variant];

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  /**
   *
   * @param {Event} event
   * @param {string} reason
   * @returns {void}
   */
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  /**
   * Display the message inside the Snackbar
   *
   * @returns {object} JSX
   */
  const displayMessage = () => {
    return (
      <span id="client-snackbar" className={classes.message}>
        <Icon className={clsx(classes.icon, classes.IconVariant)} />
        {message}
      </span>
    );
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <SnackbarContent
        className={clsx(classes[variant])}
        aria-describedby="client-snackbar"
        message={displayMessage()}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.icon}
            onClick={handleClose}
          >
            <Close />
          </IconButton>,
        ]}
        {...other}
      />
    </Snackbar>
  );
};

ToastBar.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default ToastBar;
