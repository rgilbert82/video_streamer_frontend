import React              from 'react';
import { Link }           from 'react-router-dom';
import { PageLoading }    from '../Misc'
import { getVidStatsApi } from '../../services/api/videos';

export default class VideoStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      stats:      {}
    }

    this.fetchStats = this.fetchStats.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchStats();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchStats() {
    return getVidStatsApi(this.props.video.id)
      .then((data) => {
        this.setState({ pageLoaded: true, stats: data });
      }).catch((err) => {
        this.props.displayMessage('There was an error getting the stats.')
      });
  }

  render() {
    const videoPath = `/videos/${this.props.video.id}`;
    let content;

    if (this.state.pageLoaded) {
      content = (
        <div>
          <h2>Stats for <Link to={videoPath}>{this.props.video.title}</Link></h2>
          <ul>
            <li>
              <dl>
                <dt>Video Age:</dt>
                <dd>{this.state.stats.video_age} hours</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Current Stream Age:</dt>
                <dd>{this.state.stats.stream_age} hours</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Total Comments in Stream:</dt>
                <dd>{this.state.stats.total_comments}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>Avg Comments Per Hour:</dt>
                <dd>{this.state.stats.comments_per_hour}</dd>
              </dl>
            </li>
          </ul>
        </div>
      );
    } else {
      content = <PageLoading />;
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}
