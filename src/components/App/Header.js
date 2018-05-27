import React                         from 'react';
import { Link }                      from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default class Header extends React.Component {
  render() {
    let googleButton;

    if (this.props.loggedIn) {
      googleButton = (
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.props.googleLogout}
        ></GoogleLogout>
      );
    } else {
        googleButton = (
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}
            isSignedIn="true"
            buttonText="Login with Google"
            onSuccess={this.props.googleLogin}
            onFailure={this.props.loginFailure}
            scope="https://www.googleapis.com/auth/youtube"
          />
        );
    }

    return (
      <header>
        <Link to='/'><h1>NASA TV</h1></Link>
        { googleButton }
      </header>
    );
  }
}
