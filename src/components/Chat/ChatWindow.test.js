jest.mock('../../services/api/chats');

import React          from 'react';
import { shallow }    from 'enzyme';
import { ChatWindow } from '.';

describe(ChatWindow, () => {
  const currentUser = { accessToken: '12345' };
  const chat = { id: '1' };
  let fetchSpy = jest.spyOn(ChatWindow.prototype, 'fetchMessages');
  let timerSpy = jest.spyOn(ChatWindow.prototype, 'setFetchTimer');
  let component;

  beforeEach(() => {
    component = shallow(<ChatWindow loggedIn={false} currentUser={currentUser} chat={chat} displayMessage={jest.fn()}/>);
  });

  afterAll(() => {
    fetchSpy.mockClear();
    timerSpy.mockClear();
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it("calls fetchSpy on mount", () => {
    expect(fetchSpy).toHaveBeenCalled();
  });

  it("fetches the comments", () => {
    expect.assertions(2);
    component.instance().fetchMessages()
      .then(() => {
        expect(component.state('updating')).toEqual(true);
        expect(timerSpy).toBeCalled();
      });
  });

  it("creates a comment", () => {
    expect.assertions(1);
    component.instance().createNewComment('hello')
      .then(() => {
        expect(fetchSpy).toBeCalled();
      });
  });
});
