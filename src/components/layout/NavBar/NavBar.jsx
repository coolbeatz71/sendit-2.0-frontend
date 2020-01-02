import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { AppBar, Toolbar, Container, Button, Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faInfoCircle, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../common/Logo/Logo';
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
 * @returns {object} JSX
 */
const NavBar = () => {
  return (
    <AppBar position="fixed" className="navigation">
      <Container>
        <Toolbar variant="dense">
          <Logo scrollToTop={scrollToTop} />
          <div className="menu">
            <Button className="nav-button" color="inherit">
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

export default NavBar;
