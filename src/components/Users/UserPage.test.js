import React        from 'react';
import { shallow }  from 'enzyme';
import { UserPage } from '.';

describe(UserPage, () => {
  let component;

  beforeEach(() => {
    component = shallow(<UserPage />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
