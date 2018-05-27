import React            from 'react';
import { MessageBox }   from '../Misc';
import { Header, Main } from '.';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message:     false,
      loggedIn:    false,
      currentUser: {}
    }

    this.googleLogin    = this.googleLogin.bind(this);
    this.googleLogout   = this.googleLogout.bind(this);
    this.loginFailure   = this.loginFailure.bind(this);
    this.displayMessage = this.displayMessage.bind(this);
    this.closeMessage   = this.closeMessage.bind(this);
  }

  displayMessage(message) {
    this.setState({ message: message });
  }

  closeMessage() {
    this.setState({ message: false });
  }

  googleLogin(googleUser) {
    const profile = {
      name:         googleUser.profileObj.name,
      email:        googleUser.profileObj.email,
      imageUrl:     googleUser.profileObj.imageUrl,
      accessToken:  googleUser.accessToken
    };

    this.setState({ loggedIn: true, currentUser: profile });
  }

  googleLogout() {
    this.setState({ loggedIn: false, currentUser: {} });
  }

  loginFailure() {
    this.displayMessage('There was an error logging in to your Google account.');
  }

  render() {
    let messageBox;

    if (this.state.message) {
      messageBox = <MessageBox
        message={this.state.message}
        closeMessage={this.closeMessage}
      />
    }

    return (
      <div>
        <Header
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser}
          googleLogin={this.googleLogin}
          googleLogout={this.googleLogout}
          loginFailure={this.loginFailure}
          displayMessage={this.displayMessage}
        />

        { messageBox }

        <Main
          loggedIn={this.state.loggedIn}
          currentUser={this.state.currentUser}
          displayMessage={this.displayMessage}
        />
      </div>
    );
  }
}
