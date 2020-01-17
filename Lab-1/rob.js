// JavaScript source code

const Person = require("./person.js");

//Rob will inherit the same proerties that Person has 
class Rob extends Person {
    constructor(name, favoriteColor, bgColor) {
        Super(name, favoriteColor, bgColor);
    }

}
module.exports = Rob;