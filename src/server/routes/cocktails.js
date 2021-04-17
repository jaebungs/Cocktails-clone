import express from 'express';

const router = express.Router();

// routes in this file starting with /cocktails
router.get('/', getAllCocktails)

export default router;