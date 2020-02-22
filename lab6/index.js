//Lab4: PART 1 - was mostly done from cmd line:
const pokemon = require("json-pokemon");
const chalk = require('chalk');
const Express = require("express");
const App = Express();
const port = 80;

//Lab6: Part 1 - Add the following code before any of the other routes 
const cors = require("cors");
App.use(cors());

// Routes
App.use("/", Express.static("client/build"))

App.get("/id/:id", (req, res) => {

    let result = {"error": "Invalid Input!"}; //*Note: the "Result" is defaulted to a JSON error object....
    pokemon.forEach((value) => {
        if (value.id == req.params.id) {
            result = value;
        }  
    }); 
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
        console.log(chalk.red(req.path));
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
