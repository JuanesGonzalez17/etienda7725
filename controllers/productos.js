//controlador para el manejo de los productos
//conectamos el controlador con su modelo correspondiente

let Producto = require('../models/productos')

//toda la lógica de un CRUD típico: listartodos, listarporid, crear, actualizar, borrar...

const listartodos = async(req, res)=>{
    try {
        //consultar todos sin filtro
        let listaProductos = await Producto.find().exec();
        res.status(200).send({
            "exito": true,
            listaProductos
        })
    } catch (error) {
        res.status(500).send({
            "exito": false,
            error
        })
    }
}

module.exports = {listartodos}