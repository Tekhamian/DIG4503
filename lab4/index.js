//PART 1 - was mostly done from cmd line:
   
// installed json-pokemon from CMD Line - so it needs to be required
const pokemon = require("json-pokemon");
 // installed chalk from CMD Line - so it needs to be required
const chalk = require('chalk');
 // Installed Express from CMD Line - so it needs to be required
const Express = require("express");
// Name of server = App
const App = Express();
//port = Localhost:80
const port = 80;
// created the index.js file (here) from VS Code


//PART 2 - was Done (here) in VS Code:

// Created route using "id/:id"....
App.get("/id/:id", (req, res) => {

    // Route "id/:id" Should return a JSON object matching the given Pokemon ID  or an error if the ID does not exist
    let result = {"error": "Invalid Input!"}; //*Note: the "Result" is defaulted to a JSON error object....
    pokemon.forEach((value) => {
        if (value.id == req.params.id) {
            result = value;
        }  
    }); // ...This error object will be overwritten by any other results that are generated below

    // Color-code all routes messages:

    // A) Any invalid routes should print to the console in red
    if(result.error) {
        console.log(chalk.red(req.params.id));
      }
    //B) All valid routes should print to the console the path requested in green.
    else{console.log(chalk.green(req.path));}

    // sending the result is required - otherwise nothing will happen
    res.send(result);
});

// Created route using "/name/:name"
App.get("/name/:name", (req, res) => {
    let result = {"error": "Invalid Input!"};//*Note: the "Result" is defaulted to a JSON error object
    pokemon.forEach((value) => {
        if (value.name == req.params.name) {
            result = value;
        }  
    }); // ...This error object will be overwritten by any other results that are generated below


// Color-code all routes messages:

    // A) Any invalid routes should print to the console in red
    if(result.error) {
        console.log(chalk.red(req.params.id));
      }
    //B) All valid routes should print to the console the path requested in green.
    else{console.log(chalk.green(req.path));}

    // sending the result is required - otherwise nothing will happen
    res.send(result);

});

// while listening to port x; send a courtesy message to user in bright yellow text
App.listen(port, () => {
    console.log(chalk.yellowBright("Server is presently running - Please press CTRL C (^C) to stop!"));
});
