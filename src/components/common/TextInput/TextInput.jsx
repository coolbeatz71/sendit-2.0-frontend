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
      name,
      label,
      type,
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
        name={name}
        label={label}
        type={type}
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
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
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
  type: 'text',
  helperText: undefined,
  required: false,
  variant: 'outlined',
  autoFocus: false,
  multiline: false,
  rows: '8',
};

export default TextInput;
