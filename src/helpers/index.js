/**
 * @class ErrorMessage
 */
export class ErrorMessage {
  /**
   * get the error message for required field
   * @param {string} field
   * @returns {string} message
   */
  required = field => `Please, the ${field} cannot be empty`;

  /**
   * get the error message for email field
   * @returns {string} message
   */
  email = () => 'Please, enter a valid email address';

  /**
   * get the error message for alphabetic fields
   * @param {string} field
   * @returns {string} message
   */
  alpha = field => `Please, the ${field} must only contain alphabetic characters`;

  /**
   * get the error message for invalid password
   * @returns {string} message
   */
  password = () => 'Passwords must have at least 6 letters, 1 Uppercase, 1 lowercase and 1 number';

  /**
   * get the error message for unmatching password
   * @returns {string} message
   */
  match = () => 'Please, password and confirmation password do not match';

  /**
   * get the error message for alphanumeric fields
   * @param {string} field
   * @returns {string} message
   */
  alphaNum = field => `Please, the ${field} contain alphanumeric characters`;

  /**
   * get the error message for min string length fields
   * @param {string} field
   * @param {int} min
   * @returns {string} message
   */
  stringLength = (field, min) => `Please, the ${field} must have at least ${min} characters`;
}

const errorMessage = new ErrorMessage();
export default errorMessage;
