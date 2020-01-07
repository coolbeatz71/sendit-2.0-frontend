import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Button, Container, Box, Hidden } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import delivery from '../../../assets/img/undraw_delivery.svg';
import logistic from '../../../assets/img/undraw_logistic.svg';
import moving from '../../../assets/img/undraw_moving.svg';
import { openSignUpModal } from '../../../redux/actions';
import { OPEN_SIGNUP_MODAL } from '../../../redux/action-types';
import { HomeContext } from '../../../contexts/HomeContext';
import Signup from '../Signup/Signup';
import Modal from '../Modal/Modal';
import './Header.scss';

/**
 * Header component
 * @param {object} props
 * @returns {object} JSX
 */
const Header = props => {
  const items = [delivery, logistic, moving];
  const { onModalOpen, open } = props;

  /**
   * open or close the sign in modal form
   * @returns {void}
   */
  const openModal = () => {
    onModalOpen();
  };

  /**
   * display the signup modal page
   * @returns {object} JSX
   */
  const signUpModal = () => {
    return (
      <HomeContext.Consumer>
        {context => (
          <Modal from={OPEN_SIGNUP_MODAL}>
            <Signup context={context} />
          </Modal>
        )}
      </HomeContext.Consumer>
    );
  };

  return (
    <Box mt={10} className="header">
      {open && signUpModal()}
      <Container>
        <Grid container spacing={5}>
          <Hidden smDown>
            <Grid item xs={12} sm={12} md={6} lg={6} className="slides">
              <Carousel autoPlay indicators={false} animation="slide">
                {items.map((item, index) => (
                  <img key={index} className="img-slides" src={item} alt="slides" />
                ))}
              </Carousel>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={6} lg={6} className="legend">
            <h1>Deliver parcels to different destinations</h1>
            <p>
              Need to send a parcel? You can trust us to deliver your parcels and your promises at
              home. We offer a wide range of courier services across Africa, actually we support 4
              countries Nigeria, Rwanda, Uganda and Kenya
            </p>
            <Button
              onClick={openModal}
              color="secondary"
              variant="contained"
              size="large"
              className="button"
            >
              Get started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalOpen: PropTypes.func.isRequired,
};

/**
 * @param {object} state
 * @returns {object} props
 */
export const mapStateToProps = ({ modal }) => ({ open: modal.openSignUp });

/**
 * @param {object} dispatch
 * @returns {method} dispatch
 */
export const mapDispatchToProps = dispatch => ({
  onModalOpen: () => dispatch(openSignUpModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
