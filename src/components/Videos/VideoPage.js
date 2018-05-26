import React                        from 'react';
import { Switch, Route }            from 'react-router-dom';
import { PageLoading, NothingHere } from '../Misc'
import { VideoMain, VideoStats }    from '.';

export default class VideoPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLoaded: true
    }
  }

  render() {
    let content;

    if (this.state.pageLoaded) {
      content = (
        <Switch>
          <Route exact path='/videos/:video_id' render={() => <VideoMain /> } />
          <Route exact path='/videos/:video_id/stats' render={() => <VideoStats /> } />
          <Route path='/videos/:video_id/*' render={() => <NothingHere /> } />
        </Switch>
      );
    } else {
      content = <PageLoading />;
    }

    return (
      <div>
        <h2>Video Page</h2>
        { content }
      </div>
    );
  }
}
