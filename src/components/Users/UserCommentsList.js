import React                   from 'react';
import { UserCommentListItem } from '.';

export default class UserCommentsList extends React.Component {
  render() {
    const comments = this.props.comments.map((comment) => {
      return (
        <li key={comment.id}>
          <UserCommentListItem comment={comment} />
        </li>
      );
    });

    return (
      <div>
        <h3>Chat Comments</h3>
        <ul>
          { comments }
        </ul>
      </div>
    );
  }
}
