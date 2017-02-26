function fearNotLetter(str) {
    for (var i=0;i<str.length;i++){
        code=str.charCodeAt(i);
        if (code !== str.charCodeAt(0)+i){
            return console.log(String.fromCharCode(code-1));
        }
    }
        return console.log(undefined);

    //return console.log(newArr);
}

fearNotLetter("abce") // should return "d".
fearNotLetter("abcdefghjklmno") //should return "i".
fearNotLetter("bcd") //should return undefined.
fearNotLetter("yz") //should return undefined.