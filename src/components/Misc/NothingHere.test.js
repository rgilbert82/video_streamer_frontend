import React           from 'react';
import { shallow }     from 'enzyme';
import { NothingHere } from '.';

describe(NothingHere, () => {
  let component;

  beforeEach(() => {
    component = shallow(<NothingHere />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
