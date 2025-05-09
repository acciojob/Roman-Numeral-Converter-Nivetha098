function convertToRoman(num) {
   const obj = [
    ['M', 1000], 
    ['CM', 900], 
    ['D', 500], 
    ['CD', 400],
    ['C', 100], 
    ['L', 50], 
    ['XL', 40], // Correctly added for 40
    ['X', 10], 
    ['IX', 9],
    ['V', 5], 
    ['IV', 4],
    ['I', 1]
];
    let result = '';

    // Loop through each symbol/value pair
    for (let i = 0; i < obj.length; i++) {
        const [symbol, value] = obj[i];

        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol
            num -= value; // Reduce the number
        }
    }

    return result; // Return the final Roman numeral
}

// Test your code
console.log(convertToRoman(36)); // Output: XXXVI
console.log(convertToRoman(4)); // Output: IV
console.log(convertToRoman(9)); // Output: IX
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII