import {CredentialsState} from './CredentialsState';
import {UserDataState} from './UserDataState';

export interface AppState {
  credentials: CredentialsState;
  userData: UserDataState;
}
export const initialState: AppState = {
  credentials: null,
  userData: null
};
