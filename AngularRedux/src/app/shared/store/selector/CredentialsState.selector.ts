import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CredentialsState, CredentialsStateKey} from '../../states/CredentialsState';

export const selectCredentialsState = createFeatureSelector<CredentialsState>(
  CredentialsStateKey
);
export const selectUsername = createSelector(
  selectCredentialsState,
  (state: CredentialsState) => state.username
);
export const selectPassword = createSelector(
  selectCredentialsState,
  (state: CredentialsState) => state.password
);

