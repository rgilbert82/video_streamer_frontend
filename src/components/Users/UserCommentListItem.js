import React from 'react';

export default class UserCommentListItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.comment.message}</p>
        <small>{this.props.comment.published_at}</small>
      </div>
    );
  }
}
