import React                   from 'react';
import { shallow }             from 'enzyme';
import { UserCommentListItem } from '.';

describe(UserCommentListItem, () => {
  const commentObj = {
    comment: {
     message: 'hello',
     published_at: '2018'
   },
   video: {
     id: '123',
     title: 'video title'
   }
  };
  let component;

  beforeEach(() => {
    component = shallow(<UserCommentListItem commentObj={commentObj} />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
