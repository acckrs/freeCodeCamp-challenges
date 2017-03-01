var maps = {
  "&": "&​amp;",
  "<": "&​lt;",
  ">": "&​gt;",
  "'": "&​apos;",
  
};
var str = "Dolce '&\"<> Gabanna";
var newStr=str.replace(/'|&|<|>/g,function(match){
  return maps[match];
}).replace(/\"/g,"&quot;");
console.log(newStr);