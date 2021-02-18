import {all, takeLatest} from 'redux-saga/effects';
import {login} from './user/sagas';
import {UserTypes} from './user/types';

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.LOGIN_REQUEST, login)]);
}
