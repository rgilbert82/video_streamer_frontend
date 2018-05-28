jest.mock('../../services/api/users');

import React        from 'react';
import { shallow }  from 'enzyme';
import { UserPage } from '.';

describe(UserPage, () => {
  let fetchSpy = jest.spyOn(UserPage.prototype, 'fetchUser');
  let component;

  beforeEach(() => {
    component = shallow(<UserPage match={{params: { user_id: '12345' }}} displayMessage={jest.fn()} />);
  });

  afterAll(() => {
    fetchSpy.mockClear();
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls fetchSpy on mount', () => {
    expect(fetchSpy).toHaveBeenCalled();
  });

  it('fetches the user', () => {
    expect.assertions(3);
    component.instance().fetchUser()
      .then(() => {
        expect(component.state('pageLoaded')).toEqual(true);
        expect(component.state('comments')).toEqual([1, 2, 3]);
        expect(component.state('user')).toEqual({ name: 'Alice', id: '123' });
      });
  });
});
