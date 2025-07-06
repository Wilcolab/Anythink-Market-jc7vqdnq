function toKebabCase(str) {
    // Insert hyphens before capital letters (except at the start), then replace spaces with hyphens, then lowercase
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase & PascalCase
        .replace(/\s+/g, '-')                  // spaces to hyphens
        .toLowerCase();
}

// Test cases
console.log(toKebabCase("Hello World"));           // "hello-world"
console.log(toKebabCase("helloWorld"));            // "hello-world"
console.log(toKebabCase("PascalCaseExample"));     // "pascal-case-example"
console.log(toKebabCase("already-kebab-case"));    // "already-kebab-case"
console.log(toKebabCase("with  multiple   spaces"));// "with--multiple---spaces"