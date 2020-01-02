/* eslint-disable react/jsx-props-no-spreading */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ValidatorForm } from 'react-form-validator-core';
import { Button, Grid, Box, Avatar, CircularProgress, Fab } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Container from '@material-ui/core/Container';
import TextInput from '../../common/TextInput/TextInput';
import errorMessage from '../../../helpers';
import './Signin.scss';

const requiredEmail = errorMessage.required('email address');
const invalidEmail = errorMessage.email();
const requiredPassword = errorMessage.required('password');
const invalidPassword = errorMessage.password();

const initialState = {
  email: '',
  password: '',
  isLoading: false,
};

/**
 * load dynamic styles for the component
 * @param {object} theme
 * @returns {object} style
 */
const useStyles = theme => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  btnProgress: {
    zIndex: 1000,
    position: 'absolute',
  },
});

/**
 * signin form component
 * @class Signin
 * @extends {Component}
 */
export class Signin extends Component {
  /**
   * construct the component
   * @param {*} props
   * @returns {object} JSX
   */
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.form = createRef();
  }

  /**
   *
   * @param {Event} event
   * @memberof Signin
   * @returns {void}
   */
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * handle signin submit button
   * @memberof Signin
   * @returns {void}
   */
  handleSubmit = () => {};

  /**
   * render the component
   * @memberof Signin
   * @returns {object} JSX
   */
  render() {
    const { classes } = this.props;
    const { email, password, isLoading } = this.state;

    return (
      <Box className="signin" id="sigin">
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box className="signin-title">
            <Avatar className="avatar">
              <FontAwesomeIcon size="2x" icon={faSignInAlt} />
            </Avatar>
          </Box>
          <Box className={classes.paper}>
            <ValidatorForm
              ref={this.form}
              className={classes.form}
              autoComplete="off"
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextInput
                id="login-email"
                name="email"
                label="Email"
                autoFocus
                required
                onChange={this.onChange}
                value={email}
                validators={['trim', 'required', 'isEmail']}
                errorMessages={[requiredEmail, requiredEmail, invalidEmail]}
              />

              <TextInput
                id="login-password"
                name="password"
                label="Password"
                type="password"
                required
                onChange={this.onChange}
                value={password}
                validators={[
                  'trim',
                  'required',
                  'matchRegexp:^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})',
                ]}
                errorMessages={[requiredPassword, requiredPassword, invalidPassword]}
              />

              <Box marginTop={2}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isLoading}
                  className="button"
                  fullWidth
                >
                  {isLoading && (
                    <CircularProgress thickness={5} className={classes.btnProgress} size={30} />
                  )}
                  Sign in
                </Button>
              </Box>
            </ValidatorForm>
            <Typography component="h5" variant="h5">
              OR
            </Typography>
            <p className="or-signup">signup using</p>
          </Box>
          <Grid className="social-login">
            <Fab className="btn btn-facebook">
              <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            </Fab>
            <Fab className="btn btn-google">
              <FontAwesomeIcon className="social-icon" icon={faGoogle} />
            </Fab>
          </Grid>
        </Container>
      </Box>
    );
  }
}

Signin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Signin);
