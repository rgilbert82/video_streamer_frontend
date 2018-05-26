import React from 'react';
import { Alert } from 'react-bootstrap';

export default class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.closeMessage = this.closeMessage.bind(this);
  }

  closeMessage(e) {
    e.preventDefault();
    this.props.closeMessage();
  }

  render() {
    return (
      <Alert className="message_window">
        <p>{this.props.message}</p>
        <a onClick={this.closeMessage} href="">&#xd7;</a>
      </Alert>
    );
  }
}
