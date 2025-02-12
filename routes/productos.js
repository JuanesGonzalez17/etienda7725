//rutas para consumir el módulo productos del SERVICIO ECOMMERCE
const express = require("express");
const router = express.Router();

//instanciamos el controlador correspondiente
const productoCtr = require("../controllers/productos");

//rutas que entregará el modulo producto

router.get("/producto/listartodos", productoCtr.listartodos);
router.post("/producto/nuevo", productoCtr.nuevo);
//....
module.exports = router;
