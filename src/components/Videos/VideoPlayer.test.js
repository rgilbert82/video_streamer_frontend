import React           from 'react';
import { shallow }     from 'enzyme';
import { VideoPlayer } from '.';

describe(VideoPlayer, () => {
  const video = {
    id:           '123',
    title:        'Title',
    description:  'Description',
    published_at: '2018'
  };
  let component;

  beforeEach(() => {
    component = shallow(<VideoPlayer video={video} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
