import React from 'react';
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
      }).catch((err) => {
        console.log('ERROR');
      });
  }

  render() {
    let content;

    if (this.state.pageLoaded) {
      content = (
        <div>
          <p>Videos go here...</p>
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
