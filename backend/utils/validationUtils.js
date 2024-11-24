/**
 * Utility function to validate a phone number.
 * Ensures the phone number matches the required format for M-Pesa payments.
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} - Returns true if the phone number is valid, false otherwise.
 */
const validatePhoneNumber = (phoneNumber) => {
    // Remove any spaces or special characters
    const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
  
    // M-Pesa phone numbers in Kenya usually start with '254' or '07' and are 9-12 digits long
    const isValid = /^254[7][0-9]{8}$|^07[0-9]{8}$/.test(cleanedNumber);
  
    return isValid;
  };
  
  module.exports = {
    validatePhoneNumber,
  };
  