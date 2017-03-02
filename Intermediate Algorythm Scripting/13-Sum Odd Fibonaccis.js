function sumFibs(num) {
    var fibbs = [1, 1];
    for (var i = 1; fibbs[i] <= num; i++) {
        fibbs.push(fibbs[i] + fibbs[i - 1]);
    }
    fibbs.pop();
    var newAr = fibbs.filter(function (val) {
        return val % 2 !== 0;
    });
    return console.log(newAr.reduce(function (a, b) {
        return a + b;
    }));
}

sumFibs(21);