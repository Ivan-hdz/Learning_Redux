import {createReducer, on} from '@ngrx/store';
import {UserModel} from '../shared/classes/UserModel';
import {LoginActions} from './login.actions';
export const nodeKey = 'user';
export const loginReducers = createReducer<UserModel>(new UserModel(),
  on(LoginActions.login, (state: UserModel, {username, name, password}) => {
    return {username, name, password};
  })
);

