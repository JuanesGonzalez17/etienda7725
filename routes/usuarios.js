//rutas para consumir el módulo productos del SERVICIO ECOMMERCE
const express = require("express");
const router = express.Router();

//instanciamos el controlador correspondiente
const usuarioCtr = require("../controllers/usuarios");

//rutas que entregará el modulo producto

router.get("/usuario/listartodos", usuarioCtr.listartodos);
router.post("/usuario/nuevo", usuarioCtr.registro);
router.post("/usuario/login", usuarioCtr.login);
// router.delete("/usuario/borrarporid/:id", usuarioCtr.borrarporid);
// router.put("/usuario/actualizarporid/:id", usuarioCtr.actualizarporid);
//....
module.exports = router;
