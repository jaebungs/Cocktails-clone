import AppError from '../common/AppError';
import * as myBarService from '../service/myBar';
import * as cocktailService from '../service/cocktails';

export const getMyBarList = async (req, res, next) => {
  try {
    const account = await myBarService.getMyBar(req.body.email);
    if (!account) throw new AppError('Cannot get the bookmark lists.');
    const recipes = await account.myBar.forEach(recipe => {
      cocktailService.getCocktailById(recipe.id);
    });
    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

// export const addToMyBarById = async (req, res, next) => {
//   try {
//     const myBar = await myBarService.addToMyBarById(req);
//   } catch (err) {
//     next(err);
//   }
// };

// export const removeFromMyBarById = async (req, res, next) => {};
