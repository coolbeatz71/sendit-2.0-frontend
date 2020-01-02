import React from 'react';
import { PropTypes } from 'prop-types';
import NavBar from '../../components/layout/NavBar/NavBar';
import Header from '../../components/layout/Header/Header';
import About from '../../components/layout/About/About';
import Contact from '../../components/layout/Contact/Contact';
import Footer from '../../components/layout/Footer/Footer';
import './Home.scss';

/**
 * Home page container
 * @param {object} props
 * @returns {object} JSX
 */
export default function Home({ isAuth }) {
  return !isAuth ? (
    <React.Fragment key={0}>
      <NavBar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  ) : (
    'The person suppose to login'
  );
}

Home.defaultProps = {
  isAuth: null,
};

Home.propTypes = {
  isAuth: PropTypes.bool,
};
