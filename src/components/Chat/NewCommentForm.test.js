import React              from 'react';
import { shallow }        from 'enzyme';
import { NewCommentForm } from '.';

describe(NewCommentForm, () => {
  let component;

  beforeEach(() => {
    component = shallow(<NewCommentForm displayMessage={jest.fn()}/>);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });
});
