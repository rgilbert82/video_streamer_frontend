import React               from 'react';
import { shallow }         from 'enzyme';
import { CommentListItem } from '.';

describe(CommentListItem, () => {
  const message = {
    user: {
      id: '123',
      username: 'Alice',
      image_url: 'youtube.com'
    },
    comment: {
      message: 'hello',
      published_at: '2018'
    }
  }
  let component;

  beforeEach(() => {
    component = shallow(<CommentListItem message={message} displayMessage={jest.fn()}/>);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
