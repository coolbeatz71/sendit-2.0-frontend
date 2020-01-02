/* eslint-disable react/jsx-props-no-spreading */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { ValidatorForm } from 'react-form-validator-core';
import { Button, Box, Avatar, CircularProgress } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextInput from '../../common/TextInput/TextInput';
import ToastBar from '../../common/ToastBar/ToastBar';
import errorMessage from '../../../helpers';
import './Contact.scss';

const requiredEmail = errorMessage.required('email address');
const requiredFullName = errorMessage.required('full name');
const requiredSubject = errorMessage.required('subject');
const requiredMessage = errorMessage.required('message');
const invalidFullName = errorMessage.alpha('full name');
const invalidSubject = errorMessage.alphaNum('subject');
const invalidMessage = errorMessage.stringLength('subject', 200);
const invalidEmail = errorMessage.email();

const initialState = {
  email: '',
  fullName: '',
  subject: '',
  message: '',
  emailError: false,
  isLoading: false,
  open: false,
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
 * contact form component
 * @class Contact
 * @extends {Component}
 */
export class Contact extends Component {
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
   * @memberof Contact
   * @returns {void}
   */
  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * handle contact-us submit button
   * @memberof Contact
   * @returns {void}
   */
  handleSubmit = () => {
    const templateId = 'template_7ZSzk2uA';
    const { email, fullName, subject, message } = this.state;
    this.sendEmail(templateId, { email, fullName, subject, message });
  };

  /**
   * send contact email
   *
   * @param {string} templateId
   * @param {object} content
   * @memberof Contact
   * @returns {void}
   */
  sendEmail = (templateId, content) => {
    this.setState({ isLoading: true, open: false });
    window.emailjs
      .send('gmail', templateId, content)
      .then(() => {
        this.setState({ ...initialState, open: true, emailError: false });
        this.form.current.resetValidations();
      })
      .catch(() => {
        this.setState({ ...initialState, open: true, emailError: true });
        this.form.current.resetValidations();
      });
  };

  /**
   * render the component
   * @memberof Contact
   * @returns {object} JSX
   */
  render() {
    const { classes } = this.props;
    const { email, fullName, subject, message, isLoading, emailError, open } = this.state;

    const toastProps = emailError
      ? { message: 'Sorry, we failed sending the email', variant: 'error' }
      : {
          message: 'Email successfully sent, we usually respond as soon as possible',
          variant: 'success',
        };

    return (
      <Box className="contact" id="contact">
        {open && <ToastBar {...toastProps} />}
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <Box className="contact-title">
            <Avatar className="avatar">
              <FontAwesomeIcon size="2x" className="icons" icon={faEnvelopeOpenText} />
            </Avatar>
            <Typography component="h1" variant="h4">
              Contact us
            </Typography>
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
                id="email"
                label="Email"
                autoFocus
                required
                onChange={this.onChange}
                value={email}
                validators={['trim', 'required', 'isEmail']}
                errorMessages={[requiredEmail, requiredEmail, invalidEmail]}
              />
              <TextInput
                id="fullName"
                label="Full name"
                required
                onChange={this.onChange}
                value={fullName}
                validators={['trim', 'required', 'matchRegexp:^[a-zA-Z\\-\\_\\s]+$']}
                errorMessages={[requiredFullName, requiredFullName, invalidFullName]}
              />
              <TextInput
                id="subject"
                label="Subject"
                required
                onChange={this.onChange}
                value={subject}
                validators={['trim', 'required', 'matchRegexp:^[a-zA-Z0-9\\-\\_\\s]+$']}
                errorMessages={[requiredSubject, requiredSubject, invalidSubject]}
              />
              <TextInput
                id="message"
                label="Message"
                required
                multiline
                onChange={this.onChange}
                value={message}
                validators={['trim', 'required', 'minStringLength:200']}
                errorMessages={[requiredMessage, requiredMessage, invalidMessage]}
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
                  send message
                </Button>
              </Box>
            </ValidatorForm>
          </Box>
        </Container>
      </Box>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Contact);
