import * as fromCredentialsState from './credentials-state.actions';

describe('loadCredentialsStates', () => {
  it('should return an action', () => {
    expect(fromCredentialsState.loadCredentialsStates().type).toBe('[CredentialsState] Load CredentialsStates');
  });
});
