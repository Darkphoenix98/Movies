const { Schema, model } = require('mongoose');

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Debe colocar un número'],
        unique: true
    },
    titulo:{
        type:String,
        required:true
    },
    sinopsis:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true,
        unique: true

    },
    imagen:{
        type:String,
        required:true,
        unique: true

    }, fecha_Estreno:{
        type:Date,
        required:true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },

    // resto de atributos fk
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
     },
     director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
     },
     productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
     },
     tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
     },
     

});

module.exports = model('Media', MediaSchema);


