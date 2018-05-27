import React        from 'react';
import { shallow }  from 'enzyme';
import { UserPage } from '.';

describe(UserPage, () => {
  let component;

  beforeEach(() => {
    component = shallow(<UserPage match={{params: { user_id: '12345' }}} displayMessage={jest.fn()} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
