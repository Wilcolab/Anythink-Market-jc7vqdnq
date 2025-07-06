/**
 * Converts a given string to camelCase format.
 *
 * The function handles strings with spaces, underscores, hyphens, or camelCase transitions.
 * It trims the input, splits it into words, lowercases the first word, and capitalizes the first letter of subsequent words.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws if the input is undefined, null, not a string, or an empty string after trimming.
 *
 * @example
 * camelCase('first name'); // returns "firstName"
 * camelCase('user_id'); // returns "userId"
 * camelCase('SCREEN_NAME'); // returns "screenName"
 * camelCase('mobile-number'); // returns "mobileNumber"
 */

/**
 * Converts a given string to dot.case format.
 *
 * The function handles strings with spaces, underscores, hyphens, or camelCase transitions.
 * It trims the input, splits it into words, lowercases all words, and joins them with dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 * @throws {Error} Throws if the input is undefined, null, not a string, or an empty string after trimming.
 *
 * @example
 * dotCase('first name'); // returns "first.name"
 * dotCase('user_id'); // returns "user.id"
 * dotCase('SCREEN_NAME'); // returns "screen.name"
 * dotCase('mobile-number'); // returns "mobile.number"
 */
function camelCase(str) {
    if (str === undefined || str === null) {
        throw new Error('Input must not be undefined or null.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error('Input string must not be empty.');
    }
    // Split by spaces, underscores, hyphens, or case transitions
    const words = trimmed
        .replace(/([a-z])([A-Z])/g, '$1 $2') // handle camelCase to words
        .split(/[\s_\-]+/);

    return words
        .map((word, idx) => {
            const lower = word.toLowerCase();
            if (idx === 0) return lower;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(camelCase('first name')); // "firstName"
// console.log(camelCase('user_id')); // "userId"
// console.log(camelCase('SCREEN_NAME')); // "screenName"
// console.log(camelCase('mobile-number')); // "mobileNumber"
function dotCase(str) {
    if (str === undefined || str === null) {
        throw new Error('Input must not be undefined or null.');
    }
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    const trimmed = str.trim();
    if (trimmed.length === 0) {
        throw new Error('Input string must not be empty.');
    }
    // Split by spaces, underscores, hyphens, or case transitions
    const words = trimmed
        .replace(/([a-z])([A-Z])/g, '$1 $2') // handle camelCase to words
        .split(/[\s_\-]+/);

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(dotCase('first name')); // "first.name"
// console.log(dotCase('user_id')); // "user.id"
// console.log(dotCase('SCREEN_NAME')); // "screen.name"
// console.log(dotCase('mobile-number')); // "mobile.number"

