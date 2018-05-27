import React             from 'react';
import { shallow }       from 'enzyme';
import { VideoListItem } from '.';

describe(VideoListItem, () => {
  const video = {
    chat_enabled: true,
    content: {
      id: '123',
      channel_id: '456',
      description: 'description',
      thumbnail: 'http://thumbnail',
      title: 'title',
      published_at: '2017-05-09T15:12:42+00:00'
    }
  };
  let component;

  beforeEach(() => {
    component = shallow(<VideoListItem video={video} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
