const tramites = require("../data/tramitesData");

const obtenerTramites = (req, res) => {
  res.json(tramites);
};

const buscarTramites = (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const resultados = tramites.filter(tramite =>
    tramite.nombre.toLowerCase().includes(q) ||
    tramite.entidad.toLowerCase().includes(q)
  );

  res.json(resultados);

};

const agregarTramite = (req, res) => {
  const {
    nombre,
    entidad,
    categoria,
    costo,
    modalidad,
    descripcion,
    url
  } = req.body;
  if(
    !nombre ||
    !entidad ||
    !categoria
  ){
    return res.status(400).json({
      mensaje:
        "Complete todos los campos"
    });
  }
  
  const nuevo = {
    id: tramites.length + 1,
    nombre,
    entidad,
    categoria,
    costo,
    modalidad,
    descripcion,
    estado: "Disponible",
    url
  };

  tramites.push(nuevo);
  res.status(201).json({
    mensaje: "Trámite agregado",
    data: nuevo
  });
};

module.exports = {
  obtenerTramites,
  buscarTramites,
  agregarTramite
};