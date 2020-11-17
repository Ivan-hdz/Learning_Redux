import { createReducer, on } from '@ngrx/store';
import * as LoginPageActions from './../action/login-page.actions';
import {CredentialsState, initialState} from '../../../shared/states/CredentialsState';


export const reducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state, action) => {
    console.log(state);
    const credentials: CredentialsState = {username: action.usuario, password: action.contrasena};
    return credentials;
  })
);

