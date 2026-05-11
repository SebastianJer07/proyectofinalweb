const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require(
  "../middleware/auth"
);
const {
  agregarTramite
} = require(
  "../controllers/tramitesController"
);


const router = express.Router();
router.post("/login", (req, res) => {
  const {
    usuario,
    password
  } = req.body;
  if(
    usuario === "admin" &&
    password === "123456"
  ){
    const token = jwt.sign({usuario: "admin"},"CLAVE_SECRETA",{expiresIn: "1h"});
    return res.json({ token });
  }
  res.status(401).json({mensaje:"Credenciales incorrectas"});
});

router.post("/tramites",auth,agregarTramite);
module.exports = router;