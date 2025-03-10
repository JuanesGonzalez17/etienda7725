//instanciamos la capa modelo correspondiente
let Usuario = require("../models/usuarios");
let bcryptjs = require("bcryptjs");
let jwt = require("jsonwebtoken");
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

/**  

@description Funcion que hace la creacion o registro de los usuarios en el sistema
@author Juan Steban Gonzalez
@param req la peticion con la data del formulario de registro del usuario
@param res false si no existe el usuario, true y mensaje de exito si se crea, false y mensaje de error si no ingresa la password 
@version 01 -24-02-2025
@callback funcion asincronica que ejecuta la api

*/
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
/**  

@description Funcion que inicia la sesión de los usuarios en el sistema
@author Juan Steban Gonzalez
@param req la peticion con la data del formulario de registro del usuario
@param res false si no existe el usuario, true y mensaje de exito si se crea, false y mensaje de error si no ingresa la password 
@version 01 -24-02-2025
@funcion login asincronica que ejecuta la api

*/
const login = async (req, res) => {
  let usuarioexiste = await Usuarios.findOne({ email: req.body.email });

  if (!usuarioexiste) {
    return res.send({
      estado: false,
      mensaje: "No existe el usuario en la base de datos.",
    });
  }

  if (bcryptjs.compareSync(req.body.clave, usuarioexiste.passwordHash)) {
    //Autenticación de 2 factores con generación de token
    const token = jwt.sign(
      {
        //datos a codificar en el token
        userId: usuarioexiste.id,
        isAdmin: usuarioexiste.esAdmin,
      },
      //salt de la codificada o hashing o encriptado
      "seCreTo",
      {
        //vida util del token
        expiresIn: "4h",
      }
    );
    return res.send({
      estado: true,
      mensaje: "Ingreso exitoso al sistema.",
    });
  } else {
    return res.send({
      estado: false,
      mensaje: "Credenciales erróneas, intente de nuevo.",
    });
  }
};
module.exports = { listartodos, registro, login };
