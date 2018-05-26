import React          from 'react';
import { shallow }    from 'enzyme';
import { VideoStats } from '.';

describe(VideoStats, () => {
  let component;

  beforeEach(() => {
    component = shallow(<VideoStats />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
