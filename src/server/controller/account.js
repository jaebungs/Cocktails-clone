import AppError from '../common/AppError';
import * as accountService from '../service/account';

export const getAccountByEmail = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const account = await accountService.getAccountByEmail(email);
    if (!account) throw new AppError('Cannot find the account.');
    if (account.password === password) {
      res.json({ message: 'Login Success.' });
    } else {
      throw new AppError('Password does not match.');
    }
  } catch (err) {
    next(err);
  }
};

export const createAccount = async (req, res, next) => {
  try {
    const account = await accountService.createAccount(req.body);
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
