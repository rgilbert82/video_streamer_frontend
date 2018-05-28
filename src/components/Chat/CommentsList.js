import React               from 'react';
import { CommentListItem } from '.';

export default class CommentsList extends React.Component {
  render() {
    let messages = this.props.messages.map((message) => {
      return (
        <li key={message.comment.id} className='commentListItem'>
          <CommentListItem
            message={message}
            loggedIn={this.props.loggedIn}
            currentUser={this.props.currentUser}
          />
        </li>
      );
    });

    return (
      <div id='videoCommentsList'>
        <ul>
          { messages }
        </ul>
      </div>
    )
  }
}
