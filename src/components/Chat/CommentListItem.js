import React          from 'react';
import { Link }       from 'react-router-dom';
import { formatDate } from '../../services/misc';

export default class CommentListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user:    this.props.message.user,
      comment: this.props.message.comment
    }
  }

  componentDidMount() {
    const box = document.getElementById('videoCommentsList');
    box.scrollTop = box.scrollHeight - box.clientHeight;
  }

  render() {
    const userPath = `/users/${this.state.user.id}`;
    let currentUserTag = '';

    if (this.props.loggedIn && this.state.user.username === this.props.currentUser.name) {
      currentUserTag = 'currentUserListItem';
    }


    return (
      <div>
        <div className='commentListItemHeader'>
          <Link to={userPath}>
            <img src={this.state.user.image_url} alt={this.state.user.id} />
            <h4 className={currentUserTag}>{this.state.user.username}</h4>
          </Link>
        </div>
        <p>{this.state.comment.message}</p>
        <small className='dateTag'>{formatDate(this.state.comment.published_at)}</small>
      </div>
    );
  }
}
