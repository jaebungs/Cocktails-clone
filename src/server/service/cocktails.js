import Cocktail from '../model/cocktail';

export const getAllCocktails = () => {
  return Cocktail.find();
};

export const getCocktailById = id => {
  return Cocktail.findById(id);
};

export const createCocktail = cocktailData => {
  return Cocktail.create(cocktailData);
};

export const updateCocktailById = (id, cocktailData) => {
  return Cocktail.findByIdAndUpdate(id, cocktailData);
};

export const deleteCocktailById = id => {
  return Cocktail.findByIdAndDelete(id);
};
