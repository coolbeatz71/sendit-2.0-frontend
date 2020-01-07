import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as paths from '../paths';
import Home from '../containers/Home/Home';

/**
 * @description Routes component
 * @param {object} props
 * @returns {void}
 */
export const Routes = ({ isAuth }) => (
  <Router>
    <Switch>
      <Route exact path={paths.HOME_PATH} render={props => <Home {...props} />} />
    </Switch>
  </Router>
);

Routes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

/**
 * Map all routes state to props
 * @param {object} state
 * @returns {object} props
 */
export const mapStateToProps = ({ currentUser: { isAuth } }) => ({ isAuth });

export default connect(mapStateToProps)(Routes);
