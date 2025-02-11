const express = require("express");
const routerheroes = require("./heroesroutes");
const routerusers = require("./usersroutes");
const router = express.Router();

//router.get("/heroes", (req, res) => res.send("Esta es la ruta para heroes"));
router.use("/heroes", routerheroes)
router.use("/users", routerusers)


module.exports = router;