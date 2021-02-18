import { loginSuccess, loginFailure } from './actions';
import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

export type AuthParamenter = {
  email: string,
  password: string,
}

export function* login(action: AuthParamenter) {
  try {
    const response = yield call(
      api.get,
      `users?email=${action.email}&password=${action.password}`
    );
    yield put(loginSuccess(response.data));
  } catch (err) {
    yield put(loginFailure());
  }
}
