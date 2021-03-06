import React                      from 'react';
import { Switch, Route }          from 'react-router-dom';
import { VideosIndex, VideoPage } from '../Videos';
import { UserPage }               from '../Users';
import { NothingHere }            from '../Misc';

export default class Main extends React.Component {
  render() {
    return (
      <div id='main'>
        <Switch>
          <Route
            exact path='/'
            render={ () => <VideosIndex
              displayMessage={this.props.displayMessage}
            />
          }/>

          <Route
            path='/videos/:video_id'
            render={ (props) => <VideoPage {...props}
              loggedIn={this.props.loggedIn}
              currentUser={this.props.currentUser}
              displayMessage={this.props.displayMessage}
            />
          }/>

          <Route
            exact path='/users/:user_id'
            render={ (props) => <UserPage {...props}
              displayMessage={this.props.displayMessage}
            />
          }/>

          <Route
            path='/*'
            render={ () => <NothingHere /> }
          />
        </Switch>
      </div>
    );
  }
}
