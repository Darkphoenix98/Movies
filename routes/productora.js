const {Router} = require('express');
const{
    CreateProductora,
    getProductoras,
    getProductoraPorID,
    UpdateProductoraPorId

} =require('../controllers/productora');
const { getDirectores } = require('../controllers/director');

const router = Router();


/**
 * Obtiene todos 
 */
router.get('/', getProductoras);

/**
 * Obtiene por id
 */
router.get('/:id',  getProductoraPorID);

/**
 * Crear 
 */
router.post('/',CreateProductora );

/**
 * Actualiza por id
 */
router.put('/:id',  UpdateProductoraPorId);


module.exports = router;
