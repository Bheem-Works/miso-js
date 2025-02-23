export function sun(a,b) {
    return a+b;
}

export let vim = "Vim is so Much sexy";

// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

export { add, subtract };  // Named export

export default function multiply(a, b) {  // Default export
    return a * b;
}

