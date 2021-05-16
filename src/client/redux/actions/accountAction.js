import { CREATE_NEW_ACCOUNT, OAUTH_SIGN_IN, REGULAR_SIGN_IN } from '../constant';
import { server } from '../../configs/index';

export const regularSignIn = formData => async dispatch => {
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
      dispatch({
        type: REGULAR_SIGN_IN,
        payload: data,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const createAccount = formData => async dispatch => {
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
      dispatch({
        type: CREATE_NEW_ACCOUNT,
        payload: data,
      });
    })
    .catch(err => console.log(err));
};
