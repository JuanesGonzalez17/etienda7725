//instanciamos la capa modelo correspondiente
let Usuario = require("../models/usuarios");
let bcryptjs = require("bcryptjs");
//métodos de la librería - métodos de la clase
const listartodos = async (req, res) => {
  try {
    //consultar todos sin filtro
    let listaUsuarios = await Usuario.find().exec();
    res.status(200).send({
      exito: true,
      listaUsuarios,
    });
  } catch (error) {
    res.status(500).send({
      exito: false,
      mensaje: `Ha ocurrido un error en la consulta: ${error}`,
    });
  }
};
const registro = async (req, res) => {
  let datos = {
    nombre: req.body.nombre,
    email: req.body.email,
    passwordHash: bcryptjs.hashSync(req.body.passwordHash, 10),
    telefono: req.body.telefono,
    esAdmin: req.body.esAdmin,
    direccion: req.body.direccion,
    zip: req.body.zip,
    ciudad: req.body.ciudad,
    pais: req.body.pais,
  };

  const usuarioexiste = await Usuarios.findOne({ email: datos.email });

  if (usuarioexiste) {
    return res.send({
      estado: false,
      mensaje: "el usuario ya existe en el sistema",
    });
  }

  try {
    const usuarionuevo = new Usuarios(datos);
    await usuarionuevo.save();
    return res.send({
      estado: true,
      mensaje: "usuario creado exitosamente",
    });
  } catch (error) {
    return res.send({
      estado: false,
      mensaje: `error ${error}`,
    });
  }
};

const login = async (req, res) => {
  let usuarioexiste = await Usuarios.findOne({ email: req.body.email });

  if (!usuarioexiste) {
    return res.send({
      estado: false,
      mensaje: "no existe el usuario",
    });
  }

  if (bcryptjs.compareSync(req.body.clave, Usuarios.passwordHash)) {
    return res.send({
      estado: true,
      mensaje: "ok",
    });
  } else {
    return res.send({
      estado: false,
      mensaje: "no",
    });
  }
};
module.exports = { listartodos, registro, login };
