
    function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

function translatePigLatin(str) {

    var letters = str.split('');
    if (isVowel(str.charAt(0))) {
        letters.push('way');
    } else 
    {if (isVowel(str.charAt(1))){
          var first=letters.shift();
          letters.push(first);    
          letters.push('ay');
    }else {
      var two=str.slice(0,2);
      letters.shift();letters.shift();
      letters.push(two);
      letters.push('ay');
    }
    }
    return console.log(letters.join(''));
}

translatePigLatin("consonant");
translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway"
