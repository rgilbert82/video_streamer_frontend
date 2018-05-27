import React               from 'react';
import { shallow }         from 'enzyme';
import { CommentListItem } from '.';

describe(CommentListItem, () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentListItem displayMessage={jest.fn()}/>);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
