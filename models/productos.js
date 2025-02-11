//modelo para la colección producto
//destructuring de la clase mongoose --solo traigo los métodos que me importan
const {Schema,model, Collection} = require('mongoose')

//creamos el schema

const productoSchema = Schema({
    //nombre: String,
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number, 
        required: false
    },
    // existencia: Number
    existencia: {
        type: Number,
        required: true
    }
},
{
    Collection: "producto"
});

module.exports = model("Producto",productoSchema);