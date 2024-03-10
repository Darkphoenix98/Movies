const { request, response } = require('express');
const Media = require('../models/media');
const Director = require('../models/director');
const Genero = require('../models/genero');
const Productora = require('../models/productora');
const Tipo = require('../models/tipo');


/**
 * crear
 */
const createMedia = async (req = request, res = response) => {
    try{
         const { director, genero, productora, tipo  } = req.body;
         console.log(req.body)

        
         // Director
         const directorBD = await Director.findOne({
            _id: director._id
        });
        if(!directorBD){
            return res.status(400).json({
                msj: 'No existe Director'
            })
        }
        //  Genero
        const generoDB = await Genero.findOne({
            _id: genero._id
        });
        if(!generoDB){
            return res.status(400).json({
                msj: 'No existe Genero'
            })

            
        }
        // prducutora
        const productoraBD = await Productora.findOne({
            _id: productora._id
        });
        if(!productoraBD){
            return res.status(400).json({
                msj: 'No existe Productora'
            })

        
            
        }
        
        //Tipo
        const tipoDB = await Tipo.findOne({
            _id: tipo._id
        });
        if(!tipoDB){
            return res.status(400).json({
                msj: 'No existe Tipo'
            })

            
        }
 
        // Agregar campos adicionales
        const {serial,titulo,sinopsis, url, imagen,fecha_Estreno  } = req.body;
        const datos = {
            serial,
            titulo,
            sinopsis,
            url,
            imagen,
            fecha_Estreno
          
        };

        // Crear instancia de Proyecto con los datos
        const media = new Media({ ...datos, ...req.body });

        // Guardar el proyecto en la base de datos
        await media.save();

        // Retornar la respuesta con el objeto proyecto creado
        return res.status(201).json(media);
    } catch (e) {
        // Manejar errores
        return res.status(500).json({
            msj: e.message || 'Error interno del servidor'
        });
    }
};


/**
 * Consultar Proyectso
 * 
 */
const getMedia = async (req, res = response) => {
    try{
        const mediaBD = await Media.find()
        .populate({
            path: 'director' 
        })
        .populate({
            path: 'genero'  
        }) .populate({
            path: 'productora' 
        }) .populate({
            path: 'tipo' 
        })
       
        return res.json(mediaBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}


// actualizar por ID
const updateMediaPorId = async (req = request, res = response) => {
    try{
        const { id } = req.params;
        const data = req.body;
        data.fechaActualizacion = new Date()
        const media = await Media.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(media);
    }catch(e){
        return res.status(500).json({msg: e});
    }
}



module.exports = { 
   createMedia,
   getMedia,
   updateMediaPorId
}





