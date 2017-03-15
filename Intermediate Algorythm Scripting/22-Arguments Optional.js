function addTogether() {
    return false;
}

addTogether(2, 3) //should return 5.
addTogether(2)(3) //should return 5.
addTogether("http://bit.ly/IqT6zt") //should return undefined.
addTogether(2, "3") //should return undefined.
addTogether(2)([3]) //should return undefined.