function telephoneCheck(str) {
    // Good luck!
    var reg = /\d/;
    var arr = str.split('');
    var newArr = arr.filter(function(val) {
        return val.match(reg);
    });
    var jox = newArr.join('');
    if (jox.length == 10 || (jox.length == 11 && jox[0] == 1)) return true;
    else
        return false;
}



console.log(telephoneCheck("555-555-5555")) //should return a boolean.
console.log(telephoneCheck("1 555-555-5555")) //should return true.
console.log(telephoneCheck("1 (555) 555-5555")) //should return true.
console.log(telephoneCheck("5555555555")) //should return true.
console.log(telephoneCheck("555-555-5555")) //should return true.
console.log(telephoneCheck("(555)555-5555")) //should return true.
console.log(telephoneCheck("1(555)555-5555")) //should return true.
console.log(telephoneCheck("555-5555")) //should return false.
console.log(telephoneCheck("5555555")) //should return false.
console.log(telephoneCheck("1 555)555-5555")) //should return false.
console.log(telephoneCheck("1 555 555 5555")) //should return true.
console.log(telephoneCheck("1 456 789 4444")) //should return true.
console.log(telephoneCheck("123**&!!asdf#")) //should return false.
console.log(telephoneCheck("55555555")) //should return false.
console.log(telephoneCheck("(6505552368)")) //should return false
console.log(telephoneCheck("2 (757) 622-7382")) //should return false.
console.log(telephoneCheck("0 (757) 622-7382")) //should return false.
console.log(telephoneCheck("-1 (757) 622-7382")) //should return false
console.log(telephoneCheck("2 757 622-7382")) //should return false.
console.log(telephoneCheck("10 (757) 622-7382")) //should return false.
console.log(telephoneCheck("27576227382")) //should return false.
console.log(telephoneCheck("(275)76227382")) //should return false.
console.log(telephoneCheck("2(757)6227382")) //should return false.
console.log(telephoneCheck("2(757)622-7382")) //should return false.
console.log(telephoneCheck("555)-555-5555")) //should return false.
console.log(telephoneCheck("(555-555-5555")) //should return false.
console.log(telephoneCheck("(555)5(55?)-5555")) //should return false.