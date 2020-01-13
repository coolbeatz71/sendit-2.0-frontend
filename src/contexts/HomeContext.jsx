import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const HomeContext = createContext();

/**
 * context for the homepage
 * @param {object} props
 * @returns {object} JSX
 */
const HomeContextProvider = props => {
  const { children } = props;

  return <HomeContext.Provider value={{ ...props }}>{children}</HomeContext.Provider>;
};

HomeContextProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default HomeContextProvider;
