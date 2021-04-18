import AppError from '../common/AppError';
import * as cocktailService from '../service/cocktails';

export const getAllCocktails = async (req, res, next) => {
  try {
    const cocktails = await cocktailService.getAllCocktails();
    if (!cocktails) throw new AppError('Cocktail database is empty or has an error.');
    res.json(cocktails);
  } catch (err) {
    next(err);
  }
};

export const getCocktailById = async (req, res, next) => {
  try {
    const cocktail = await cocktailService.getCocktailById(req.params.id);
    if (!cocktail) throw new AppError('Cocktail data could not find.');
    res.json(cocktail);
  } catch (err) {
    next(err);
  }
};

export const createCocktail = async (req, res, next) => {
  try {
    const cocktail = await cocktailService.createCocktail(req.body);
    console.log(req.body);
    if (!cocktail) throw new AppError('Cocktail data cannot be created');
    res.json(cocktail);
  } catch (err) {
    next(err);
  }
};

export const updateCocktailById = async (req, res, next) => {
  try {
    const cocktail = await cocktailService.updateCocktailById(req.params.id, req.body);
    if (!cocktail) throw new AppError('Cocktail database cannot be updated.');
    res.json(cocktail);
  } catch (err) {
    next(err);
  }
};

export const deleteCocktailById = async (req, res, next) => {
  try {
    const cocktail = await cocktailService.deleteCocktailById(req.params.id);
    if (!cocktail) throw new AppError('Cocktail data cannot be deleted.');
    res.json(cocktail);
  } catch (err) {
    next(err);
  }
};
