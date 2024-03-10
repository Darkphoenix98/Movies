const { Router } = require("express");

const{
    createMedia,
   getMedia,
   updateMediaPorId
}=require('../controllers/media')

const router = Router();


/**
 * Obtiene todos 
 */
router.get('/', getMedia);


/**
 * Crear 
 */
router.post('/',createMedia );

/**
 * Actualiza por id
 */
router.put('/:id',  updateMediaPorId);


module.exports = router;
