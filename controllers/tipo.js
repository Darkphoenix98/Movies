const { request, response } = require('express');
const Tipo = require('../models/tipo');


// crear
const CreateTipo = async (req, res) => {
    try {
        const {nombre, descripcion } = req.body;

        // Verificar si el cliente existe ya existe
        const tipoDB = await Tipo.findOne({ nombre});
        if (tipoDB) {
            return res.status(400).json({ msg: 'Ya existe nombre' });
        }
        // Agregar 
        const datos = {
            nombre, descripcion
        };

        // Crear instancia del cliente con los datos
        const tipo = new Tipo(datos);

        // Guardar el cliente en la base de datos
        await tipo.save();

        // Retornar la respuesta con el objeto cliente creado
        return res.status(201).json(tipo);
    } catch (e) {
        // Manejar errores
        return res.status(500).json({ msg: e.message || 'Error interno del servidor' });
    }
};


 
// consultar todos
const getTipos= async (req, res = response) => {
    try{
        const tipoDB = await Tipo.find()
        return res.json(tipoDB);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getTipoPorID = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const tipo = await Tipo.findOne(query);
        return res.json(tipo);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const UpdateTipoPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const tipo = await Tipo.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(tipo);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}



module.exports = {
    
    CreateTipo,
    getTipos,
    getTipoPorID,
    UpdateTipoPorId


} 

