import Account from '../model/account';

export const getAccountByEmail = email => {
  return Account.findOne({ email });
};

export const createAccount = accountData => {
  return Account.create(accountData);
};

export const updateAccountById = (id, accountData) => {
  return Account.findByIdAndUpdate(id, accountData);
};

export const deleteAccountById = id => {
  return Account.findByIdAndDelete(id);
};
