import React          from 'react';
import { ChatWindow } from '../Chat';

export default class VideoMain extends React.Component {
  render() {
    let commentsList;

    if (this.props.chat) {
      commentsList = <ChatWindow chat={this.props.chat} displayMessage={this.props.displayMessage} />;
    } else {
      commentsList = (
        <div>
          <p>Chat disabled for this video</p>
        </div>
      );
    }

    return (
      <div>
        <p>Video main profile goes here...</p>
        { commentsList }
      </div>
    );
  }
}
