/**
 * Action Types
 */
export enum UserTypes {
  LOGIN_REQUEST = '@user/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@user/LOGIN_FAILURE',
}

/**
 * Data types
 */
export interface User {
  name: string;
  password: string;
}

/**
 * State type
 */
export interface UserState {
  readonly data: User[];
  readonly currentUser: User;
  readonly loading: boolean;
  readonly error: boolean;
}
