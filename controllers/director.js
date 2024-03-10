const { request, response } = require('express');
const Director = require('../models/director');


// crear
const CreateDirector = async (req, res) => {
    try {
        const {nombres, estado } = req.body;

        // Verificar si el cliente existe ya existe
        const directorBD = await Director.findOne({ nombres });
        if (directorBD) {
            return res.status(400).json({ msg: 'Ya existe el director' });
        }
        // Agregar 
        const datos = {
            nombres, 
            estado
        };

        // Crear instancia del cliente con los datos
        const director = new Director(datos);

        // Guardar el cliente en la base de datos
        await director.save();

        // Retornar la respuesta con el objeto cliente creado
        return res.status(201).json(director);
    } catch (e) {
        // Manejar errores
        return res.status(500).json({ msg: e.message || 'Error interno del servidor' });
    }
};


 
// consultar todos
const getDirectores= async (req, res = response) => {
    try{
        const directorBD = await Director.find()
        return res.json(directorBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getDirectorPorID = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const director = await Director.findOne(query);
        return res.json(director);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const UpdateDirectorPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const director = await Director.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(director);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}



module.exports = {
    
    CreateDirector,
    getDirectores,
    getDirectorPorID,
    UpdateDirectorPorId


} 