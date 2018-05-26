import React           from 'react';
import { shallow }     from 'enzyme';
import { VideosIndex } from '.';

describe(VideosIndex, () => {
  let component;

  beforeEach(() => {
    component = shallow(<VideosIndex />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
