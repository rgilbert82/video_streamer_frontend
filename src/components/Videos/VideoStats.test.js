import React          from 'react';
import { shallow }    from 'enzyme';
import { VideoStats } from '.';

describe(VideoStats, () => {
  const video = {
    id: '123',
    title: 'Title'
  };
  let component;

  beforeEach(() => {
    component = shallow(<VideoStats video={video} displayMessage={jest.fn()}/>);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
