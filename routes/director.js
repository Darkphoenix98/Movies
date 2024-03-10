const { Router } = require('express');
const { 
    
    CreateDirector,
    getDirectores,
    getDirectorPorID,
    UpdateDirectorPorId
} = require('../controllers/director');

const router = Router();

/**
 * Obtiene todos 
 */
router.get('/', getDirectores);

/**
 * Obtiene por id
 */
router.get('/:id',  getDirectorPorID);

/**
 * Crear 
 */
router.post('/',CreateDirector );

/**
 * Actualiza por id
 */
router.put('/:id',  UpdateDirectorPorId);


module.exports = router;