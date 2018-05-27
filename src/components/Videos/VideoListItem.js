import React    from 'react';
import { Link } from 'react-router-dom';

export default class VideoListItem extends React.Component {
  render() {
    const linkPath = `/videos/${this.props.video.content.id}`;
    let   chat_enabled;

    if (this.props.video.chat_enabled) {
      chat_enabled = <aside>live chat is available</aside>;
    } else {
      chat_enabled = <aside>live chat is disabled</aside>;
    }

    return (
      <div>
        <Link to={linkPath}><h3>{this.props.video.content.title}</h3></Link>
        <Link to={linkPath}><img src={this.props.video.content.thumbnail} alt={this.props.video.content.title} /></Link>
        <p>{this.props.video.content.description}</p>
        { chat_enabled }
      </div>
    );
  }
}
