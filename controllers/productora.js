const { request, response } = require('express');
const Productora = require('../models/productora');

// crear
const CreateProductora = async (req, res) => {
    try {
        const {nombre, estado, descripcion, slogan} = req.body;

        // Verificar si el cliente existe ya existe
        const productoraBD = await Productora.findOne({ nombre });
        if (productoraBD) {
            return res.status(400).json({ msg: 'Ya existe el director' });
        }
        // Agregar 
        const datos = {
            nombre, estado, descripcion, slogan
        };

        // Crear instancia del cliente con los datos
        const productora = new Productora(datos);

        // Guardar el cliente en la base de datos
        await productora.save();

        // Retornar la respuesta con el objeto cliente creado
        return res.status(201).json(productora);
    } catch (e) {
        // Manejar errores
        return res.status(500).json({ msg: e.message || 'Error interno del servidor' });
    }
};


 
// consultar todos
const getProductoras= async (req, res = response) => {
    try{
        const productoraBD = await Productora.find()
        return res.json(productoraBD);
    }catch(e){
        return res.status(500).json({mjs: e})
    }

}

/**
 * Consultar por ID
 */
const getProductoraPorID = async (req = request, res = response) => {
    try{
        const { id }  = req.params;
        const query = { _id: id };
        const productora = await Productora.findOne(query);
        return res.json(productora);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}

/**
 * Actualiza por ID
 */
const UpdateProductoraPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const productora = await Productora.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(productora);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}



module.exports = {
    
    CreateProductora,
    getProductoras,
    getProductoraPorID,
    UpdateProductoraPorId


} 