import React                   from 'react';
import { shallow }             from 'enzyme';
import { UserCommentListItem } from '.';

describe(UserCommentListItem, () => {
  const comment = {
    message: 'hello',
    published_at: '2018'
  };
  let component;

  beforeEach(() => {
    component = shallow(<UserCommentListItem comment={comment} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
