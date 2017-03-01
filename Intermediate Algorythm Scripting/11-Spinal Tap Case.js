
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
var res=str.slice(0,1).toLowerCase();
str=str.slice(1,str.length).replace(/[A-Z]/g,function(match){
    return '-'+match.toLowerCase();
}).replace(/\ /g,"-").replace(/--|_-/g,"-");
  return console.log(res+str);
}

spinalCase("This Is Spinal Tap")// should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") ///should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") //should return "all-the-small-things"