const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const rutasTramites =
  require("./routes/tramites");
const rutasAdmin =
  require("./routes/admin");
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(
  "/api/tramites",
  rutasTramites
);
app.use(
  "/api/admin",
  rutasAdmin
);
app.listen(3000, () => {
  console.log(
    "Servidor ejecutándose"
  );
});