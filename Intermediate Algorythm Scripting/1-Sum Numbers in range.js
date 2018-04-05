/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
*/

function sumAll(arr) {
    var values = [];
    var maxV = Math.max.apply(null, arr);
    var minV = arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
    for (var i = minV; i <= maxV; i++) {
        values.push(i);
    }

    return (values.reduce(function(a, b) {
        return a + b;
    }));
}

console.log(sumAll([12569, 4]));