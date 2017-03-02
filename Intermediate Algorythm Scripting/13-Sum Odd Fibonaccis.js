function sumFibs(num) {
    var fibbs = [1, 1];
    for (var i = 1; fibbs[i] <= num; i++) {
        fibbs.push(fibbs[i] + fibbs[i - 1]);
    }

    fibbs.pop();

    function sumOdds(a, b) {
        if (b % 2 !== 0) return a + b;
        else return a;
    }

    return console.log(fibbs.reduce(sumOdds));
}

sumFibs(21);