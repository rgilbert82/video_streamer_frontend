import React                         from 'react';
import { Link }                      from 'react-router-dom';
import { Navbar }                    from 'react-bootstrap';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default class Header extends React.Component {
  render() {
    let googleButton;
    let showCurrentUser;

    if (this.props.loggedIn) {
      googleButton = (
        <GoogleLogout
          className='googleButton'
          buttonText="Logout"
          onLogoutSuccess={this.props.googleLogout}
        ></GoogleLogout>
      );

      showCurrentUser = (
        <div id='currentUserAvatar'>
          <img
            src={this.props.currentUser.imageUrl}
            alt={this.props.currentUser.name + ' avatar'}
          />
        </div>
      );
    } else {
        googleButton = (
          <GoogleLogin
            className='googleButton'
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
      <Navbar id='headerMain'>
        <div id='headerMainLeft'>
          <Link to='/' className='headerTitle'>
            <h1>NASA <span>TV</span></h1>
          </Link>
        </div>
        <div id='headerMainRight'>
          { showCurrentUser }
          { googleButton }
        </div>
      </Navbar>
    );
  }
}
