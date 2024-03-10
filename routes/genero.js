const {Router} = require('express');
const{
    CreateGenero,
    getGeneros,
    getGeneroPorID,
    UpdateGeneroPorId
} =require('../controllers/genero');

const router = Router();

/**
 * Obtiene todos 
 */
router.get('/', getGeneros);

/**
 * Obtiene por id
 */
router.get('/:id',  getGeneroPorID);

/**
 * Crear 
 */
router.post('/',CreateGenero );

/**
 * Actualiza por id
 */
router.put('/:id',  UpdateGeneroPorId);


module.exports = router;