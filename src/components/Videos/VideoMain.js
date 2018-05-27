import React           from 'react';
import { ChatWindow }  from '../Chat';
import { VideoPlayer } from '.';

export default class VideoMain extends React.Component {
  render() {
    let commentsList;

    if (this.props.chat) {
      commentsList = (
        <ChatWindow
          chat={this.props.chat}
          loggedIn={this.props.loggedIn}
          currentUser={this.props.currentUser}
          displayMessage={this.props.displayMessage}
        />
      );
    } else {
      commentsList = (
        <div>
          <p>Chat disabled for this video</p>
        </div>
      );
    }

    return (
      <div>
        <VideoPlayer video={this.props.video} />
        { commentsList }
      </div>
    );
  }
}
