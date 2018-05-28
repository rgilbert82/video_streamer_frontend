import React       from 'react';
import { shallow } from 'enzyme';
import { App }     from '.';

describe(App, () => {
  const profile = {
    profileObj: {
      name: 'Alice',
      email: 'alice@email.com',
      imageUrl: 'localhost:3000'
    },
    accessToken: '12345'
  }
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('renders properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('sets a message', () => {
    expect(component.state('message')).toEqual(false);
    component.instance().displayMessage('hello');
    expect(component.state('message')).toEqual('hello');
  });

  it('closes the message window', () => {
    component.setState({ message: 'hello' });
    expect(component.state('message')).toEqual('hello');
    component.instance().closeMessage();
    expect(component.state('message')).toEqual(false);
  });

  it('logs the user in and out', () => {
    component.instance().googleLogin(profile);
    expect(component.state('loggedIn')).toEqual(true);
    expect(component.state('currentUser').name).toEqual('Alice');
    component.instance().googleLogout();
    expect(component.state('loggedIn')).toEqual(false);
    expect(component.state('currentUser')).toEqual({});
  });

  it('sets a message at login failure', () => {
    component.instance().loginFailure();
    expect(component.state('message')).toEqual('There was an error logging in to your Google account.');
  });
});
