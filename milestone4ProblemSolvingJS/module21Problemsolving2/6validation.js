function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Please provide numbers';
    }
    return a * b;
}

console.log(multiply(5, 'seven'));