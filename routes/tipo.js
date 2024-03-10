const { Router } = require("express");

const{
    CreateTipo,
    getTipos,
    getTipoPorID,
    UpdateTipoPorId
}=require('../controllers/tipo')

const router = Router();


/**
 * Obtiene todos 
 */
router.get('/', getTipos);

/**
 * Obtiene por id
 */
router.get('/:id',  getTipoPorID);

/**
 * Crear 
 */
router.post('/',CreateTipo );

/**
 * Actualiza por id
 */
router.put('/:id',  UpdateTipoPorId);


module.exports = router;

