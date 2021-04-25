import Account from '../model/account';

export const getMyBarFromAccount = email => {
  return Account.findOne({ email });
};

export const updateMyBar = (id, myBarList) => {
  return Account.updateOne({ id }, { $set: { myBar: myBarList } });
};
