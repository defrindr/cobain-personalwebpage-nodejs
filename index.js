// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

//set engine
app.set('view engine', 'hbs')

// define the first route
app.get("/", function (req, res) {
  res.render("pages/index.hbs");
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));