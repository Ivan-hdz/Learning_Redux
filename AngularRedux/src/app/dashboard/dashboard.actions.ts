import {createAction, props} from '@ngrx/store';
import {UserModel} from '../shared/classes/UserModel';

export class DashboardActions {
  static readonly logout = createAction('[Dashboard Component] Logout');
  static readonly changeName = createAction('[Dashboard Component] change name',
      props<{name: string}>()
    );
}
