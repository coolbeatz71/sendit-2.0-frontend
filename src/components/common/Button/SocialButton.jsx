import React from 'react';
import PropTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * social button component
 * @param {object} props
 * @returns {object} JSX
 */
const SocialButton = props => {
  const { parentClass, faClass, faIcon, onClick } = props;
  return (
    <Fab className={`btn ${parentClass}`} onClick={onClick}>
      <FontAwesomeIcon className={faClass} icon={faIcon} />
    </Fab>
  );
};

SocialButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  parentClass: PropTypes.string.isRequired,
  faClass: PropTypes.string,
  faIcon: PropTypes.object.isRequired,
};

SocialButton.defaultProps = {
  faClass: 'social-icon',
};

export default SocialButton;
