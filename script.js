function convertToRoman(num) {
    const obj = [
        ['M', 1000], 
        ['D', 500], 
        ['C', 100], 
        ['L', 50], 
        ['X', 10], 
        ['V', 5], 
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