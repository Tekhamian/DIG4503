const Express = require ("express"); //Craete a express server()
const App = Express(); 
const port = 80;

// App.use("/client", Express.static("client/build"));
// App.use("/client2", Express.static("client2/build"));

// App.get("/api", function(req, res) {
//     res.send(“Hello World!”)
// });

// App.listen (port, function () {
// 	Console.log(“Sever is running!”);
// });


App.use("/public", Express.static("public"));
App.get("/", function (req, res) {
res.send("Hello World!");
});
App.listen (port, function () {
	console.log("Sever running!");
}); 