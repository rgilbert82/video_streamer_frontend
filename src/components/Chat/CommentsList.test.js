import React            from 'react';
import { shallow }      from 'enzyme';
import { CommentsList } from '.';

describe(CommentsList, () => {
  let component;

  beforeEach(() => {
    component = shallow(<CommentsList displayMessage={jest.fn()}/>);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
