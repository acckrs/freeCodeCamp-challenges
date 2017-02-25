function whatIsInAName(collection, source) {
    // What's in a name?
        var sourceKeys=Object.keys(source);
        function check(item){
            for (var i=0;i<sourceKeys.length;i++){
                if (!item.hasOwnProperty(sourceKeys[i])||item[sourceKeys[i]]!==source[sourceKeys[i]])
                return false;
            }
            return true;
        }
   return console.log(collection.filter(check));
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });