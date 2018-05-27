import React          from 'react';
import { shallow }    from 'enzyme';
import { UserHeader } from '.';

describe(UserHeader, () => {
  const user = {
    id: '1234',
    username: 'Alice',
    image_url: 'youtube.com'
  };
  let component;

  beforeEach(() => {
    component = shallow(<UserHeader user={user} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
