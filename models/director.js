const { Schema, model } = require('mongoose');

const DirectorSchema = Schema({
    nombres: { 
        type: String,
        required: [true, 'Debe colocar un nombre'],

    },
    estado:{
        type: String,
        required: true,
        enum: ['Activo','Inactivo']
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

module.exports = model('Director', DirectorSchema );