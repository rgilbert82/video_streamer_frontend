import React                        from 'react';
import { Switch, Route }            from 'react-router-dom';
import { PageLoading, NothingHere } from '../Misc'
import { VideoMain, VideoStats }    from '.';
import { getVideoApi }              from '../../services/api/videos';

export default class VideoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: false,
      video:      {},
      chat:       null
    }

    this.fetchVideo = this.fetchVideo.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchVideo();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchVideo() {
    return getVideoApi(this.props.match.params.video_id)
      .then((data) => {
        this.setState({
          video:      data.video,
          chat:       data.chat,
          pageLoaded: true });
      }).catch(() => {
        this.props.displayMessage('There was an error loading the video.');
      });
  }

  render() {
    let content;

    if (this.state.pageLoaded) {
      content = (
        <Switch>
          <Route exact path='/videos/:video_id' render={ () =>
            <VideoMain
              video={this.state.video}
              chat={this.state.chat}
              loggedIn={this.props.loggedIn}
              currentUser={this.props.currentUser}
              displayMessage={this.props.displayMessage} />
          }/>

          <Route exact path='/videos/:video_id/stats' render={ (props) =>
            <VideoStats {...props}
              video={this.state.video}
              displayMessage={this.props.displayMessage}
            />
          }/>

          <Route path='/videos/:video_id/*' render={ () => <NothingHere /> } />
        </Switch>
      );
    } else {
      content = <PageLoading />;
    }

    return (
      <section>
        { content }
      </section>
    );
  }
}
