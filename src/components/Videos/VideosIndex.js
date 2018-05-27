import React from 'react';
import { VideoListItem} from '.';
import { PageLoading }  from '../Misc'
import { getVideosApi } from '../../services/api/videos';

export default class VideosIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      videos: []
    }

    this.fetchVideos = this.fetchVideos.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchVideos();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchVideos() {
    return getVideosApi()
      .then((data) => {
        this.setState({ videos: data, pageLoaded: true });
        console.log(this.state.videos);
      }).catch((err) => {
        this.props.displayMessage('There was an error loading the videos');
      });
  }

  render() {
    let content;
    let videos;

    if (this.state.pageLoaded) {
      if (this.state.videos.length > 0) {
        videos = this.state.videos.map((video) => {
          return (
            <li key={video.content.id}>
              <VideoListItem video={video} />
            </li>
          );
        });
      } else {
        videos = (
          <div>
            <p>There are no videos here...</p>
          </div>
        );
      }

      content = (
        <div>
          <h2>Select a video stream</h2>
          <ul>
            { videos }
          </ul>
        </div>
      );
    } else {
      content = <PageLoading />;
    }

    return (
      <div>
        <h2>Videos index</h2>
        { content }
      </div>
    );
  }
}
