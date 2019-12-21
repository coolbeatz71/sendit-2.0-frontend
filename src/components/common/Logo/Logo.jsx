import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

/**
 * logo component
 * @param {object} props
 * @returns {object} JSX
 */
const Logo = ({ scrollToTop }) => {
  return (
    <div className="logo" onClick={scrollToTop} role="button" tabIndex={0} onKeyDown={scrollToTop}>
      <span className="light">SEnd</span>
      <span className="warning">IT</span>
    </div>
  );
};

Logo.propTypes = {
  scrollToTop: PropTypes.func.isRequired,
};

export default Logo;
