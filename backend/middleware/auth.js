const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      mensaje: "Acceso denegado"
    });
  }
  try {
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length); 
    }
    const verificar = jwt.verify(token, "CLAVE_SECRETA");
    req.usuario = verificar;
    next();
  } catch (error) {
    res.status(400).json({
      mensaje: "Token inválido"
    });
  }
};
module.exports = auth;