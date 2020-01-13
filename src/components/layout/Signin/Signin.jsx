import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ValidatorForm } from 'react-form-validator-core';
import { Button, Grid, Box, Avatar, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Container from '@material-ui/core/Container';
import TextInput from '../../common/TextInput/TextInput';
import SocialButton from '../../common/Button/SocialButton';
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
      <Box className="signin" id="signin">
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box className="signin-title">
            <Avatar className="success-avatar">
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
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              callback={response => this.responseSocialLogin({ response, provider: 'facebook' })}
              render={renderProps => (
                <SocialButton
                  parentClass="btn-facebook"
                  faIcon={faFacebook}
                  onClick={renderProps.onClick}
                />
              )}
            />
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_APP_ID}
              render={renderProps => (
                <SocialButton
                  parentClass="btn-google"
                  faIcon={faGoogle}
                  onClick={renderProps.onClick}
                />
              )}
              onSuccess={response => this.responseSocialLogin({ response, provider: 'google' })}
              onFailure={response => this.responseSocialLogin({ response, provider: 'google' })}
              cookiePolicy="single_host_origin"
            />
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
