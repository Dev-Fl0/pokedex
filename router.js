const express = require("express");


const router = express.Router();

const mainController = require("./app/controllers/mainController");

router.get("/", mainController.generateFirstTwentyPokemon);

module.exports = router;