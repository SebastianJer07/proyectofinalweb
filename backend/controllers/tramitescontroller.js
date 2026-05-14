const tramites = require('../data/tramitesData');

// Obtener todos los trámites
const obtenerTodos = (req, res) => {
    res.json(tramites);
};

// Buscar trámites por nombre
const buscarTramite = (req, res) => {
    const termino = (req.query.q || '').toLowerCase();

    const resultados = tramites.filter(tramite =>
        tramite.nombre.toLowerCase().includes(termino)
    );

    res.json(resultados);
};

module.exports = {
    obtenerTodos,
    buscarTramite
};