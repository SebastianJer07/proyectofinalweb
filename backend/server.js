const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const tramiteRoutes = require('./routes/tramites');
const app = express();
app.use(helmet());
app.use((req, res, next) => {
    console.log(`Log de Control: ${req.method} en la ruta ${req.url}`);
    next();
});
app.use(cors());
app.use(express.json());
app.use('/api/tramites', tramiteRoutes);
app.use((req, res) => {
    res.status(404).json({
        error: "404",
        message: "Lo siento, la página o recurso que buscas no existe."
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("========================================");
    console.log(`Servidor iniciado en: http://localhost:${PORT}`);
    console.log("========================================");
});