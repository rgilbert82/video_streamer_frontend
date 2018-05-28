import React from 'react';

export default class UserHeader extends React.Component {
  render() {
    return (
      <div id='userProfileHeader'>
        <img src={this.props.user.image_url} alt={this.props.user.id} />
        <div id='userProfileHeaderDetails'>
          <h2>{this.props.user.username}</h2>
          <a href={this.props.user.youtube_url} target="_blank">Youtube channel</a>
        </div>
      </div>
    );
  }
}
