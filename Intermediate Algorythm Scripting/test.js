function fac(n) {
    if (n == 1) return 1;
    else {
        return n * fac(n - 1);
        n--;
    }
}
var test = [
    [3, 4, 5]
];
var bb = test.push([3, 4]);
console.log(bb);
//console.log(fac('5'));