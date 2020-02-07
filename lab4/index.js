const pokemon = require("json-pokemon");
const chalk = require('chalk');
const Express = require("express");
const App = Express();
const port = 80;

//PART 1: done from cmd line
    // Installed Express
    // installed json-pokemon
    // installed chalk

// created this index.js


App.get("/id/:id", (req, res) => {
    let result = {"error": "Invalid Input!"};
    pokemon.forEach((value) => {
        if (value.id == req.params.id) {
            result = value;
        }  
    });


    if(result.error) {
        console.log(chalk.red(req.params.id));
      }
    else{console.log(chalk.green(req.path));}

    res.send(result);
});


App.get("/name/:name", (req, res) => {
    let result = {"error": "Invalid Input!"};
    pokemon.forEach((value) => {
        if (value.name == req.params.name) {
            result = value;
        }  
    });

    if(result.error) {
        console.log(chalk.red(req.params.id));
      }
    else{console.log(chalk.green(req.path));
    }

    res.send(result);

});


App.listen(port, () => {
    console.log("Server running!");
});
