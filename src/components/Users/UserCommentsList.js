import React                   from 'react';
import { UserCommentListItem } from '.';

export default class UserCommentsList extends React.Component {
  render() {
    const comments = this.props.comments.map((commentObj) => {
      return (
        <li key={commentObj.comment.id} className='commentListItem userCommentListItem'>
          <UserCommentListItem commentObj={commentObj} />
        </li>
      );
    });

    return (
      <div id='userProfileComments'>
        <ul>
          { comments }
        </ul>
      </div>
    );
  }
}
