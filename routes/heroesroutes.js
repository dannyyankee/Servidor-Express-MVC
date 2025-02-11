const express = require("express");
const heroescontrollers = require("../src/controllers/heroescontrollers");
const routerheroes = express.Router();

routerheroes.get("/", heroescontrollers.getHeroes);

module.exports = routerheroes;