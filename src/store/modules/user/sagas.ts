import {loginSuccess, loginFailure} from './actions';
import {call, put} from 'redux-saga/effects';
import api from '../../../services/api';

export function* login() {
  try {
    const response = yield call(api.get, '/sd');
    yield put(loginSuccess(response.data));
  } catch (err) {
    yield put(loginFailure());
  }
}
