import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardContent, Box } from '@material-ui/core';

/**
 * Card component
 * @returns {object} JSX
 */
const Cards = ({ img, title, text }) => {
  return (
    <Card className="info">
      <Box className="card-info">
        <img className="img-card" src={img} alt="about us card" />
      </Box>
      <h1 className="title">{title}</h1>
      <CardContent className="text">{text}</CardContent>
    </Card>
  );
};

Cards.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Cards;
