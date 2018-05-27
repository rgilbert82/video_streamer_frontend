import React          from 'react';
import { shallow }    from 'enzyme';
import { ChatWindow } from '.';

describe(ChatWindow, () => {
  let component;

  beforeEach(() => {
    component = shallow(<ChatWindow />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});