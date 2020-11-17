import { Action, createReducer, on } from '@ngrx/store';
import {initialState} from '../../states/CredentialsState';
import {loadCredentialsStates} from '../action/credentials-state.actions';



export const reducer = createReducer(
  initialState,
  on(loadCredentialsStates, state => {
    console.log('2', state);
    return  {username: '1', password: '2'};
  })
);

