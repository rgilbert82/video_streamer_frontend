import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '.';

describe(Header, () => {
  let component;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
