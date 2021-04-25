import AppError from '../common/AppError';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return new AppError('Cannot find the authToken.');

    let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken;
    next();
  } catch (err) {
    next(err);
  }
};
