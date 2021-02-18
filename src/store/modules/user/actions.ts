import { AuthParamenter } from './sagas';
import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const loginRequest = (auth: AuthParamenter) =>
  action(UserTypes.LOGIN_REQUEST, { auth });

export const loginSuccess = (data: User) =>
  action(UserTypes.LOGIN_SUCCESS, { data });

export const loginFailure = () => action(UserTypes.LOGIN_FAILURE);
