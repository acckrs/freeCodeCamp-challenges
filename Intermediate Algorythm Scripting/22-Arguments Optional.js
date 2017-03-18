/**
 * Create a function that sums two arguments together. 
 * If only one argument is provided, then return a function that expects one argument and returns the sum.
    For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
    Calling this returned function with a single argument will then return the sum:
    var sumTwoAnd = addTogether(2);
    sumTwoAnd(3) returns 5.
    If either argument isn't a valid number, return undefined.
    Here are some helpful links:
    Closures
    Arguments object
 */
function addTogether() {
    if (arguments.length === 1) {
        var first = arguments[0];
        if (typeof first !== "number") {
            return undefined;
        } else {
            return function(second) {
                if (typeof second === "number") {
                    return first + second;
                } else
                    return undefined;
            };
        }
    } else
    if (typeof arguments[0] === "number" && typeof arguments[1] === "number") {
        return arguments[0] + arguments[1];
    } else return undefined;
}

console.log(addTogether(2, 3)) //should return 5.
console.log(addTogether(2)(7)) //should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")) //should return undefined.
console.log(addTogether(2, "3")) //should return undefined.
console.log(addTogether(2)([3])) //should return undefined.