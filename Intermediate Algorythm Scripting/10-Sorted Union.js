function uniteUnique(arr) {
    var newArr = Array.from(arguments);
    var conc = [];
    for (var i = 0; i < newArr.length; i++) {
        conc = conc.concat(newArr[i]);
    }
    return console.log([...new Set(conc)]);
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // should return [1, 2, 3, 5, 4, 6, 7, 8].