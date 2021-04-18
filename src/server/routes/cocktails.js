import express from 'express';
import * as cocktailController from '../controller/cocktails';

const router = express.Router();

// routes in this file starting with /cocktails
router.get('/', cocktailController.getAllCocktails);
router.get('/:id', cocktailController.getCocktailById);
router.post('/', cocktailController.createCocktail);
router.put('/:id', cocktailController.updateCocktailById);
router.delete('/:id', cocktailController.deleteCocktailById);

export default router;
