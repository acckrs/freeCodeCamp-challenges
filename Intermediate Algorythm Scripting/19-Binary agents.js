/*function binToDec(str2) {
    var arr = str2.split('');
    var newArr = arr.map(function(val, index) {
        if (val == 1) {
            return Math.pow(2, Math.abs(index - 7));
        } else return 0;
    });

    return String.fromCharCode(newArr.reduce(function(a, b) {
        return a + b;
    }))
}*/

function binToDec(str) {
    return String.fromCharCode(parseInt(str, 2));
}


function binaryAgent(str2) {
    var orr = str2.split(" ");
    var newOrr = orr.map(binToDec);
    return console.log(newOrr.join(""));
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");