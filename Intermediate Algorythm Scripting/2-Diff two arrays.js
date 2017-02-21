//Funkcija koja vraca simetricnu razliku 2 niza (tj. elemente koji se ne nalaze u oba niza)
function diffTwoArrays(arr1, arr2) {
    var merged = arr1.concat(arr2);

    function check(item) {
        return (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1);
    }
    return merged.filter(check);
}
console.log(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5]));