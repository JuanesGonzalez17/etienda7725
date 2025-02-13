//librerias base
const express = require("express");
const app = express();
const cors = require("cors");
//middleware de la app
app.use(cors());
app.use(express.json());
//llamamos la librería de conexión
const conexion = require("./models/bd_conexion");
conexion();
//rutas globales de la app
const productoRta = require("./routes/productos");
const usuarioRta = require("./routes/usuarios");

//usamos las rutas
app.use("/api", productoRta);
app.use("/api", usuarioRta);
app.listen(4000, () => {
  console.log(`listen ${4000}`);
});
