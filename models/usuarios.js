//modelo para la colección producto
//destructuring de la clase mongoose --solo traigo los métodos que me importan
const { Schema, model, Collection } = require("mongoose");

//creamos el schema

const usuarioSchema = Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    telefono: {
      type: String,
      required: true,
    },
    esAdmin: {
      type: Boolean,
      default: false,
    },
    direccion: {
      type: String,
      default: "",
    },
    zip: {
      type: String,
      default: "",
    },
    ciudad: {
      type: String,
      default: "",
    },
    pais: {
      type: String,
      default: "",
    },
  },
  {
    Collection: "usuario",
  }
);
module.exports = model("Usuario", usuarioSchema);
