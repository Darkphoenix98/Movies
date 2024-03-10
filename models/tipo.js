const { Schema, model } = require('mongoose');

const TipoSchema = Schema({
    nombre: {
        type:String,
        required: [true, 'Debe colocar un nombre'],

    },
    descripcion: {
        type:String,
  
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }

});

module.exports = model('Tipo',TipoSchema );