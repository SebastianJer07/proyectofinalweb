const express = require("express");

const router = express.Router();

const {

  obtenerTramites,
  buscarTramites

} = require(
  "../controllers/tramitesController"
);

router.get("/", obtenerTramites);

router.get("/buscar", buscarTramites);

module.exports = router;