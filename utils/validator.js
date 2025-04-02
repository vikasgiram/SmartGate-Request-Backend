const validator = require('validator');

const validateRequest = (data) => {
    const errors = {};

    // Validate firstName
    if (!data.firstName || !validator.isLength(data.firstName, { min: 3, max: 20 })) {
        errors.firstName = 'First name is required and must be between 3 and 20 characters.';
    }

    // Validate lastName
    if (!data.lastName || !validator.isLength(data.lastName, { min: 3, max: 20 })) {
        errors.lastName = 'Last name is required and must be between 3 and 20 characters.';
    }

    // Validate email
    if (!data.email || !validator.isEmail(data.email)) {
        errors.email = 'A valid email is required.';
    }

    // Validate organization
    if (!data.organization || !validator.isLength(data.organization, { max: 50 })) {
        errors.organization = 'Organization is required and must be less than 50 characters.';
    }

    // Validate phone
    if (!data.phone || !validator.isLength(data.phone, { min: 10, max: 15 }) || !validator.matches(data.phone, /^\+?[1-9][0-9]{7,14}$/)) {
        errors.phone = 'Phone number is required and must be between 10 and 15 characters, and match the specified format.';
    }

    // Validate message
    if (!data.message || !validator.isLength(data.message, { min: 10, max: 500 })) {
        errors.message = 'Message is required and must be between 10 and 500 characters.';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};

module.exports = validateRequest;