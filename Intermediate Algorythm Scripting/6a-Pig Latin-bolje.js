
    function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function translatePigLatin(str) {
    var letters=str.split('');

    if (isVowel(letters[0])){
        letters.push('way');
        str=letters.join('');
    }else {
        var indexVow=0;
        for (var i=1;i<letters.length;i++){
            if (isVowel(letters[i])){
                indexVow=i;
                break;
            }
        }
        var firstPart=str.substr(0,indexVow);
        var lastPart=str.substr(indexVow,str.length-indexVow);
        str=lastPart+firstPart+'ay';
    }
    return console.log(str);
}

translatePigLatin("consonant");
translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway"
//letts('glove');