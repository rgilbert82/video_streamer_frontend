import React           from 'react';
import { Link }        from 'react-router-dom';
import { ChatWindow }  from '../Chat';
import { VideoPlayer } from '.';

export default class VideoMain extends React.Component {
  render() {
    const statsPath = `/videos/${this.props.video.id}/stats`;
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
        <div id='videoCommentsWrapper'>
          <p className='loading'>Chat disabled for this video</p>
        </div>
      );
    }

    return (
      <div>
        <header className='videoHeader'>
          <h2>{this.props.video.title}</h2>
          <Link to={statsPath}>video stats</Link>
        </header>
        <div>
          <VideoPlayer video={this.props.video} />
          { commentsList }
        </div>
      </div>
    );
  }
}
