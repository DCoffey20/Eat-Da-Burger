let db = require("../models");

module.exports = function (app) {

  // Get existing burgers from database
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
      // console.log(results);
      res.render("index", { burger: results });
    });
  });

  // Add burger
  app.post("/api/burger", function (req, res) {
    db.Burger.create({
      burger_type: req.body.burger_type
    }).then(function (results) {
      res.json({ id: results.id });
      res.status(200).end()
    });
  });

  // Devour burger
  app.put("/api/burger/:id", function (req, res) {
    console.log(req.params.id);
    db.Burger.update({
      devoured: true,
    },{
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.status(200).end();
    });
  });
};