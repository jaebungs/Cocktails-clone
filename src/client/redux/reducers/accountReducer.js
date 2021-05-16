import { CREATE_NEW_ACCOUNT, REGULAR_SIGN_IN } from '../constant';

const initialState = {};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGULAR_SIGN_IN:
      return {
        ...action?.payload,
      };
    case CREATE_NEW_ACCOUNT:
      return {
        ...action?.payload,
      };

    default:
      return state;
  }
};

export default accountReducer;
