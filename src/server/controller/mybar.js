import AppError from '../common/AppError';
import * as accountService from '../service/myBar';

export const getMyBarFromAccount = async (req, res, next) => {
  try {
    const account = await accountService.getAccountByEmail(req.body.email);
    if (!account) return new AppError('Cannot find the account');
    res.json(account.myBar);
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
