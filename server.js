let express = require("express");
let exphbs = require("express-handlebars");
let db = require("./models");

// Sets up the Express App
// =============================================================
let app = express();
let PORT = process.env.PORT || 8000;

//set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
      console.log("Server listening on: http://localhost:" + PORT);
  });
});