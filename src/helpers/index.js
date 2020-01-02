/**
 * @class ErrorMessage
 */
export class ErrorMessage {
  /**
   * get the error message for required field
   * @param {string} field
   * @returns {string} message
   */
  required = field => {
    return `Please, the ${field} cannot be empty`;
  };

  /**
   * get the error message for email field
   * @returns {string} message
   */
  email = () => {
    return 'Please, enter a valid email address';
  };

  /**
   * get the error message for alphabetic fields
   * @param {string} field
   * @returns {string} message
   */
  alpha = field => {
    return `Please, the ${field} contain alphabetic characters`;
  };

  /**
   * get the error message for alphanumeric fields
   * @param {string} field
   * @returns {string} message
   */
  alphaNum = field => {
    return `Please, the ${field} contain alphanumeric characters`;
  };

  /**
   * get the error message for min string length fields
   * @param {string} field
   * @param {int} min
   * @returns {string} message
   */
  stringLength = (field, min) => {
    return `Please, the ${field} must contain minimum of ${min} characters`;
  };
}

const errorMessage = new ErrorMessage();
export default errorMessage;
