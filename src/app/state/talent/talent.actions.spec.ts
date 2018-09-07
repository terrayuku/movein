import * as talentActions from './talent.actions';

describe('GET_TALENT', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new talentActions.GetTalent(payload);
    expect({ ...action}).toEqual({
      type: talentActions.GET_TALENT,
      payload
    });
  });
});

describe('GET_TALENT_SUCCESS', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new talentActions.GetTalentSuccess(payload);
    expect({ ...action}).toEqual({
      type: talentActions.GET_TALENT_SUCCESS,
      payload
    });
  });
});

describe('TALENT_ADD', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new talentActions.TalentAdd(payload);
    expect({ ...action}).toEqual({
      type: talentActions.TALENT_ADD,
      payload
    });
  });
});

describe('TALENT_ADD_SUCCESS', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new talentActions.TalentAddSuccess(payload);
    expect({ ...action}).toEqual({
      type: talentActions.TALENT_ADD_SUCCESS,
      payload
    });
  });
});

describe('TALENT_FAIL', () => {
  it('should create action', () => {
    const payload: any = null;
    const action = new talentActions.TalentFail(payload);
    expect({ ...action}).toEqual({
      type: talentActions.TALENT_FAIL,
      payload
    });
  });
});
