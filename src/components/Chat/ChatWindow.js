import React                           from 'react';
import { getChatMessagesApi }          from '../../services/api/chats';
import { CommentsList, NewCommentForm} from '.';

export default class ChatWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      updating: false
    }

    this.fetchMessages = this.fetchMessages.bind(this);
    this.setFetchTimer = this.setFetchTimer.bind(this);
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
        if (data.comments.length > 0) {
          console.log(data.comments);
          this.setState({ updating: true, messages: this.state.messages.concat(data.comments) });
        }
        this.setFetchTimer(data.poll_interval);
      }).catch((err) => {
        this.props.displayMessage('There was an error loading the chat messages.');
      });
  }

  setFetchTimer(interval) {
    interval = interval < 3000 ? 3000 : interval

    if (this._isMounted) {
      setTimeout(() => {
        this.fetchMessages();
      }, interval);
    }
  }

  render() {
    return (
      <div>
        <CommentsList messages={this.state.messages} />
        <NewCommentForm />
      </div>
    );
  }
}
