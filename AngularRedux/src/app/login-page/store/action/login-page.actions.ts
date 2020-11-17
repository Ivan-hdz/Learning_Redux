import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[LoginPage] Login',
  props<{usuario: string, contrasena: string}>()
);


