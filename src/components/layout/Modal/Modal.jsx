/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import { withStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { IconButton, Dialog, DialogContent, Button } from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { openSignInModal, openSignUpModal, openAddParcelModal } from '../../../redux/actions';
import {
  OPEN_SIGNIN_MODAL,
  OPEN_SIGNUP_MODAL,
  OPEN_ADD_PARCEL_MODAL,
} from '../../../redux/action-types';
import './Modal.scss';

const msgRegister = 'Click here to create an account';
const msgLogin = 'Login if you already have an account';

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

/**
 * load dynamic styles for the component
 * @param {object} theme
 * @returns {object} style
 */
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  closeIcon: {
    color: theme.palette.danger,
  },
});

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <FontAwesomeIcon size="1x" icon={faTimesCircle} className={classes.closeIcon} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

/**
 * Modal component dialogPage
 * @param {object} props
 * @returns {object} JSX
 */
const Modal = props => {
  const {
    children,
    openSignIn,
    openSignUp,
    openAddParcel,
    from,
    onOpenSignInModal,
    onOpenSignUpModal,
    onOpenAddParcelModal,
  } = props;

  /**
   * get open status
   * @returns {void}
   */
  const getOpenStatus = () => {
    switch (from) {
      case OPEN_SIGNIN_MODAL:
        return openSignIn;

      case OPEN_SIGNUP_MODAL:
        return openSignUp;

      case OPEN_ADD_PARCEL_MODAL:
        return openAddParcel;

      default:
        return null;
    }
  };

  /**
   * close the modal page
   * @returns {void}
   */
  const handleClose = () => {
    switch (from) {
      case OPEN_SIGNIN_MODAL:
        onOpenSignInModal();
        break;

      case OPEN_SIGNUP_MODAL:
        onOpenSignUpModal();
        break;

      case OPEN_ADD_PARCEL_MODAL:
        onOpenAddParcelModal();
        break;

      default:
        break;
    }
  };

  /**
   * switch signup and signin modal
   * @returns {void}
   */
  const switchModal = () => {
    switch (from) {
      case OPEN_SIGNIN_MODAL:
        onOpenSignInModal();
        onOpenSignUpModal();
        break;
      case OPEN_SIGNUP_MODAL:
        onOpenSignInModal();
        onOpenSignUpModal();
        break;
      default:
        break;
    }
  };

  /**
   * Set the dialog footer
   * @returns {string} message
   */
  const setFooterMessage = () => {
    switch (from) {
      case OPEN_SIGNIN_MODAL:
        return msgRegister;

      case OPEN_SIGNUP_MODAL:
        return msgLogin;

      default:
        return null;
    }
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
        keepMounted
        open={getOpenStatus()}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" onClose={handleClose} />
        <DialogContent>{children}</DialogContent>
        {setFooterMessage() && (
          <DialogActions className="footer">
            <Button
              className="footer-button"
              onClick={switchModal}
              autoFocus
              color="primary"
              fullWidth
            >
              {setFooterMessage()}
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

Modal.propTypes = {
  from: PropTypes.string.isRequired,
  openSignIn: PropTypes.bool.isRequired,
  openSignUp: PropTypes.bool.isRequired,
  openAddParcel: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  onOpenSignInModal: PropTypes.func.isRequired,
  onOpenSignUpModal: PropTypes.func.isRequired,
  onOpenAddParcelModal: PropTypes.func.isRequired,
};

/**
 * @param {object} state
 * @returns {object} props
 */
export const mapStateToProps = ({ modal }) => ({
  openSignIn: modal.openSignIn,
  openSignUp: modal.openSignUp,
  openAddParcel: modal.openAddParcel,
});

/**
 * @param {object} dispatch
 * @returns {method} dispatch
 */
export const mapDispatchToProps = dispatch => ({
  onOpenSignInModal: () => dispatch(openSignInModal()),
  onOpenSignUpModal: () => dispatch(openSignUpModal()),
  onOpenAddParcelModal: () => dispatch(openAddParcelModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
