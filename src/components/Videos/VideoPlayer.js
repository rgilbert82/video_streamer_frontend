import React          from 'react';
import { formatDate } from '../../services/misc';

export default class VideoPlayer extends React.Component {
  render() {
    const videoUrl  = `https://www.youtube.com/embed/${this.props.video.id}?autoplay=1`;

    return (
      <div id='videoPlayerWrapper'>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title={this.props.video.id}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen >
        </iframe>
        <p>{this.props.video.description}</p>
        <small className='dateTag'>{formatDate(this.props.video.published_at)}</small>
      </div>
    )
  }
}
