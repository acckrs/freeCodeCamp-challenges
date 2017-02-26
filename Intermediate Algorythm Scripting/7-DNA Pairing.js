  function findMyPair(inp) {
    switch (inp) {
        case "A":
            return "T";
        case "T":
            return "A";
        case "C":
            return "G";
        case "G":
            return "C";
        default:
            return "mutant";

    }
}


function pairElements(str){
    var dnaSeq=[];
    var inputDNA=str.split('');
    for (var i=0;i<inputDNA.length;i++){
        dnaSeq.push([inputDNA[i],findMyPair(inputDNA[i])]);
    }
    return dnaSeq;
}

console.log(pairElements("CCGAw"));