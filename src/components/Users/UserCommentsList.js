import React                   from 'react';
import { UserCommentListItem } from '.';

export default class UserCommentsList extends React.Component {
  render() {
    const comments = this.props.comments.map((commentObj) => {
      return (
        <li key={commentObj.comment.id}>
          <UserCommentListItem commentObj={commentObj} />
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
