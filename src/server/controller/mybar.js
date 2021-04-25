import AppError from '../common/AppError';
import * as mybarService from '../service/myBar';

export const getMyBarFromAccount = async (req, res, next) => {
  try {
    const myBarList = await mybarService.getMyBarFromAccount(req.body.email);
    if (!myBarList) return new AppError('Cannot find the account');
    console.log(myBarList.myBar);
    res.json(myBarList.myBar);
  } catch (err) {
    next(err);
  }
};

export const updateMyBar = async (req, res, next) => {
  try {
    const myBarList = await mybarService.updateMyBar(req.body.id, req.body.myBar);
    console.log(req.body.myBar);
    if (!myBarList) return new AppError('Cannot update myBar list.');
    res.json(myBarList.myBar);
  } catch (err) {
    next(err);
  }
};

// export const removeFromMyBarById = async (req, res, next) => {};
