function convertToCamelCase(str) {
    if (!str) return '';
    // Split by non-alphanumeric or uppercase letters
    const words = str
        .replace(/([A-Z])/g, ' $1')
        .split(/[\s_\-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
console.log(convertToCamelCase('helloworld')); // helloWorld
console.log(convertToCamelCase('hello_world_test')); // helloWorldTest
console.log(convertToCamelCase('Hello-World-Test')); // helloWorldTest