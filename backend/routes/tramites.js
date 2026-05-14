const express = require('express');
const router = express.Router();
// Importamos el controlador
const tramitesController = require('../controllers/tramitescontroller');

// Si escribes mal el nombre de la función aquí, saldrá el TypeError
router.get('/', tramitesController.obtenerTodos); 

// Esta es la ruta que agregamos para la búsqueda
router.get('/buscar', tramitesController.buscarTramite);

module.exports = router;