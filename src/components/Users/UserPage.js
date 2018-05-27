import React                from 'react';
import { PageLoading }      from '../Misc'
import { UserHeader }       from '.';
import { UserCommentsList } from '.';
import { getUserApi }       from '../../services/api/users';

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
        this.setState({ pageLoaded: true, comments: data.comments, user: data.user });
        console.log(this.state);
      }).catch((err) => {
        this.props.displayMessage('There was an error loading the user');
      });
  }

  render() {
    let content;

    if (this.state.pageLoaded) {
      content = (
        <div>
          <UserHeader user={this.state.user} />
          <UserCommentsList comments={this.state.comments} />
        </div>
      );
    } else {
      content = <PageLoading />;
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}
