import {createReducer, on} from '@ngrx/store';
import {UserModel} from '../shared/classes/UserModel';
import {DashboardActions} from './dashboard.actions';

export const nodeKey = 'user';
export const dashboardReducers = createReducer<UserModel>(new UserModel(),
  on(DashboardActions.logout, (state: UserModel) => {
    return new UserModel();
  }),
  on(DashboardActions.changeName, (state: UserModel, {name}) => {
    const newState = {...state};
    newState.name = name;
    return newState;
  })
);

