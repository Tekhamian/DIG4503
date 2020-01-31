const Express = require ("express"); //Craete a express server()
const App = Express(); 
const port = 80;

// App.use("/client", Express.static("client/build"));
// App.use("/client2", Express.static("client2/build"));
////Part 1: Craete a route that ("/") that.... 
//Class example goes here (homework Lab3)
// App.use(Express.static("static"));

////Part 2: Create a route ("public") that serves file from the public directory
// App.get("/api", function(req, res) {
//     res.send(“Hello World!”)
// });

// App.listen (port, function () {
// 	Console.log(“Sever is running!”);
// });

//Part 2:
//2A: Create a express server()
App.use("/public", Express.static("public"));

//2B: Craete a route that ("/") that....  
App.get("/", function (req, res) {
res.send("Hello World!");//... sends the string "Hello World"

});

App.listen (port, function () {
	console.log("Sever running!");
}); 