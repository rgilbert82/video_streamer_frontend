import React         from 'react';
import { shallow }   from 'enzyme';
import { VideoPage } from '.';

describe(VideoPage, () => {
  let component;

  beforeEach(() => {
    component = shallow(<VideoPage />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
