import React                from 'react';
import { shallow }          from 'enzyme';
import { UserCommentsList } from '.';

describe(UserCommentsList, () => {
  let component;

  beforeEach(() => {
    component = shallow(<UserCommentsList comments={[]} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
