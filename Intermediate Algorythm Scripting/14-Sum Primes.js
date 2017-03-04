function sumPrimes(num) {
    var primes = [];
    var init = [];
    for (var k = 1; k <= num; k++) {
        init.push(k);
    }

    for (var i = num - 1; i > 1; i--) {
            var prime = true;
        for (var j = 1; j < i; j++) {
            if (init[i] % init[j] === 0) {
                prime=false;
            };
        }
        if (prime) primes.push(init[i]);
    }
    
    primes.push(2);

    return console.log(primes.reduce(function(a,b){
        return a+b;
    }));
}

sumPrimes(10) //should return a number.
//sumPrimes(10) //should return 17.
//sumPrimes(977) //should return 73156.