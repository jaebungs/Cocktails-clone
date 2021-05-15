import { server } from '../configs/index';

export const signIn = async formData => {
  await fetch(`${server}/account`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const createAccount = async formData => {
  await fetch(`${server}/account/createAccount`, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => res.json())
    .then(data => {
      console.log('creat account success', data);
    })
    .catch(err => console.log(err));
};
