import React                  from 'react';
import { getChatMessagesApi } from '../../services/api/chats';

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      updating: false
    }

    this.fetchMessages = this.fetchMessages.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.fetchMessages();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchMessages() {
    getChatMessagesApi(this.props.chat, this.state.updating)
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log('ERROR');
      });
  }

  render() {
    return (
      <div>
        <p>Comments go here...</p>
      </div>
    );
  }
}
