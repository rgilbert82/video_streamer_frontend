jest.mock('../../services/api/videos');

import React         from 'react';
import { shallow }   from 'enzyme';
import { VideoPage } from '.';

describe(VideoPage, () => {
  let fetchSpy = jest.spyOn(VideoPage.prototype, 'fetchVideo');
  let component;

  beforeEach(() => {
    component = shallow(<VideoPage match={{params: { video_id: '12345' }}} displayMessage={jest.fn()}/>);
  });

  afterAll(() => {
    fetchSpy.mockClear();
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('calls fetchSpy on mount', () => {
    expect(fetchSpy).toHaveBeenCalled();
  });

  it('fetches the video', () => {
    expect.assertions(3);
    component.instance().fetchVideo()
      .then(() => {
        expect(component.state('pageLoaded')).toEqual(true);
        expect(component.state('video')).toEqual({ name: 'Video 1' });
        expect(component.state('chat')).toEqual({ id: '1' });
      });
  });
});
