/* eslint-disable react/jsx-props-no-spreading */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm } from 'react-form-validator-core';
import { Button, Box, Avatar, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextInput from '../../common/TextInput/TextInput';
import errorMessage from '../../../helpers';
import './Signup.scss';

const requiredEmail = errorMessage.required('email address');
const invalidEmail = errorMessage.email();

const requiredFirstName = errorMessage.required('first name');
const invalidFirstName = errorMessage.alpha('first name');
const minFirstName = errorMessage.stringLength('first name', 3);

const requiredLastName = errorMessage.required('last name');
const invalidLastName = errorMessage.alpha('last name');
const minLastName = errorMessage.stringLength('last name', 3);

const requiredPassword = errorMessage.required('password');
const invalidPassword = errorMessage.password();

const requiredConfPassword = errorMessage.required('confirm password');
const matchPassword = errorMessage.match();

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  confPassword: '',
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
 * signup form component
 * @class Signin
 * @extends {Component}
 */
export class Signup extends Component {
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
   * @returns {void}
   */
  componentWillUnmount() {
    ValidatorForm.removeValidationRule('isPasswordMatch');
  }

  /**
   *
   * @param {Event} event
   * @memberof Signup
   * @returns {void}
   */
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * perform onchange and passwords matching
   *
   * @param {Event} event
   * @memberof Signup
   * @returns {void}
   */
  onConfirmPasswordChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.matchPassword();
  };

  /**
   * perform password match validation
   * @memberof Signup
   * @returns {void}
   */
  matchPassword = () => {
    ValidatorForm.addValidationRule('isPasswordMatch', value => {
      const { password } = this.state;
      return value === password;
    });
  };

  /**
   * handle signup submit button
   * @memberof Signup
   * @returns {void}
   */
  handleSubmit = () => {};

  /**
   * render the component
   * @memberof Signup
   * @returns {object} JSX
   */
  render() {
    const { classes } = this.props;
    const { email, firstName, lastName, password, confPassword, isLoading } = this.state;

    return (
      <Box className="signin" id="sigin">
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box className="signin-title">
            <Avatar className="avatar">
              <FontAwesomeIcon size="2x" className="icons" icon={faUserCircle} />
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
                id="signup-email"
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
                id="firstName"
                name="firstName"
                label="First name"
                autoFocus
                required
                onChange={this.onChange}
                value={firstName}
                validators={[
                  'trim',
                  'required',
                  'minStringLength:3',
                  'matchRegexp:^[a-zA-Z\\-\\s]+$',
                ]}
                errorMessages={[
                  requiredFirstName,
                  requiredFirstName,
                  minFirstName,
                  invalidFirstName,
                ]}
              />

              <TextInput
                id="lastName"
                name="lastName"
                label="Last name"
                autoFocus
                required
                onChange={this.onChange}
                value={lastName}
                validators={[
                  'trim',
                  'required',
                  'minStringLength:3',
                  'matchRegexp:^[a-zA-Z\\-\\s]+$',
                ]}
                errorMessages={[requiredLastName, requiredLastName, minLastName, invalidLastName]}
              />

              <TextInput
                id="signup-password"
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

              <TextInput
                id="conf-password"
                name="confPassword"
                type="password"
                label="Confirm password"
                required
                onChange={this.onConfirmPasswordChange}
                value={confPassword}
                validators={['trim', 'required', 'isPasswordMatch']}
                errorMessages={[requiredConfPassword, requiredConfPassword, matchPassword]}
              />

              <Box marginTop={2}>
                <Button
                  color="secondary"
                  variant="contained"
                  type="submit"
                  disabled={isLoading}
                  className="button"
                  fullWidth
                >
                  {isLoading && (
                    <CircularProgress thickness={5} className={classes.btnProgress} size={30} />
                  )}
                  Sign up
                </Button>
              </Box>
            </ValidatorForm>
          </Box>
        </Container>
      </Box>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Signup);
