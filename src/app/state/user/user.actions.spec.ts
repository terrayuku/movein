import * as userActions from './user.actions';

describe('CREATE_USER', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.CreateUser(payload);
    expect({ ...action}).toEqual({
      type: userActions.CREATE_USER,
      payload
    });
  });
});

describe('GET_USER', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.GetUser(payload);
    expect({ ...action}).toEqual({
      type: userActions.GET_USER,
      payload
    });
  });
});

describe('AUTHENTICATED', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.Authenticated(payload);
    expect({ ...action}).toEqual({
      type: userActions.AUTHENTICATED,
      payload
    });
  });
});

describe('AUTHENTICATE_EMAIL_PASSWORD', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.AuthenticateEmailPassword(payload);
    expect({ ...action}).toEqual({
      type: userActions.AUTHENTICATE_EMAIL_PASSWORD,
      payload
    });
  });
});

describe('NOT_AUTHENTICATED', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.NotAuthenticated(payload);
    expect({ ...action}).toEqual({
      type: userActions.NOT_AUTHENTICATED,
      payload
    });
  });
});

describe('GOOGLE_LOGIN', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.GoogleLogin(payload);
    expect({ ...action}).toEqual({
      type: userActions.GOOGLE_LOGIN,
      payload
    });
  });
});


describe('LOGOUT', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.Logout(payload);
    expect({ ...action}).toEqual({
      type: userActions.LOGOUT,
      payload
    });
  });
});

describe('AUTH_ERROR', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new userActions.AuthError(payload);
    expect({ ...action}).toEqual({
      type: userActions.AUTH_ERROR,
      payload
    });
  });
});
