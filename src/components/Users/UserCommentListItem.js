import React          from 'react';
import { Link }       from 'react-router-dom';
import { formatDate } from '../../services/misc';

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
        <h4>From video: <Link to={videoPath}>{this.state.video.title}</Link></h4>
        <p>{this.state.comment.message}</p>
        <small className='dateTag'>{formatDate(this.state.comment.published_at)}</small>
      </div>
    );
  }
}
