import {createAction, props} from '@ngrx/store';
import {UserModel} from '../shared/classes/UserModel';

export class LoginActions {
  static readonly login = createAction('[Login Component] Login',
    props<UserModel>());
}

