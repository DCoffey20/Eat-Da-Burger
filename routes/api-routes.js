let db = require("../models");

module.exports = function (app) {

  // Get existing burgers from database
  app.get("/", function (req, res) {
    db.Burger.findAll({}).then(function (results) {
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
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      results.update({
        devoured: req.body.devoured
      });
      res.status(200).end();
    });
  });
};