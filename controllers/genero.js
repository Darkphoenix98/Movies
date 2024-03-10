const {request,response} = require ('express');
const Genero = require('../models/genero');

// crear
const CreateGenero = async (req, res) => {
    try {
        const {nombre, estado, descripcion } = req.body;

        // Verificar si el cliente existe ya existe
        const generoDB = await Genero.findOne({ nombre});
        if (generoDB) {
            return res.status(400).json({ msg: 'Ya existe nombre' });
        }
        // Agregar 
        const datos = {
            nombre, estado, descripcion
        };

        // Crear instancia del cliente con los datos
        const genero = new Genero(datos);

        // Guardar el cliente en la base de datos
        await genero.save();

        // Retornar la respuesta con el objeto cliente creado
        return res.status(201).json(genero);
    } catch (e) {
        // Manejar errores
        return res.status(500).json({ msg: e.message || 'Error interno del servidor' });
    }
};


 
// consultar todos
const getGeneros= async (req, res = response) => {
    try{
        const generoDB = await Genero.find()
        return res.json(generoDB);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getGeneroPorID = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const genero = await Genero.findOne(query);
        return res.json(genero);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const UpdateGeneroPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const genero = await Genero.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(genero);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}



module.exports = {
    
    CreateGenero,
    getGeneros,
    getGeneroPorID,
    UpdateGeneroPorId


} 