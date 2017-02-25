function myReplace(str, before, after) {
afterA=after.split('');
if (before.charAt(0)==before.charAt(0).toUpperCase()){
    afterA[0]=afterA[0].toUpperCase();
    after=afterA.join('');
}else {
    afterA[0]=afterA[0].toLowerCase();
    after=afterA.join('');
}
  return console.log(str.replace(before,after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john") ;
myReplace("Let us get back to more Coding", "Coding", "algorithms");