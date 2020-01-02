import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AppBar, Toolbar, Container, Button, Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faInfoCircle, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { openSignInModal } from '../../../redux/actions';
import { OPEN_SIGNIN_MODAL } from '../../../redux/action-types';
import Logo from '../../common/Logo/Logo';
import Signin from '../Signin/Signin';
import Modal from '../Modal/Modal';
import './NavBar.scss';

/**
 * scroll to the top of the page
 * @returns {void}
 */
const scrollToTop = () => {
  scroll.scrollToTop();
};

/**
 * NavBar component
 * @param {object} props
 * @returns {object} JSX
 */
const NavBar = props => {
  const { onModalOpen, open } = props;

  /**
   * open or close the sign in modal form
   * @returns {void}
   */
  const openModal = () => {
    onModalOpen();
  };

  /**
   * display the signin modal page
   * @returns {object} JSX
   */
  const signInModal = () => {
    return (
      <Modal from={OPEN_SIGNIN_MODAL}>
        <Signin />
      </Modal>
    );
  };

  return (
    <AppBar position="fixed" className="navigation">
      {open && signInModal()}
      <Container>
        <Toolbar variant="dense" disableGutters>
          <Logo scrollToTop={scrollToTop} />
          <div className="menu">
            <Button className="nav-button" color="inherit" onClick={openModal}>
              <FontAwesomeIcon className="icons" icon={faSignInAlt} />
              Login
            </Button>
            <Hidden smDown>
              <Link to="about" spy smooth offset={-70} duration={500}>
                <Button className="nav-button" color="inherit">
                  <FontAwesomeIcon className="icons" icon={faInfoCircle} />
                  About
                </Button>
              </Link>
              <Link to="contact" spy smooth offset={-70} duration={500}>
                <Button className="nav-button" color="inherit">
                  <FontAwesomeIcon className="icons" icon={faEnvelopeOpenText} />
                  Contact
                </Button>
              </Link>
            </Hidden>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

NavBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

/**
 * @param {object} state
 * @returns {object} props
 */
export const mapStateToProps = ({ modal }) => ({ open: modal.openSignIn });

/**
 * @param {object} dispatch
 * @returns {method} dispatch
 */
export const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openSignInModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
