/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';
import { ValidatorComponent } from 'react-form-validator-core';

/**
 * @class TextInput
 * @extends ValidatorComponent
 */
class TextInput extends ValidatorComponent {
  /**
   * render the component
   * @returns {object} JSX
   */
  render() {
    const {
      variant,
      id,
      label,
      required,
      autoFocus,
      multiline,
      rows,
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      ...rest
    } = this.props;

    const { isValid } = this.state;

    return (
      <TextField
        {...rest}
        fullWidth
        margin="normal"
        variant={variant}
        id={id}
        name={id}
        label={label}
        required={required}
        autoFocus={autoFocus}
        multiline={multiline}
        rows={rows}
        error={!isValid || error}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
      />
    );
  }
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  variant: PropTypes.string,
  autoFocus: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.string,
};

TextInput.defaultProps = {
  ...ValidatorComponent.defaultProps,
  error: false,
  helperText: undefined,
  required: false,
  variant: 'outlined',
  autoFocus: false,
  multiline: false,
  rows: '8',
};

export default TextInput;
