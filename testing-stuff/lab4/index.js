//PART 1
// created this index.js
// Installed Express
// installed json-pokemon
// installed chalk

const Express = require("express");
const pokemon = require('json-pokemon');
const chalk = require("chalk");
const App = Express();
const port = 80;

const Avatar = require("./Avatar.js");
// Variable Notes 
    // Person = Avatar
    // pokemon = faker
    // name = name

let name = [];

for(let i = 0; i < 99; i++)
{
    let id = pokemon.id.findId();
    let color = pokemon.commerce.color();
    name.push(new Avatar(id, color));
}

App.get("/name/id/:id", (req, res) => {
    name.forEach((value)=> {
        if(value.id == req.params.id) {
            res.send(value);
        }
    });

    res.send("Invalid!");

});

App.get("/name/color/:color", (req, res) => {
    name.forEach((value)=> {
        if(value.color == req.params.color) {
            res.send(value);
        }
    });

    res.send("Invalid!");

});

App.listen(port, () => {
    console.log("Server running!");
});
