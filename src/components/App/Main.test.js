import React from 'react';
import { shallow } from 'enzyme';
import { Main } from '.';

describe(Main, () => {
  let component;

  beforeEach(() => {
    component = shallow(<Main />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
