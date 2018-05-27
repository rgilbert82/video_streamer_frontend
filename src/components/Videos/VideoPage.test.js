import React         from 'react';
import { shallow }   from 'enzyme';
import { VideoPage } from '.';

describe(VideoPage, () => {
  let component;

  beforeEach(() => {
    component = shallow(<VideoPage match={{params: { video_id: '12345' }}} displayMessage={jest.fn()}/>);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
