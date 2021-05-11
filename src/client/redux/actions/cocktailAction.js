import { GET_ALL_COCKTAILS } from '../constant';
import { server } from '../../configs/index';

export const getCocktails = () => async dispatch => {
  const res = await fetch(`${server}/cocktails`);
  const data = await res.json();

  dispatch({
    type: GET_ALL_COCKTAILS,
    payload: data,
  });
};
