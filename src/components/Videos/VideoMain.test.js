import React         from 'react';
import { shallow }   from 'enzyme';
import { VideoMain } from '.';

describe(VideoMain, () => {
  let component;

  beforeEach(() => {
    component = shallow(<VideoMain />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
