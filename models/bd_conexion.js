//instanciar la librería mongoose
const mongoose = require("mongoose");
const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/etienda");
    console.log(`FUNCIONÓ!`);
  } catch (error) {
    console.log(`error en la conexión: ${error}`);
    //throw new Error(error);
  }
};
module.exports = conexion;
