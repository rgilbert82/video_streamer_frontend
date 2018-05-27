import React           from 'react';
import { PageLoading } from '../Misc'
import { getUserApi }  from '../../services/api/users';

export default class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      comments:   [],
      user:       {}
    }

    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchUser();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchUser() {
    getUserApi(this.props.match.params.user_id)
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log('ERROR');
      });
  }

  render() {
    return (
      <div>
        <h2>User Page</h2>
      </div>
    );
  }
}
