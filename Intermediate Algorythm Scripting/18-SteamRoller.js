/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.
Here are some helpful links:
    Array.isArray() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray 
*/

function steamrollArray(arr) {
    var newArr = [];

    function check(val2) {
        if (!Array.isArray(val2)) {
            return newArr.push(val2);
        } else
            return val2.map(check);
    }

    arr.map(check);
    return newArr;
}

console.log(steamrollArray([1, {},
    [3, [
        [4]
    ]]
]));

console.log(steamrollArray([
        [
            ["a"]
        ],
        [
            ["b"]
        ]
    ])) //should return ["a", "b"].
console.log(steamrollArray([1, [2],
        [3, [
            [4]
        ]]
    ])) //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [],
        [3, [
            [4]
        ]]
    ])) //should return [1, 3, 4].
console.log(steamrollArray([1, {},
        [3, [
            [4]
        ]]
    ])) //should return [1, {}, 3, 4].