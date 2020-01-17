// JavaScript source code

const chalk = require("chalk");

class Person {
    constructor(name, favoriteColors, backgroundColors) {
        this.name = name;
        this.favoriteColors = favoriteColors;
        this.backgroundColors = backgroundColors;

        if (typeof this.name != "string") {
            console.log("name is not a string!")
        }

        if (typeof this.backgroundColors != "string") {
            console.log("backgroundColor is not a string!")
        }

    }
    speak() {
        for (let i = 0; i < this.favoriteColors.length; i++) {
            console.log(chalk.bghex);
        }
        console.log(chalk.bgcolor(this.backgroundColors).keyword(this.favoriteColors).bold(this.name))
    }
}
module.exports = Person;
