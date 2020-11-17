export interface UserDataState {
  nombre: string;
  apellido: string;
}
export const UserDataStateKey = 'credentials';
export const initialState: UserDataState = {
  nombre: '',
  apellido: ''
};
