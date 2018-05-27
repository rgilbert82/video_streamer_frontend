import React          from 'react';
import { ChatWindow } from '../Chat';

export default class VideoMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commentsList;

    if (this.props.chat) {
      commentsList = <ChatWindow chat={this.props.chat} />;
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
