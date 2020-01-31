const Express = require ("express"); //Craete a express server()
const App = Express(); //Label the sever App
const port = 80;


//Part 1: All of initial requirements were done outside of the internal code...
//1. Created new directory called "lab3" 
//2. Added express to the project via - nmp install express
//3. Added a new directory named called public
//4. added an HTML file named - index.html - To the public dir with a block of premade code


//Part 2: content of indesx.js

//following 2 lines of code = For future implimentation
// App.use("/client", Express.static("client/build"));
// App.use("/client2", Express.static("client2/build"));

//2A: is on line 1 above

//2C: Create a route named public that serves files from the public directory 
App.use("/public", Express.static("public"));

//2B: Craete a route that ("/") that....  
App.get("/", function (req, res) {

//... sends the string "Hello World"
res.send("Hello World!"); 
});

//listening for requests - if any requests are sent then "server" message is shown
App.listen (port, function () {
	console.log("Sever running!");
}); 