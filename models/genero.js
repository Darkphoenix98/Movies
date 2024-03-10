const { Schema, model } = require('mongoose');

const GeneroSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Debe colocar un nombre'],
       
    },

    estado:{
        type: String,
        required: true,
        enum: ['Activo','Inactivo']
    },
    descripcion:{
        type: String,
        required: true,
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

module.exports = model('Genero', GeneroSchema);