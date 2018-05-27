import React               from 'react';
import { CommentListItem } from '.';

export default class CommentsList extends React.Component {
  render() {
    let messages = this.props.messages.map((message) => {
      return (
        <li key={message.comment.id}>
          <CommentListItem message={message} />
        </li>
      );
    });

    return (
      <div>
        <ul>
          { messages }
        </ul>
      </div>
    )
  }
}
