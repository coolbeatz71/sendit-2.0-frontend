import React from 'react';
import { Box, Grid, Container, Avatar, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Cards from './Card';
import './About.scss';
import secure from '../../../assets/img/undraw_safe.svg';
import quick from '../../../assets/img/undraw_quick.svg';
import assistant from '../../../assets/img/undraw_assistant.svg';

const cardInfos = [
  {
    img: quick,
    title: 'Quick delivery',
    text:
      'Simply fill in a few transaction details! Our system will select the best options for price and time, from thousands available - within a few seconds.',
  },
  {
    img: secure,
    title: 'High security',
    text:
      'Our clients safety during the ordering process is of primary importance to us. We scrupulously take care of parcels on their way to delivery addresses.',
  },
  {
    img: assistant,
    title: '24/7 assistance',
    text:
      'Our Customer service is ready to respond to any questions or comments you may have. We have agents available and they can assist you 24hours',
  },
];

/**
 * About us component
 * @returns {object} JSX
 */
const About = () => {
  return (
    <Box className="about" id="about">
      <Container>
        <Box className="about-title">
          <Avatar className="avatar">
            <FontAwesomeIcon size="2x" className="icons" icon={faInfoCircle} />
          </Avatar>
          <Typography component="h1" variant="h4">
            About us
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {cardInfos.map((item, index) => (
            <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
              <Cards img={item.img} title={item.title} text={item.text} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
