function convertToRoman(num) {
    var matrix = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM"
    };
    var digits = num.toString().split('');
    var newArr = [];
    var digitsCount = num.toString().length;
    var counter = 0;
    var exponent = digitsCount - 1;
    while (counter < digitsCount) {
        digits[counter] = (digits[counter] * Math.pow(10, exponent));
        counter++;
        exponent--;
    }
    var romArr = digits.map(function(val) {
        return matrix[val];
    });
    return romArr.join('');
}

console.log(convertToRoman(3336));