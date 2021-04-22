import AppError from '../common/AppError';
import * as accountService from '../service/account';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

export const getAccountByEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // if account data is not found
    const account = await accountService.getAccountByEmail(email);
    if (!account) throw new AppError('Cannot find the account.');

    // if password is correct return token, if not throw error.
    const isPasswordCorrect = await bcrypt.compare(password, account.password);
    if (isPasswordCorrect) {
      const token = jwt.sign({ email, id: account.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
      });
      res.json({ token });
    } else {
      return new AppError('Incorrect password.');
    }
  } catch (err) {
    next(err);
  }
};

export const createAccount = async (req, res, next) => {
  try {
    const encryptPassword = await bcrypt.hashSync(req.body.password, 10);
    const accountData = {
      ...req.body,
      password: encryptPassword,
    };
    const account = await accountService.createAccount(accountData);
    if (!account) throw new AppError('Cannot create a new account.');
    res.json(account);
  } catch (err) {
    next(err);
  }
};

export const updateAccountById = async (req, res, next) => {
  try {
    const account = await accountService.updateAccountById(req.params.id, req.body);
    if (!account) throw new AppError('Cannot create a new account.');
    res.json(account);
  } catch (err) {
    next(err);
  }
};

export const deleteAccountById = async (req, res, next) => {
  try {
    const account = await accountService.deleteAccountById(req.params.id);
    if (!account) throw new AppError('Cannot create a new account.');
    res.json(account);
  } catch (err) {
    next(err);
  }
};

// create account does not work properly.
// with Postman, an object is created but no data inside.
