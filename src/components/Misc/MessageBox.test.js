import React          from 'react';
import { shallow }    from 'enzyme';
import { MessageBox } from '.';

describe(MessageBox, () => {
  let component;

  beforeEach(() => {
    component = shallow(<MessageBox />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
