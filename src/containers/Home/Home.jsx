import React from 'react';
import { PropTypes } from 'prop-types';
import NavBar from '../../components/layout/NavBar/NavBar';
import Header from '../../components/layout/Header/Header';
import About from '../../components/layout/About/About';
import Contact from '../../components/layout/Contact/Contact';
import Footer from '../../components/layout/Footer/Footer';
import HomeContextProvider from '../../contexts/HomeContext';
import './Home.scss';

/**
 * Home page container
 * @param {object} props
 * @returns {object} JSX
 */
const Home = props => {
  const { isAuth } = props;
  return !isAuth ? (
    <HomeContextProvider {...props}>
      <React.Fragment key={0}>
        <NavBar />
        <Header />
        <About />
        <Contact />
        <Footer />
      </React.Fragment>
    </HomeContextProvider>
  ) : (
    'The person suppose to login'
  );
};

Home.defaultProps = {
  isAuth: null,
};

Home.propTypes = {
  isAuth: PropTypes.bool,
};

export default Home;
