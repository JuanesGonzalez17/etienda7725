//controlador para el manejo de los productos
//conectamos el controlador con su modelo correspondiente

let Producto = require("../models/productos");

//toda la lógica de un CRUD típico: listartodos, listarporid, crear, actualizar, borrar...

const listartodos = async (req, res) => {
  try {
    //consultar todos sin filtro
    let listaProductos = await Producto.find().exec();
    res.status(200).send({
      exito: true,
      listaProductos,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error}`,
    });
  }
};
//crear nuevo
const nuevo = async (req, res) => {
  //llega el objeto en el body del request
  let datos = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    marca: req.body.marca,
    precio: req.body.precio,
    existencia: req.body.existencia,
    rating: req.body.rating,
    numRevisiones: req.body.numRevisiones,
    estaOfertado: req.body.estaOfertado,
  };
  try {
    //instancia del modelo Producto (collection)
    const productoNuevo = new Producto(datos);
    //salvamos en mongo
    let consulta = await productoNuevo.save(); //escribe en mongo
    return res.send({
      estado: true,
      mensaje: "Inserción exitosa!",
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error}`,
    });
  }
};
//buscar por id o por otro parámetro
const buscarporid = async (req, res) => {
  //recibimos el parámetro por el cual debo buscar y eliminar
  let id = req.params.id;
  try {
    //logica de buscar y mostrar el resultado del query
    let consulta = await Producto.findById(id).exec();
    return res.send({
      estado: true,
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error}`,
    });
  }
};
//actualizar de acuerdo al id del producto
const actualizarporid = async (req, res) => {
  //recibe el parámetro de la consulta
  let id = req.params.id;
  //llega el objeto en el body del request (payload)
  let datos = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
    marca: req.body.marca,
    precio: req.body.precio,
    existencia: req.body.existencia,
    rating: req.body.rating,
    numRevisiones: req.body.numRevisiones,
    estaOfertado: req.body.estaOfertado,
  };
  try {
    let consulta = await Producto.findByIdAndUpdate(id, datos).exec(); //escribe en mongo
    return res.send({
      estado: true,
      mensaje: "Actualización exitosa!",
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error}`,
    });
  }
};
//borrar de acuerdo al id
const borrarporid = async (req, res) => {
  //recibimos el parámetro
  let id = req.params.id;
  try {
    //logica de buscar y eliminar el registro
    let consulta = await Producto.findByIdAndDelete(id).exec();
    return res.send({
      estado: true,
      mensaje: "Eliminación exitosa!",
      consulta,
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error}`,
    });
  }
};
module.exports = { listartodos, nuevo, buscarporid, borrarporid, actualizarporid };
