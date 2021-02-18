import {Reducer} from 'redux';
import {UserState, UserTypes} from './types';

const INITIAL_STATE: UserState = {
  data: [],
  currentUser: {
    name: '',
    password: '',
  },
  error: false,
  loading: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_REQUEST:
      return {...state, loading: true};
    case UserTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        currentUser: action.payload.data,
      };
    case UserTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
