import React                      from 'react';
import { Switch, Route }          from 'react-router-dom';
import { VideosIndex, VideoPage } from '../Videos';
import { UserPage }               from '../Users';
import { NothingHere }            from '../Misc';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() => <VideosIndex /> } />
          <Route path='/videos/:video_id' render={(props) => <VideoPage {...props} /> } />
          <Route exact path='/users/:user_id' render={() => <UserPage /> } />
          <Route path='/*' render={() => <NothingHere /> } />
        </Switch>
      </div>
    );
  }
}
