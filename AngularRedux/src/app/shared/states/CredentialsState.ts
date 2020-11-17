export interface CredentialsState {
  username: string;
  password: string;
}
export const CredentialsStateKey = 'credentials';
export const initialState: CredentialsState = {
  username: '',
  password: ''
};
