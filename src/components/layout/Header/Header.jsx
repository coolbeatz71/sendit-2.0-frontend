import React from 'react';
import { Grid, Button, Container, Box, Hidden } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import delivery from '../../../assets/img/undraw_delivery.svg';
import logistic from '../../../assets/img/undraw_logistic.svg';
import moving from '../../../assets/img/undraw_moving.svg';
import './Header.scss';

/**
 * Header component
 * @returns {object} JSX
 */
const Header = () => {
  const items = [delivery, logistic, moving];
  return (
    <Box mt={10} className="header">
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
            <Button color="secondary" variant="contained" size="large" className="button">
              Get started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Header;
