import React    from 'react';
import { Link } from 'react-router-dom';

export default class UserCommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: this.props.commentObj.comment,
      video:   this.props.commentObj.video
    }
  }

  render() {
    const videoPath = `/videos/${this.state.video.id}`;

    return (
      <div>
        <p>{this.state.comment.message}</p>
        <span>From video: <Link to={videoPath}>{this.state.video.title}</Link></span>
        <small>{this.state.comment.published_at}</small>
      </div>
    );
  }
}
