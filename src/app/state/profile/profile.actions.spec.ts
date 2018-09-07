import * as profileActions from './profile.actions';

describe('PROFILE_UPDATE', () => {
  it('should create an action', () => {
    const payload: any = null;
    const action = new profileActions.ProfileUpdate(payload);
    expect({ ...action}).toEqual({
      type: profileActions.PROFILE_UPDATE,
      payload
    });
  });
});

describe('PROFILE_UPDATE_SUCCESS', () => {
  it('should create an action', () => {
    const payload: any = null;
    const action = new profileActions.ProfileUpdateSuccess(payload);
    expect({ ...action}).toEqual({
      type: profileActions.PROFILE_UPDATE_SUCCESS,
      payload
    });
  });
});

describe('PROFILE_UPDATE_ERROR', () => {
  it('should create an action', () => {
    const payload: any = null;
    const action = new profileActions.ProfileUpdateError(payload);
    expect({ ...action}).toEqual({
      type: profileActions.PROFILE_UPDATE_ERROR,
      payload
    });
  });
});

describe('GET_PROFILE', () => {
  it('should create an action', () => {
    const payload: any = null;
    const action = new profileActions.GetProfile(payload);
    expect({ ...action}).toEqual({
      type: profileActions.GET_PROFILE,
      payload
    });
  });
});

describe('GET_PROFILE_SUCCESS', () => {
  it('should create an action', () => {
    const payload: any = null;
    const action = new profileActions.GetProfileSuccess(payload);
    expect({ ...action}).toEqual({
      type: profileActions.GET_PROFILE_SUCCESS,
      payload
    });
  });
});

describe('GET_PROFILE_ERROR', () => {
  it('should create an action', () => {
    const payload: any = null;
    const action = new profileActions.GetProfileError(payload);
    expect({ ...action}).toEqual({
      type: profileActions.GET_PROFILE_ERROR,
      payload
    });
  });
});
