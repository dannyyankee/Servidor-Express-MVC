const express = require("express");
const routerusers = express.Router();

routerusers.get("/", (req, res) => res.send("Esta es la ruta para usuarios"));

routerusers.get("/:id", (req, res) => {
    res.send("Esta es la ruta para usuarios " + req.params.id)
});


module.exports = routerusers;