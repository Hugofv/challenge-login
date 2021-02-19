import { loginSuccess, loginFailure } from './actions';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

export type AuthParamenter = {
  email: string;
  password: string;
};

export function* login(action: any) {
  const { auth } = action.payload;
  
  try {
    const response = yield call(
      api.get,
      `users?email=${auth.email}&password=${auth.password}`
    );

    if(!response.data.length) throw response;
    yield put(loginSuccess(response.data[0]));
  } catch (err) {
    yield put(loginFailure());
  }
}
