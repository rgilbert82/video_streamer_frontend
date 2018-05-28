jest.mock('../../services/api/videos');

import React           from 'react';
import { shallow }     from 'enzyme';
import { VideosIndex } from '.';

describe(VideosIndex, () => {
  let fetchSpy = jest.spyOn(VideosIndex.prototype, 'fetchVideos');
  let component;

  beforeEach(() => {
    component = shallow(<VideosIndex displayMessage={jest.fn()}/>);
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

  it('fetches the user', () => {
    expect.assertions(2);
    component.instance().fetchVideos()
      .then(() => {
        expect(component.state('pageLoaded')).toEqual(true);
        expect(component.state('videos')).toEqual([1, 2, 3]);
      });
  });
});
