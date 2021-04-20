import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const cocktailSchema = new Schema(
  {
    name: String,
    ingredients: [String],
    instruction: String,
    garnish: String,
  },
  {
    timestamps: true,
  },
);

const Cocktail = mongoose.model('Cocktail', cocktailSchema);

export default Cocktail;
