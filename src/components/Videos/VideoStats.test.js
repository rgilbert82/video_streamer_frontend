jest.mock('../../services/api/videos');

import React          from 'react';
import { shallow }    from 'enzyme';
import { VideoStats } from '.';

describe(VideoStats, () => {
  let fetchSpy = jest.spyOn(VideoStats.prototype, 'fetchStats');
  const video = {
    id: '123',
    title: 'Title'
  };
  let component;

  beforeEach(() => {
    component = shallow(<VideoStats video={video} displayMessage={jest.fn()}/>);
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

  it('fetches the stats', () => {
    expect.assertions(2);
    component.instance().fetchStats()
      .then(() => {
        expect(component.state('pageLoaded')).toEqual(true);
        expect(component.state('stats')).toEqual({ total_comments: 5 });
      });
  });
});
