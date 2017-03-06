function smallestCommons(arr) {
    var range = [];
    for (var i=arr[0];i<=arr[1];i++){
        range.push(i);
    }

    function small(a, b) {
        var i = 1,
            j = 1
        while (a * i !== b * j) {
            if (a * i < b * j) i++;
            else {
                j++;
            }
        }
        return a*i;
    }

    return console.log(range);
}


smallestCommons([1, 5]);
/*
smallestCommons([1, 5]) //should return a number.
smallestCommons([1, 5]) //should return 60.
smallestCommons([5, 1]) //should return 60.
smallestCommons([1, 13]) //should return 360360.
smallestCommons([23, 18]) //should return 6056820.
*/