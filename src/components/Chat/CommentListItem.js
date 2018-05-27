import React    from 'react';
import { Link } from 'react-router-dom';

export default class CommentListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user:    this.props.message.user,
      comment: this.props.message.comment
    }
  }

  render() {
    const userPath = `/users/${this.state.user.id}`;
    return (
      <div>
        <div>
          <Link to={userPath}>
            <img src={this.state.user.image_url} alt={this.state.user.id} />
            <h4>{this.state.user.username}</h4>
          </Link>
        </div>
        <p>{this.state.comment.message}</p>
        <small>{this.state.comment.published_at}</small>
      </div>
    );
  }
}
