import AppError from '../common/AppError';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authToken = async (req, res, next) => {
  try {
    const authHeader = req.header['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token === null) return new AppError('Cannot verify the authToken.');

    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    next(err);
  }
};
